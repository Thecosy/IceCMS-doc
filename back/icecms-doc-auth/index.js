const http = require("http");
const fs = require("fs");
const path = require("path");
const { randomBytes, scryptSync, timingSafeEqual } = require("crypto");

const HOST = process.env.AUTH_HOST || "0.0.0.0";
const PORT = Number(process.env.AUTH_PORT || process.env.PORT || "3001");
const COOKIE_NAME = "icecms_sid";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const PHONE_CODE_TTL_MS = 10 * 60 * 1000;
const secureCookie =
    process.env.AUTH_SECURE_COOKIE === "true" ||
    process.env.NODE_ENV === "production";
const enableDemoSeed =
    process.env.AUTH_ENABLE_DEMO_SEED === "true" ||
    process.env.NODE_ENV !== "production";
const enableAuthDevHelpers =
    process.env.AUTH_ENABLE_DEV_HELPERS === "true" ||
    process.env.NODE_ENV !== "production";
const dataDir = path.join(__dirname, "data");
const dbFile = path.join(dataDir, "auth-db.json");

const allowedOrigins = (
    process.env.AUTH_CORS_ORIGINS ||
    "http://localhost:3000,http://127.0.0.1:3000,http://localhost:3001,http://127.0.0.1:3001"
)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

ensureDbFile();

const server = http.createServer(async (req, res) => {
    applyCorsHeaders(req, res);

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    if (!url.pathname.startsWith("/api/")) {
        sendJson(res, 404, { message: "Not found" });
        return;
    }

    try {
        const db = loadDb();
        cleanupDb(db);

        if (url.pathname === "/api/health" && req.method === "GET") {
            sendJson(res, 200, { status: "ok" });
            return;
        }

        if (url.pathname === "/api/auth/session" && req.method === "GET") {
            const auth = getAuthenticatedContext(req, db);

            if (!auth) {
                sendJson(res, 200, { session: null });
                return;
            }

            touchAuthenticatedContext(auth, req);
            saveDb(db);
            sendJson(res, 200, { session: sanitizeUser(auth.user, auth.session) });
            return;
        }

        if (url.pathname === "/api/auth/register" && req.method === "POST") {
            const body = await readJson(req);
            const displayName = String(body.displayName || "").trim();
            const email = String(body.email || "").trim().toLowerCase();
            const password = String(body.password || "");

            if (!displayName || !email || !email.includes("@")) {
                sendJson(res, 400, { message: "请输入有效的显示名称和邮箱。" });
                return;
            }

            if (password.length < 6) {
                sendJson(res, 400, { message: "密码至少需要 6 位。" });
                return;
            }

            if (findUserByEmail(db, email)) {
                sendJson(res, 409, { message: "该邮箱已注册。" });
                return;
            }

            const user = createUser({
                db,
                displayName,
                email,
                provider: "password",
                password,
            });

            const session = createSession(db, user, req);
            saveDb(db);
            setSessionCookie(res, session.id);
            sendJson(res, 200, { session: sanitizeUser(user, session) });
            return;
        }

        if (url.pathname === "/api/auth/login" && req.method === "POST") {
            const body = await readJson(req);
            const identifier = String(body.identifier || "").trim().toLowerCase();
            const password = String(body.password || "");
            const user = findUserByIdentifier(db, identifier);

            if (!user || !verifyPassword(user, password)) {
                sendJson(res, 401, { message: "用户名、邮箱或密码错误。" });
                return;
            }

            const session = createSession(db, user, req);
            saveDb(db);
            setSessionCookie(res, session.id);
            sendJson(res, 200, { session: sanitizeUser(user, session) });
            return;
        }

        if (
            url.pathname === "/api/auth/request-phone-code" &&
            req.method === "POST"
        ) {
            if (!enableAuthDevHelpers) {
                sendJson(res, 501, {
                    message: "当前环境未配置短信服务，请使用账号密码或注册登录。",
                });
                return;
            }

            const body = await readJson(req);
            const phone = String(body.phone || "").trim();

            if (!/^\d{11,}$/.test(phone)) {
                sendJson(res, 400, { message: "请输入正确的手机号。" });
                return;
            }

            const code = generatePhoneCode();
            db.phoneCodes = db.phoneCodes.filter((item) => item.phone !== phone);
            db.phoneCodes.push({
                phone,
                code,
                expiresAt: Date.now() + PHONE_CODE_TTL_MS,
            });
            saveDb(db);
            sendJson(res, 200, {
                message: `验证码已发送至 ${phone}。`,
                devCode: enableAuthDevHelpers ? code : undefined,
            });
            return;
        }

        if (url.pathname === "/api/auth/login-phone" && req.method === "POST") {
            const body = await readJson(req);
            const phone = String(body.phone || "").trim();
            const code = String(body.code || "").trim();
            const phoneCode = db.phoneCodes.find(
                (item) => item.phone === phone && item.expiresAt > Date.now(),
            );

            if (!phoneCode || phoneCode.code !== code) {
                sendJson(res, 401, { message: "验证码错误或已过期。" });
                return;
            }

            db.phoneCodes = db.phoneCodes.filter((item) => item.phone !== phone);
            let user = findUserByPhone(db, phone);

            if (!user) {
                user = createUser({
                    db,
                    displayName: `用户${phone.slice(-4)}`,
                    email: `${phone}@icecms.pro`,
                    phone,
                    provider: "phone",
                });
            }

            user.phoneVerified = true;
            const session = createSession(db, user, req);
            saveDb(db);
            setSessionCookie(res, session.id);
            sendJson(res, 200, { session: sanitizeUser(user, session) });
            return;
        }

        if (url.pathname === "/api/auth/oauth/demo" && req.method === "POST") {
            if (!enableAuthDevHelpers) {
                sendJson(res, 501, {
                    message: "当前环境未配置第三方登录，请使用账号密码或注册登录。",
                });
                return;
            }

            const body = await readJson(req);
            const provider = String(body.provider || "").trim().toLowerCase();

            if (!provider) {
                sendJson(res, 400, { message: "缺少第三方登录提供方。" });
                return;
            }

            const email = `${provider}@oauth.icecms.pro`;
            let user = findUserByEmail(db, email);

            if (!user) {
                user = createUser({
                    db,
                    displayName: `${provider.toUpperCase()} User`,
                    email,
                    provider,
                });
                user.emailVerified = true;
            }

            const session = createSession(db, user, req);
            saveDb(db);
            setSessionCookie(res, session.id);
            sendJson(res, 200, { session: sanitizeUser(user, session) });
            return;
        }

        if (url.pathname === "/api/auth/logout" && req.method === "POST") {
            const cookies = parseCookies(req.headers.cookie || "");
            const sid = cookies[COOKIE_NAME];

            if (sid) {
                db.sessions = db.sessions.filter((item) => item.id !== sid);
                saveDb(db);
            }

            clearSessionCookie(res);
            sendJson(res, 200, { message: "已退出登录。" });
            return;
        }

        const auth = getAuthenticatedContext(req, db);

        if (!auth) {
            sendJson(res, 401, { message: "未登录或会话已失效。" });
            return;
        }

        touchAuthenticatedContext(auth, req);

        if (url.pathname === "/api/account/profile" && req.method === "PATCH") {
            const body = await readJson(req);
            auth.user.displayName =
                String(body.displayName || "").trim() || auth.user.displayName;
            auth.user.email = String(body.email || "").trim() || auth.user.email;
            auth.user.description = String(body.description || "").trim();
            saveDb(db);
            sendJson(res, 200, {
                session: sanitizeUser(auth.user, auth.session),
            });
            return;
        }

        if (
            url.pathname === "/api/account/notifications" &&
            req.method === "PATCH"
        ) {
            const body = await readJson(req);
            auth.user.notifications = {
                ...auth.user.notifications,
                ...body,
            };
            saveDb(db);
            sendJson(res, 200, {
                session: sanitizeUser(auth.user, auth.session),
            });
            return;
        }

        if (url.pathname === "/api/account/tokens" && req.method === "POST") {
            const body = await readJson(req);
            const tokenName =
                String(body.name || "").trim() ||
                `custom-${auth.user.tokens.length + 1}`;

            auth.user.tokens.unshift({
                id: createId("token"),
                name: tokenName,
                value: `icp_${auth.user.username}_sk_${randomBytes(4).toString("hex")}`,
                createdAt: formatDateTime(new Date()),
                lastUsedAt: "尚未使用",
            });
            saveDb(db);
            sendJson(res, 200, {
                session: sanitizeUser(auth.user, auth.session),
            });
            return;
        }

        if (
            url.pathname === "/api/account/devices/signout-others" &&
            req.method === "POST"
        ) {
            auth.user.devices = auth.user.devices.filter(
                (device) => device.id === auth.session.deviceId,
            );
            db.sessions = db.sessions.filter(
                (item) => item.id === auth.session.id || item.userId !== auth.user.id,
            );
            saveDb(db);
            sendJson(res, 200, {
                session: sanitizeUser(auth.user, auth.session),
            });
            return;
        }

        sendJson(res, 404, { message: "Not found" });
    } catch (error) {
        console.error("[auth-server]", error);
        sendJson(res, 500, {
            message: error?.message || "服务器内部错误。",
        });
    }
});

server.listen(PORT, HOST, () => {
    console.log(`[auth-server] listening on http://${HOST}:${PORT}`);
});

function ensureDbFile() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    if (!fs.existsSync(dbFile)) {
        const initialDb = {
            users: [],
            sessions: [],
            phoneCodes: [],
        };

        if (enableDemoSeed) {
            const seedUser = createUser({
                db: initialDb,
                displayName: "asd12",
                email: "admin@icecms.pro",
                phone: "17630505717",
                provider: "password",
                password: "icecms123456",
            });

            seedUser.description = "";
            seedUser.emailVerified = false;
            seedUser.sections.messages.unshift({
                id: createId("msg"),
                title: "欢迎来到 IceCMS Pro",
                meta: formatDateTime(new Date()),
                detail: "这是后端种子数据。你现在看到的订单、许可证、工单和设备都来自 Node 持久化数据文件。",
            });
        }

        fs.writeFileSync(dbFile, JSON.stringify(initialDb, null, 2));
    }
}

function loadDb() {
    return JSON.parse(fs.readFileSync(dbFile, "utf8"));
}

function saveDb(db) {
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

function cleanupDb(db) {
    const now = Date.now();
    db.sessions = db.sessions.filter((item) => item.expiresAt > now);
    db.phoneCodes = db.phoneCodes.filter((item) => item.expiresAt > now);
}

function createUser({ db, displayName, email, phone, provider, password }) {
    const username = createUniqueUsername(db, displayName || email.split("@")[0]);
    const passwordState = createPasswordState(password || randomBytes(8).toString("hex"));
    const registeredAt = formatDateTime(new Date());

    const user = {
        id: createId("user"),
        displayName,
        username,
        email,
        emailVerified: provider !== "password",
        phone: phone || "17630505717",
        phoneVerified: Boolean(phone),
        role: "普通用户",
        description: "",
        registeredAt,
        provider,
        passwordHash: passwordState.hash,
        passwordSalt: passwordState.salt,
        notifications: {
            productUpdates: true,
            orderUpdates: true,
            ticketUpdates: true,
            securityAlerts: true,
        },
        tokens: [
            {
                id: createId("token"),
                name: "docs-preview",
                value: `icp_${username}_sk_live_${randomBytes(3).toString("hex")}`,
                createdAt: registeredAt,
                lastUsedAt: registeredAt,
            },
        ],
        devices: [],
        stats: {
            orders: 12,
            licenses: 3,
            tickets: 2,
            referrals: 6,
        },
        sections: createDefaultSections(displayName, email),
    };

    db.users.push(user);
    return user;
}

function createDefaultSections(displayName, email) {
    return {
        messages: [
            {
                id: createId("msg"),
                title: "授权交付提醒",
                meta: formatDateTime(new Date()),
                detail: `${displayName}，你的授权备案与交付信息会在这里集中提醒。`,
            },
            {
                id: createId("msg"),
                title: "工单回复",
                meta: "2026-03-16 18:42",
                detail: "工单 #T-2031 已收到处理回复，请进入工单查看详情。",
            },
        ],
        orders: [
            {
                id: createId("order"),
                title: "IceCMS Pro 捐赠版",
                meta: "订单号 ICP-20260317-001",
                detail: `支付成功 · 已交付 · 金额 ￥249 · 联系邮箱 ${email}`,
            },
            {
                id: createId("order"),
                title: "定制服务咨询",
                meta: "订单号 ICP-20260312-008",
                detail: "待确认需求 · 可联系作者继续推进。",
            },
        ],
        coupons: [
            {
                id: createId("coupon"),
                title: "春季活动券",
                meta: "满 299 可用",
                detail: "有效期至 2026-03-31，适用于授权产品。",
            },
        ],
        licenses: [
            {
                id: createId("license"),
                title: "IceCMS Pro 捐赠版",
                meta: `许可证 ICP-LIC-${randomBytes(4).toString("hex").toUpperCase()}`,
                detail: "永久授权 · 不限根域名 · 已备案",
            },
            {
                id: createId("license"),
                title: "Nuxt SEO 套件",
                meta: `许可证 ICP-SEO-${randomBytes(3).toString("hex").toUpperCase()}`,
                detail: "附加权益 · 已启用",
            },
        ],
        tickets: [
            {
                id: createId("ticket"),
                title: "部署环境配置确认",
                meta: "工单 #T-2031",
                detail: "处理中 · 最近更新 2026-03-16 18:42",
            },
            {
                id: createId("ticket"),
                title: "支付回调联调咨询",
                meta: "工单 #T-1988",
                detail: "已完成 · 最近更新 2026-03-10 14:06",
            },
        ],
        invoices: [
            {
                id: createId("invoice"),
                title: "增值税普通电子发票",
                meta: "金额 ￥249",
                detail: `已开具 · 发送至 ${email}`,
            },
        ],
        referrals: [
            {
                id: createId("referral"),
                title: "推荐总数",
                meta: "6 位访客转化",
                detail: "当前可结算奖励 3 单，推荐链接可继续分发。",
            },
        ],
        market: [
            {
                id: createId("market"),
                title: "IceCMS Pro 捐赠版",
                meta: "￥249",
                detail: "个人/小团队最常用授权方案。",
            },
            {
                id: createId("market"),
                title: "定制版服务",
                meta: "详询",
                detail: "适合企业交付与深度定制场景。",
            },
        ],
        storeOrders: [
            {
                id: createId("store"),
                title: "授权商城订单 ICP-MKT-1221",
                meta: "已支付",
                detail: "等待开票资料确认。",
            },
        ],
        groupBuy: [
            {
                id: createId("group"),
                title: "春季联合购买活动",
                meta: "待成团",
                detail: "当前还差 1 人成团，可分享给团队成员。",
            },
        ],
    };
}

function createPasswordState(password) {
    const salt = randomBytes(16).toString("hex");
    const hash = scryptSync(password, salt, 64).toString("hex");
    return { salt, hash };
}

function verifyPassword(user, password) {
    const derived = scryptSync(password, user.passwordSalt, 64);
    return timingSafeEqual(Buffer.from(user.passwordHash, "hex"), derived);
}

function createUniqueUsername(db, baseValue) {
    const normalizedBase =
        String(baseValue || "icecms_user")
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9_\u4e00-\u9fa5-]/g, "")
            .slice(0, 20) || "icecms_user";

    let candidate = normalizedBase;
    let index = 1;

    while (db.users.some((item) => item.username === candidate)) {
        candidate = `${normalizedBase}${index}`;
        index += 1;
    }

    return candidate;
}

function createSession(db, user, req) {
    const device = {
        id: createId("device"),
        name: getDeviceName(req.headers["user-agent"] || ""),
        ip: getRequestIp(req),
        location: "Shanghai, CN",
        lastActiveAt: formatDateTime(new Date()),
    };

    user.devices = [device, ...user.devices].slice(0, 10);

    const session = {
        id: createId("sid"),
        userId: user.id,
        deviceId: device.id,
        createdAt: Date.now(),
        expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
    };

    db.sessions = db.sessions.filter((item) => item.id !== session.id);
    db.sessions.push(session);

    return session;
}

function sanitizeUser(user, currentSession) {
    return {
        id: user.id,
        displayName: user.displayName,
        username: user.username,
        email: user.email,
        emailVerified: user.emailVerified,
        phone: user.phone,
        phoneVerified: user.phoneVerified,
        role: user.role,
        description: user.description,
        registeredAt: user.registeredAt,
        provider: user.provider,
        notifications: user.notifications,
        tokens: user.tokens,
        devices: user.devices.map((device) => ({
            ...device,
            current: currentSession ? device.id === currentSession.deviceId : false,
        })),
        stats: user.stats,
        sections: user.sections,
    };
}

function findUserByIdentifier(db, identifier) {
    return db.users.find(
        (item) =>
            item.email.toLowerCase() === identifier ||
            item.username.toLowerCase() === identifier,
    );
}

function findUserByEmail(db, email) {
    return db.users.find((item) => item.email.toLowerCase() === email);
}

function findUserByPhone(db, phone) {
    return db.users.find((item) => item.phone === phone);
}

function getAuthenticatedContext(req, db) {
    const cookies = parseCookies(req.headers.cookie || "");
    const sid = cookies[COOKIE_NAME];

    if (!sid) {
        return null;
    }

    const session = db.sessions.find((item) => item.id === sid);

    if (!session) {
        return null;
    }

    const user = db.users.find((item) => item.id === session.userId);

    if (!user) {
        return null;
    }

    return { user, session, db };
}

function touchAuthenticatedContext(auth, req) {
    auth.session.expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
    const device = auth.user.devices.find(
        (item) => item.id === auth.session.deviceId,
    );

    if (device) {
        device.ip = getRequestIp(req);
        device.lastActiveAt = formatDateTime(new Date());
    }
}

function setSessionCookie(res, sid) {
    res.setHeader(
        "Set-Cookie",
        `${COOKIE_NAME}=${sid}; HttpOnly; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax${secureCookie ? "; Secure" : ""}`,
    );
}

function clearSessionCookie(res) {
    res.setHeader(
        "Set-Cookie",
        `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secureCookie ? "; Secure" : ""}`,
    );
}

function parseCookies(cookieHeader) {
    return cookieHeader
        .split(";")
        .map((chunk) => chunk.trim())
        .filter(Boolean)
        .reduce((accumulator, chunk) => {
            const separatorIndex = chunk.indexOf("=");

            if (separatorIndex === -1) {
                return accumulator;
            }

            const key = chunk.slice(0, separatorIndex);
            const value = chunk.slice(separatorIndex + 1);
            accumulator[key] = decodeURIComponent(value);
            return accumulator;
        }, {});
}

function readJson(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString("utf8");
        });

        req.on("end", () => {
            if (!body) {
                resolve({});
                return;
            }

            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error("请求体 JSON 格式不正确。"));
            }
        });

        req.on("error", reject);
    });
}

function applyCorsHeaders(req, res) {
    const origin = req.headers.origin;

    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Credentials", "true");
    }

    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS");
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify(payload));
}

function createId(prefix) {
    return `${prefix}_${randomBytes(6).toString("hex")}`;
}

function generatePhoneCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
}

function formatDateTime(date) {
    const pad = (value) => String(value).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate(),
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getDeviceName(userAgent) {
    const normalized = String(userAgent || "").toLowerCase();

    if (normalized.includes("iphone")) {
        return "iPhone Safari";
    }

    if (normalized.includes("android")) {
        return "Android Browser";
    }

    if (normalized.includes("mac")) {
        return "MacBook Pro / Browser";
    }

    if (normalized.includes("windows")) {
        return "Windows Browser";
    }

    return "Current Browser Session";
}

function getRequestIp(req) {
    const forwarded = req.headers["x-forwarded-for"];

    if (typeof forwarded === "string" && forwarded) {
        return forwarded.split(",")[0].trim();
    }

    return req.socket.remoteAddress || "127.0.0.1";
}

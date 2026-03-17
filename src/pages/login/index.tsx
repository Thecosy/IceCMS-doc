import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import React from "react";

import { useAccountSession } from "@site/src/hooks/use-account-session";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { CheckCircle } from "@site/src/refine-theme/icons/check-circle";
import { LandingFooter } from "@site/src/refine-theme/landing-footer";

const sectionWidth = clsx(
    "mx-auto",
    "w-full",
    "max-w-[592px]",
    "landing-sm:max-w-[656px]",
    "landing-md:max-w-[896px]",
    "landing-lg:max-w-[1200px]",
);

const heroPoints = [
    "账号密码登录接入真实 Node 会话后端。",
    "手机验证码登录支持服务端发码与校验。",
    "预留 GitHub / Google / 微信等第三方登录演示入口。",
];

const providers = [
    { id: "github", label: "GitHub 登录" },
    { id: "google", label: "Google 登录" },
    { id: "wechat", label: "微信登录" },
];

const getSafeRedirect = (search: string) => {
    const params = new URLSearchParams(search);
    const redirect =
        params.get("redirect") || params.get("redirect_uri") || "/account";

    try {
        const decoded = decodeURIComponent(redirect);

        if (decoded.startsWith("/")) {
            return decoded;
        }

        if (typeof window !== "undefined") {
            const url = new URL(decoded);

            if (url.origin === window.location.origin) {
                return `${url.pathname}${url.search}${url.hash}`;
            }
        }
    } catch {
        return "/account";
    }

    return "/account";
};

const LoginPage: React.FC = () => {
    const location = useLocation();
    const {
        session,
        loading,
        error,
        loginWithPassword,
        registerWithPassword,
        requestPhoneCode,
        loginWithPhone,
        loginWithProvider,
    } = useAccountSession();

    const [method, setMethod] = React.useState<"password" | "phone">(
        "password",
    );
    const [mode, setMode] = React.useState<"login" | "register">("login");
    const [rememberMe, setRememberMe] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    const [statusMessage, setStatusMessage] = React.useState("");
    const [localError, setLocalError] = React.useState("");
    const [devCode, setDevCode] = React.useState("");
    const [passwordForm, setPasswordForm] = React.useState({
        displayName: "",
        identifier: "",
        password: "",
        confirmPassword: "",
    });
    const [phoneForm, setPhoneForm] = React.useState({
        phone: "",
        code: "",
    });

    const redirectHref = getSafeRedirect(location.search);

    const navigateAfterLogin = React.useCallback(() => {
        if (typeof window !== "undefined") {
            window.location.href = redirectHref;
        }
    }, [redirectHref]);

    const handlePasswordSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        try {
            setSubmitting(true);
            setLocalError("");
            setStatusMessage("");

            if (mode === "register") {
                if (!passwordForm.displayName.trim()) {
                    throw new Error("请输入显示名称。");
                }

                if (!passwordForm.identifier.trim().includes("@")) {
                    throw new Error("注册时请输入有效邮箱地址。");
                }

                if (passwordForm.password.trim().length < 6) {
                    throw new Error("密码至少需要 6 位。");
                }

                if (passwordForm.password !== passwordForm.confirmPassword) {
                    throw new Error("两次输入的密码不一致。");
                }

                await registerWithPassword({
                    displayName: passwordForm.displayName.trim(),
                    email: passwordForm.identifier.trim(),
                    password: passwordForm.password,
                });
                setStatusMessage("注册成功，正在进入个人中心。");
                navigateAfterLogin();
                return;
            }

            if (!passwordForm.identifier.trim() || !passwordForm.password.trim()) {
                throw new Error("请输入用户名/邮箱和密码。");
            }

            await loginWithPassword({
                identifier: passwordForm.identifier.trim(),
                password: passwordForm.password,
            });

            setStatusMessage(
                rememberMe
                    ? "登录成功，已保持当前会话。"
                    : "登录成功，正在进入个人中心。",
            );
            navigateAfterLogin();
        } catch (submitError: any) {
            setLocalError(submitError?.message || "登录失败");
        } finally {
            setSubmitting(false);
        }
    };

    const handlePhoneSendCode = async () => {
        try {
            setLocalError("");
            setStatusMessage("");

            if (phoneForm.phone.trim().length < 11) {
                throw new Error("请先输入正确的手机号。");
            }

            const result = await requestPhoneCode(phoneForm.phone.trim());
            setStatusMessage(result.message);
            setDevCode(result.devCode || "");
        } catch (requestError: any) {
            setLocalError(requestError?.message || "发送验证码失败");
        }
    };

    const handlePhoneSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setSubmitting(true);
            setLocalError("");
            setStatusMessage("");

            if (phoneForm.phone.trim().length < 11 || phoneForm.code.trim().length < 4) {
                throw new Error("请输入正确的手机号和验证码。");
            }

            await loginWithPhone({
                phone: phoneForm.phone.trim(),
                code: phoneForm.code.trim(),
            });

            setStatusMessage("登录成功，正在进入个人中心。");
            navigateAfterLogin();
        } catch (submitError: any) {
            setLocalError(submitError?.message || "手机登录失败");
        } finally {
            setSubmitting(false);
        }
    };

    const handleProviderLogin = async (provider: string) => {
        try {
            setSubmitting(true);
            setLocalError("");
            setStatusMessage("");

            await loginWithProvider({ provider });
            setStatusMessage(`${provider} 登录成功，正在进入个人中心。`);
            navigateAfterLogin();
        } catch (submitError: any) {
            setLocalError(submitError?.message || "第三方登录失败");
        } finally {
            setSubmitting(false);
        }
    };

    const feedback = localError || error || statusMessage;
    const hasError = Boolean(localError || error);

    return (
        <>
            <Head>
                <title>登录 IceCMS 账号 | IceCMS</title>
                <meta
                    name="description"
                    content="登录 IceCMS 账号，访问个人中心、订单、许可证与授权服务。"
                />
            </Head>

            <CommonLayout description="登录 IceCMS 账号，访问个人中心、订单、许可证与授权服务。">
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-r from-[#fae9f2] via-[#eef4ff] to-[#e6f6ff] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
                        <div className="absolute left-[-90px] top-[120px] h-[280px] w-[280px] rounded-full bg-sky-200/40 blur-3xl dark:bg-cyan-800/20" />
                        <div className="absolute right-[-40px] top-[180px] h-[220px] w-[220px] rounded-full bg-pink-200/40 blur-3xl dark:bg-blue-800/20" />
                    </div>

                    <CommonHeader />

                    <main
                        className={clsx(
                            sectionWidth,
                            "relative px-4 landing-sm:px-6 landing-lg:px-0",
                            "pt-10 landing-sm:pt-14 landing-lg:pt-16",
                            "pb-16 landing-sm:pb-20",
                        )}
                    >
                        <div
                            className={clsx(
                                "grid gap-8 landing-lg:gap-10",
                                "landing-lg:grid-cols-[minmax(0,1fr)_460px]",
                                "items-start",
                            )}
                        >
                            <section
                                className={clsx(
                                    "rounded-[32px] border border-gray-200 bg-white/90 p-7 backdrop-blur landing-sm:p-10",
                                    "dark:border-gray-700 dark:bg-gray-800/85",
                                )}
                            >
                                <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300">
                                    Account Gateway
                                </div>
                                <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 dark:text-gray-0 landing-sm:text-5xl">
                                    登录 IceCMS 账号
                                </h1>
                                <p className="mt-5 max-w-[640px] text-base leading-7 text-gray-600 dark:text-gray-400">
                                    当前页面已经切到真实 Node 后端模式。登录、注册、发码、会话读取和个人中心资料变更都通过后端 API 完成，而不是浏览器本地存储。
                                </p>

                                <div className="mt-8 grid gap-4 landing-sm:grid-cols-2">
                                    {heroPoints.map((point) => (
                                        <div
                                            key={point}
                                            className="rounded-3xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70"
                                        >
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-6 w-6 text-sky-600 dark:text-cyan-300" />
                                                <div className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                                                    {point}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section
                                className={clsx(
                                    "rounded-[32px] border border-gray-200 bg-white/95 p-6 backdrop-blur landing-sm:p-8",
                                    "dark:border-gray-700 dark:bg-gray-800/90",
                                )}
                            >
                                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
                                    Sign In
                                </div>
                                <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-0">
                                    {method === "password" && mode === "register"
                                        ? "创建账号"
                                        : "登录账号"}
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    默认登录成功后跳转到个人中心。开发环境下手机号发码接口会把验证码直接返回到页面，便于联调。
                                </p>

                                {loading ? (
                                    <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-400">
                                        正在读取登录状态...
                                    </div>
                                ) : null}

                                {session ? (
                                    <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:text-emerald-300">
                                        当前已登录为
                                        {" "}
                                        <span className="font-semibold">{session.displayName}</span>
                                        ，你也可以直接进入
                                        {" "}
                                        <Link href="/account" className="font-semibold underline">
                                            个人中心
                                        </Link>
                                        。
                                    </div>
                                ) : null}

                                <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1 dark:bg-gray-900">
                                    <button
                                        type="button"
                                        onClick={() => setMethod("password")}
                                        className={clsx(
                                            "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                                            method === "password"
                                                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-0"
                                                : "text-gray-500 dark:text-gray-400",
                                        )}
                                    >
                                        账号密码登录
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMethod("phone");
                                            setMode("login");
                                        }}
                                        className={clsx(
                                            "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                                            method === "phone"
                                                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-0"
                                                : "text-gray-500 dark:text-gray-400",
                                        )}
                                    >
                                        手机验证码登录
                                    </button>
                                </div>

                                {method === "password" ? (
                                    <>
                                        <div className="mt-4 flex items-center gap-3 text-sm">
                                            <button
                                                type="button"
                                                onClick={() => setMode("login")}
                                                className={clsx(
                                                    "font-semibold",
                                                    mode === "login"
                                                        ? "text-gray-900 dark:text-gray-0"
                                                        : "text-gray-500 dark:text-gray-400",
                                                )}
                                            >
                                                登录
                                            </button>
                                            <span className="text-gray-300 dark:text-gray-600">/</span>
                                            <button
                                                type="button"
                                                onClick={() => setMode("register")}
                                                className={clsx(
                                                    "font-semibold",
                                                    mode === "register"
                                                        ? "text-gray-900 dark:text-gray-0"
                                                        : "text-gray-500 dark:text-gray-400",
                                                )}
                                            >
                                                注册
                                            </button>
                                        </div>

                                        <form className="mt-6 space-y-4" onSubmit={handlePasswordSubmit}>
                                            {mode === "register" && (
                                                <FormField
                                                    label="显示名称"
                                                    value={passwordForm.displayName}
                                                    onChange={(value) =>
                                                        setPasswordForm((previous) => ({
                                                            ...previous,
                                                            displayName: value,
                                                        }))
                                                    }
                                                    placeholder="输入显示名称"
                                                />
                                            )}
                                            <FormField
                                                label={
                                                    mode === "register"
                                                        ? "邮箱地址"
                                                        : "用户名或邮箱地址"
                                                }
                                                value={passwordForm.identifier}
                                                onChange={(value) =>
                                                    setPasswordForm((previous) => ({
                                                        ...previous,
                                                        identifier: value,
                                                    }))
                                                }
                                                placeholder={
                                                    mode === "register"
                                                        ? "输入邮箱"
                                                        : "输入用户名或邮箱"
                                                }
                                            />
                                            <FormField
                                                label="密码"
                                                type="password"
                                                value={passwordForm.password}
                                                onChange={(value) =>
                                                    setPasswordForm((previous) => ({
                                                        ...previous,
                                                        password: value,
                                                    }))
                                                }
                                                placeholder="输入密码"
                                                hintLink={
                                                    mode === "login" ? (
                                                        <Link
                                                            href="mailto:23339097@qq.com"
                                                            className="text-sm font-medium text-sky-700 hover:no-underline dark:text-cyan-300"
                                                        >
                                                            忘记密码？
                                                        </Link>
                                                    ) : undefined
                                                }
                                            />
                                            {mode === "register" && (
                                                <FormField
                                                    label="确认密码"
                                                    type="password"
                                                    value={passwordForm.confirmPassword}
                                                    onChange={(value) =>
                                                        setPasswordForm((previous) => ({
                                                            ...previous,
                                                            confirmPassword: value,
                                                        }))
                                                    }
                                                    placeholder="再次输入密码"
                                                />
                                            )}
                                            <label className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                <input
                                                    type="checkbox"
                                                    checked={rememberMe}
                                                    onChange={(event) =>
                                                        setRememberMe(event.target.checked)
                                                    }
                                                    className="h-4 w-4 rounded border-gray-300 text-sky-600"
                                                />
                                                保持登录会话
                                            </label>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full rounded-full bg-refine-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300"
                                            >
                                                {submitting
                                                    ? "提交中..."
                                                    : mode === "register"
                                                      ? "注册并进入个人中心"
                                                      : "登录"}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <form className="mt-6 space-y-4" onSubmit={handlePhoneSubmit}>
                                        <FormField
                                            label="手机号"
                                            value={phoneForm.phone}
                                            onChange={(value) =>
                                                setPhoneForm((previous) => ({
                                                    ...previous,
                                                    phone: value,
                                                }))
                                            }
                                            placeholder="输入手机号"
                                        />
                                        <div>
                                            <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                验证码
                                            </div>
                                            <div className="flex gap-3">
                                                <input
                                                    value={phoneForm.code}
                                                    onChange={(event) =>
                                                        setPhoneForm((previous) => ({
                                                            ...previous,
                                                            code: event.target.value,
                                                        }))
                                                    }
                                                    placeholder="输入验证码"
                                                    className="min-w-0 flex-1 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-sky-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-0"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handlePhoneSendCode}
                                                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                                                >
                                                    发送验证码
                                                </button>
                                            </div>
                                            {devCode && (
                                                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                                    开发环境验证码：
                                                    {" "}
                                                    <span className="font-semibold text-sky-700 dark:text-cyan-300">
                                                        {devCode}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full rounded-full bg-refine-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300"
                                        >
                                            {submitting ? "登录中..." : "登录"}
                                        </button>
                                    </form>
                                )}

                                {feedback && (
                                    <div
                                        className={clsx(
                                            "mt-5 rounded-2xl px-4 py-3 text-sm",
                                            hasError
                                                ? "bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-300"
                                                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300",
                                        )}
                                    >
                                        {feedback}
                                    </div>
                                )}

                                <div className="mt-8">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-0">
                                        其他登录方式
                                    </div>
                                    <div className="mt-3 grid gap-3">
                                        {providers.map((provider) => (
                                            <button
                                                key={provider.id}
                                                type="button"
                                                onClick={() => handleProviderLogin(provider.id)}
                                                disabled={submitting}
                                                className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                                            >
                                                <span>{provider.label}</span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    Node API
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                                    默认预置账号：
                                    {" "}
                                    <span className="font-semibold">admin@icecms.pro</span>
                                    {" "}
                                    / 密码
                                    {" "}
                                    <span className="font-semibold">icecms123456</span>
                                </div>
                            </section>
                        </div>
                    </main>

                    <LandingFooter />
                </div>
            </CommonLayout>
        </>
    );
};

const FormField = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    hintLink,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    hintLink?: React.ReactNode;
}) => (
    <div>
        <div className="mb-2 flex items-center justify-between gap-3">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </div>
            {hintLink}
        </div>
        <input
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-sky-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-0"
        />
    </div>
);

export default LoginPage;

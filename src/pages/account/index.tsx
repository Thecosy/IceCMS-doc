import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import React from "react";

import {
    AccountSectionItem,
    AccountSession,
    useAccountSession,
} from "@site/src/hooks/use-account-session";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { CheckCircle } from "@site/src/refine-theme/icons/check-circle";
import { LandingFooter } from "@site/src/refine-theme/landing-footer";

const sectionWidth = clsx("mx-auto", "w-full", "max-w-[1400px]");

const overviewTabs = [
    { id: "details", label: "详情" },
    { id: "notifications", label: "通知配置" },
    { id: "tokens", label: "个人令牌" },
    { id: "identity", label: "身份认证" },
    { id: "devices", label: "登录设备" },
] as const;

const sidebarItems = [
    { id: "overview", label: "我的" },
    { id: "messages", label: "消息" },
    { type: "label", label: "产品市场" },
    { id: "orders", label: "订单列表" },
    { id: "coupons", label: "我的优惠券" },
    { id: "licenses", label: "我的许可证" },
    { id: "tickets", label: "我的工单" },
    { id: "invoices", label: "我的发票" },
    { id: "referrals", label: "我的推荐" },
    { id: "market", label: "授权商城" },
    { id: "storeOrders", label: "商城订单" },
    { id: "groupBuy", label: "我的拼团" },
] as const;

const isValidOverviewTab = (value: string): value is (typeof overviewTabs)[number]["id"] =>
    overviewTabs.some((item) => item.id === value);

const buildAccountHref = (section: string, tab?: string) => {
    const params = new URLSearchParams();
    params.set("section", section);

    if (tab) {
        params.set("tab", tab);
    }

    return `/account?${params.toString()}`;
};

const AccountPage: React.FC = () => {
    const location = useLocation();
    const {
        session,
        loading,
        logout,
        updateProfile,
        updateNotifications,
        createToken,
        signOutOtherDevices,
    } = useAccountSession();

    const [isEditing, setIsEditing] = React.useState(false);
    const [copiedTokenId, setCopiedTokenId] = React.useState("");
    const [statusMessage, setStatusMessage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const [formState, setFormState] = React.useState({
        displayName: "",
        email: "",
        description: "",
    });

    const params = new URLSearchParams(location.search);
    const section = params.get("section") || "overview";
    const rawTab = params.get("tab") || "details";
    const activeTab = isValidOverviewTab(rawTab) ? rawTab : "details";

    React.useEffect(() => {
        if (!session) {
            return;
        }

        setFormState({
            displayName: session.displayName,
            email: session.email,
            description: session.description,
        });
    }, [session]);

    const handleLogout = async () => {
        setBusy(true);
        await logout();

        if (typeof window !== "undefined") {
            window.location.href = "/login";
        }
    };

    const handleSaveProfile = async () => {
        if (!session) {
            return;
        }

        try {
            setBusy(true);
            const nextSession = await updateProfile({
                displayName: formState.displayName,
                email: formState.email,
                description: formState.description,
            });
            setFormState({
                displayName: nextSession.displayName,
                email: nextSession.email,
                description: nextSession.description,
            });
            setIsEditing(false);
            setStatusMessage("资料已保存。");
            setErrorMessage("");
        } catch (requestError: any) {
            setErrorMessage(requestError?.message || "保存资料失败");
            setStatusMessage("");
        } finally {
            setBusy(false);
        }
    };

    const handleToggleNotification = async (
        key: keyof AccountSession["notifications"],
    ) => {
        if (!session) {
            return;
        }

        try {
            setBusy(true);
            await updateNotifications({
                [key]: !session.notifications[key],
            });
            setStatusMessage("通知设置已更新。");
            setErrorMessage("");
        } catch (requestError: any) {
            setErrorMessage(requestError?.message || "更新通知失败");
            setStatusMessage("");
        } finally {
            setBusy(false);
        }
    };

    const handleCreateToken = async () => {
        try {
            setBusy(true);
            await createToken();
            setStatusMessage("新的个人令牌已创建。");
            setErrorMessage("");
        } catch (requestError: any) {
            setErrorMessage(requestError?.message || "创建令牌失败");
            setStatusMessage("");
        } finally {
            setBusy(false);
        }
    };

    const handleCopyToken = async (tokenId: string, tokenValue: string) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            await navigator.clipboard.writeText(tokenValue);
        }

        setCopiedTokenId(tokenId);
        window.setTimeout(() => setCopiedTokenId(""), 1600);
    };

    const handleSignOutOthers = async () => {
        try {
            setBusy(true);
            await signOutOtherDevices();
            setStatusMessage("其他设备已下线。");
            setErrorMessage("");
        } catch (requestError: any) {
            setErrorMessage(requestError?.message || "下线其他设备失败");
            setStatusMessage("");
        } finally {
            setBusy(false);
        }
    };

    return (
        <>
            <Head>
                <title>个人中心 | IceCMS</title>
                <meta
                    name="description"
                    content="查看个人中心、订单、许可证、工单、令牌与登录设备。"
                />
            </Head>

            <CommonLayout description="查看个人中心、订单、许可证、工单、令牌与登录设备。">
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-[260px] bg-gradient-to-r from-[#eef4ff] via-[#f5f8ff] to-[#eaf8ff] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
                        <div className="absolute left-[-80px] top-[220px] h-[320px] w-[320px] rounded-full bg-sky-200/25 blur-3xl dark:bg-cyan-800/15" />
                    </div>

                    <CommonHeader />

                    <main
                        className={clsx(
                            sectionWidth,
                            "relative px-4 landing-sm:px-6 landing-lg:px-8",
                            "pt-10 landing-sm:pt-12",
                            "pb-16 landing-sm:pb-20",
                        )}
                    >
                        {loading ? (
                            <LoadingPanel />
                        ) : !session ? (
                            <AccessGate />
                        ) : (
                            <div className="grid gap-6 landing-lg:grid-cols-[320px_minmax(0,1fr)]">
                                <aside
                                    className={clsx(
                                        "rounded-[32px] border border-gray-200 bg-white/90 p-4 backdrop-blur",
                                        "dark:border-gray-700 dark:bg-gray-800/85",
                                        "landing-lg:sticky landing-lg:top-24 landing-lg:h-fit",
                                    )}
                                >
                                    <div className="rounded-[26px] bg-gray-50 p-4 dark:bg-gray-900/70">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-lg font-semibold text-white">
                                                {session.displayName.slice(0, 1).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                                                    IceCMS Pro
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    授权与服务中心
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-1">
                                        {sidebarItems.map((item) => {
                                            if ("type" in item) {
                                                return (
                                                    <div
                                                        key={item.label}
                                                        className="px-3 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400"
                                                    >
                                                        {item.label}
                                                    </div>
                                                );
                                            }

                                            const isActive = section === item.id;

                                            return (
                                                <Link
                                                    key={item.id}
                                                    href={buildAccountHref(
                                                        item.id,
                                                        item.id === "overview"
                                                            ? activeTab
                                                            : undefined,
                                                    )}
                                                    className={clsx(
                                                        "flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-medium transition-colors hover:no-underline",
                                                        isActive
                                                            ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-0"
                                                            : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/70",
                                                    )}
                                                >
                                                    <SidebarBadge label={item.label} active={isActive} />
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-6 rounded-[26px] border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/70">
                                        <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                            {session.displayName}
                                        </div>
                                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            @{session.username}
                                        </div>
                                        <div className="mt-3 inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300">
                                            {session.role}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            disabled={busy}
                                            className="mt-4 flex w-full items-center justify-center rounded-full border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                                        >
                                            退出登录
                                        </button>
                                    </div>
                                </aside>

                                <section
                                    className={clsx(
                                        "rounded-[32px] border border-gray-200 bg-white/90 p-5 backdrop-blur landing-sm:p-6",
                                        "dark:border-gray-700 dark:bg-gray-800/85",
                                    )}
                                >
                                    <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 dark:border-gray-700 landing-sm:flex-row landing-sm:items-start landing-sm:justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-4xl font-semibold text-white shadow-[0_20px_50px_rgba(14,165,233,0.22)]">
                                                {session.displayName.slice(0, 1).toUpperCase()}
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-0">
                                                    {session.displayName}
                                                </h1>
                                                <div className="mt-2 text-xl text-gray-500 dark:text-gray-400">
                                                    @{session.username}
                                                </div>
                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    <StatPill
                                                        label="订单"
                                                        value={`${session.stats.orders}`}
                                                    />
                                                    <StatPill
                                                        label="许可证"
                                                        value={`${session.stats.licenses}`}
                                                    />
                                                    <StatPill
                                                        label="工单"
                                                        value={`${session.stats.tickets}`}
                                                    />
                                                    <StatPill
                                                        label="推荐"
                                                        value={`${session.stats.referrals}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {section === "overview" && activeTab === "details" ? (
                                            <div className="flex gap-3">
                                                {isEditing ? (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={handleSaveProfile}
                                                            disabled={busy}
                                                            className="rounded-full bg-refine-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300"
                                                        >
                                                            保存
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setIsEditing(false)}
                                                            disabled={busy}
                                                            className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                                                        >
                                                            取消
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsEditing(true)}
                                                        className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                                                    >
                                                        编辑
                                                    </button>
                                                )}
                                            </div>
                                        ) : null}
                                    </div>

                                    {(statusMessage || errorMessage) && (
                                        <div
                                            className={clsx(
                                                "mt-6 rounded-2xl px-4 py-3 text-sm",
                                                errorMessage
                                                    ? "bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-300"
                                                    : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300",
                                            )}
                                        >
                                            {errorMessage || statusMessage}
                                        </div>
                                    )}

                                    <div className="mt-6">
                                        {section === "overview" ? (
                                            <>
                                                <div className="grid gap-2 rounded-[24px] bg-gray-100 p-2 dark:bg-gray-900 landing-sm:grid-cols-5">
                                                    {overviewTabs.map((tab) => (
                                                        <Link
                                                            key={tab.id}
                                                            href={buildAccountHref("overview", tab.id)}
                                                            className={clsx(
                                                                "rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-colors hover:no-underline",
                                                                activeTab === tab.id
                                                                    ? "bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-0"
                                                                    : "text-gray-500 dark:text-gray-400",
                                                            )}
                                                        >
                                                            {tab.label}
                                                        </Link>
                                                    ))}
                                                </div>

                                                <div className="mt-6">
                                                    {activeTab === "details" && (
                                                        <DetailsTab
                                                            isEditing={isEditing}
                                                            formState={formState}
                                                            setFormState={setFormState}
                                                            session={session}
                                                        />
                                                    )}
                                                    {activeTab === "notifications" && (
                                                        <NotificationTab
                                                            session={session}
                                                            onToggle={handleToggleNotification}
                                                        />
                                                    )}
                                                    {activeTab === "tokens" && (
                                                        <TokenTab
                                                            session={session}
                                                            copiedTokenId={copiedTokenId}
                                                            onCreateToken={handleCreateToken}
                                                            onCopyToken={handleCopyToken}
                                                            busy={busy}
                                                        />
                                                    )}
                                                    {activeTab === "identity" && (
                                                        <IdentityTab session={session} />
                                                    )}
                                                    {activeTab === "devices" && (
                                                        <DevicesTab
                                                            session={session}
                                                            onSignOutOthers={handleSignOutOthers}
                                                            busy={busy}
                                                        />
                                                    )}
                                                </div>
                                            </>
                                        ) : (
                                            <SecondarySection
                                                title={
                                                    sidebarItems.find(
                                                        (item) =>
                                                            "id" in item &&
                                                            item.id === section,
                                                    )?.label || "详情"
                                                }
                                                items={session.sections[section as keyof typeof session.sections] || []}
                                            />
                                        )}
                                    </div>
                                </section>
                            </div>
                        )}
                    </main>

                    <LandingFooter />
                </div>
            </CommonLayout>
        </>
    );
};

const LoadingPanel = () => (
    <div className="mx-auto max-w-[760px] rounded-[32px] border border-gray-200 bg-white/90 p-8 text-center backdrop-blur dark:border-gray-700 dark:bg-gray-800/85">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
            Loading
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-0">
            正在加载个人中心
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            页面正在向 Node 后端读取当前会话和账号资料。
        </p>
    </div>
);

const AccessGate = () => (
    <div className="mx-auto max-w-[760px] rounded-[32px] border border-gray-200 bg-white/90 p-8 text-center backdrop-blur dark:border-gray-700 dark:bg-gray-800/85">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
            Account Required
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-0">
            先登录再访问个人中心
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            个人中心用于查看订单、许可证、工单、通知配置和登录设备。当前已经接入真实 Node 会话后端。
        </p>
        <div className="mt-7 flex justify-center gap-3">
            <Link
                href="/login?redirect=/account"
                className="rounded-full bg-refine-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 hover:no-underline dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300"
            >
                去登录
            </Link>
            <Link
                href="/store"
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
            >
                查看购买授权
            </Link>
        </div>
    </div>
);

const SidebarBadge = ({
    label,
    active,
}: {
    label: string;
    active?: boolean;
}) => (
    <div
        className={clsx(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-xs font-semibold",
            active
                ? "bg-gray-900 text-white dark:bg-gray-0 dark:text-gray-900"
                : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
        )}
    >
        {label.slice(0, 1)}
    </div>
);

const StatPill = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
        {label} {value}
    </div>
);

const DetailsTab = ({
    session,
    isEditing,
    formState,
    setFormState,
}: {
    session: AccountSession;
    isEditing: boolean;
    formState: {
        displayName: string;
        email: string;
        description: string;
    };
    setFormState: React.Dispatch<
        React.SetStateAction<{
            displayName: string;
            email: string;
            description: string;
        }>
    >;
}) => (
    <div className="overflow-hidden rounded-[28px] border border-gray-200 dark:border-gray-700">
        <InfoRow label="显示名称">
            {isEditing ? (
                <InlineInput
                    value={formState.displayName}
                    onChange={(value) =>
                        setFormState((previous) => ({
                            ...previous,
                            displayName: value,
                        }))
                    }
                />
            ) : (
                session.displayName
            )}
        </InfoRow>
        <InfoRow label="用户名">{session.username}</InfoRow>
        <InfoRow label="电子邮箱">
            <div>
                {isEditing ? (
                    <InlineInput
                        value={formState.email}
                        onChange={(value) =>
                            setFormState((previous) => ({
                                ...previous,
                                email: value,
                            }))
                        }
                    />
                ) : (
                    <div>{session.email}</div>
                )}
                {!session.emailVerified && (
                    <div className="mt-4 max-w-[440px] rounded-[24px] border border-orange-300 bg-orange-50 p-5 dark:border-orange-900/60 dark:bg-orange-950/20">
                        <div className="text-base font-semibold text-orange-600 dark:text-orange-300">
                            验证电子邮箱
                        </div>
                        <div className="mt-2 text-sm leading-6 text-orange-600/90 dark:text-orange-200/90">
                            电子邮箱地址尚未验证，后端已保留验证位，后续可继续接邮件验证服务。
                        </div>
                    </div>
                )}
            </div>
        </InfoRow>
        <InfoRow label="手机号">
            <div className="flex items-center gap-2">
                <span>{session.phone}</span>
                {session.phoneVerified && (
                    <CheckCircle className="h-5 w-5 text-sky-600 dark:text-cyan-300" />
                )}
            </div>
        </InfoRow>
        <InfoRow label="角色">
            <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300">
                {session.role}
            </span>
        </InfoRow>
        <InfoRow label="描述">
            {isEditing ? (
                <textarea
                    value={formState.description}
                    onChange={(event) =>
                        setFormState((previous) => ({
                            ...previous,
                            description: event.target.value,
                        }))
                    }
                    rows={3}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-sky-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-0"
                />
            ) : (
                session.description || "无"
            )}
        </InfoRow>
        <InfoRow label="注册时间">{session.registeredAt}</InfoRow>
    </div>
);

const NotificationTab = ({
    session,
    onToggle,
}: {
    session: AccountSession;
    onToggle: (key: keyof AccountSession["notifications"]) => void;
}) => {
    const items = [
        {
            key: "productUpdates" as const,
            title: "产品更新提醒",
            description: "收到版本发布、功能上新和公告通知。",
        },
        {
            key: "orderUpdates" as const,
            title: "订单状态提醒",
            description: "收到订单支付、交付和发票状态更新。",
        },
        {
            key: "ticketUpdates" as const,
            title: "工单动态提醒",
            description: "工单有回复、流转或关闭时提醒。",
        },
        {
            key: "securityAlerts" as const,
            title: "安全与设备提醒",
            description: "登录异常、设备变更与敏感操作提醒。",
        },
    ];

    return (
        <div className="grid gap-4 landing-sm:grid-cols-2">
            {items.map((item) => (
                <div
                    key={item.key}
                    className="rounded-[28px] border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                                {item.title}
                            </div>
                            <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {item.description}
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => onToggle(item.key)}
                            className={clsx(
                                "relative inline-flex h-7 w-12 rounded-full transition-colors",
                                session.notifications[item.key]
                                    ? "bg-sky-500"
                                    : "bg-gray-300 dark:bg-gray-700",
                            )}
                        >
                            <span
                                className={clsx(
                                    "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform",
                                    session.notifications[item.key] &&
                                        "translate-x-5",
                                )}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TokenTab = ({
    session,
    copiedTokenId,
    onCreateToken,
    onCopyToken,
    busy,
}: {
    session: AccountSession;
    copiedTokenId: string;
    onCreateToken: () => void;
    onCopyToken: (tokenId: string, tokenValue: string) => Promise<void>;
    busy: boolean;
}) => (
    <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70">
            <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                    个人令牌
                </div>
                <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    令牌存储在后端账号数据中，刷新页面后仍然保留。
                </div>
            </div>
            <button
                type="button"
                onClick={onCreateToken}
                disabled={busy}
                className="rounded-full bg-refine-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300"
            >
                创建令牌
            </button>
        </div>

        {session.tokens.map((token) => (
            <div
                key={token.id}
                className="rounded-[28px] border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                            {token.name}
                        </div>
                        <div className="mt-2 font-mono text-sm text-sky-700 dark:text-cyan-300">
                            {token.value}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => onCopyToken(token.id, token.value)}
                        className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
                    >
                        {copiedTokenId === token.id ? "已复制" : "复制"}
                    </button>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-gray-600 dark:text-gray-400 landing-sm:grid-cols-2">
                    <div>创建时间：{token.createdAt}</div>
                    <div>最近使用：{token.lastUsedAt}</div>
                </div>
            </div>
        ))}
    </div>
);

const IdentityTab = ({ session }: { session: AccountSession }) => {
    const items = [
        {
            title: "电子邮箱",
            status: session.emailVerified ? "已验证" : "待验证",
            description: session.email,
        },
        {
            title: "手机号码",
            status: session.phoneVerified ? "已验证" : "待验证",
            description: session.phone,
        },
        {
            title: "主体认证",
            status: "可申请",
            description: "企业采购和对公发票场景可联系作者补充主体资料。",
        },
    ];

    return (
        <div className="grid gap-4 landing-sm:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="rounded-[28px] border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70"
                >
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                        {item.title}
                    </div>
                    <div className="mt-3 inline-flex rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300">
                        {item.status}
                    </div>
                    <div className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

const DevicesTab = ({
    session,
    onSignOutOthers,
    busy,
}: {
    session: AccountSession;
    onSignOutOthers: () => void;
    busy: boolean;
}) => (
    <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70">
            <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                    登录设备
                </div>
                <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    设备信息和当前会话都来自后端，支持一键下线其他设备。
                </div>
            </div>
            <button
                type="button"
                onClick={onSignOutOthers}
                disabled={busy}
                className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-700 dark:text-gray-0 dark:hover:bg-gray-700"
            >
                下线其他设备
            </button>
        </div>

        {session.devices.map((device) => (
            <div
                key={device.id}
                className="rounded-[28px] border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                            {device.name}
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {device.location} · {device.ip}
                        </div>
                    </div>
                    {device.current && (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
                            当前设备
                        </span>
                    )}
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    最近活跃：{device.lastActiveAt}
                </div>
            </div>
        ))}
    </div>
);

const SecondarySection = ({
    title,
    items,
}: {
    title: string;
    items: AccountSectionItem[];
}) => (
    <div className="space-y-4">
        <div className="rounded-[28px] border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70">
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-0">
                {title}
            </div>
            <div className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                当前列表项由 Node 后端返回，可继续替换成真实订单、许可证和工单数据源。
            </div>
        </div>
        {items.map((item) => (
            <div
                key={item.id}
                className="rounded-[28px] border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                    {item.title}
                </div>
                <div className="mt-2 text-sm font-medium text-sky-700 dark:text-cyan-300">
                    {item.meta}
                </div>
                <div className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.detail}
                </div>
            </div>
        ))}
    </div>
);

const InfoRow = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => (
    <div className="grid gap-4 border-b border-gray-200 px-5 py-6 last:border-b-0 dark:border-gray-700 landing-sm:grid-cols-[240px_minmax(0,1fr)]">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
            {label}
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300">{children}</div>
    </div>
);

const InlineInput = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => (
    <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-sky-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-0"
    />
);

export default AccountPage;

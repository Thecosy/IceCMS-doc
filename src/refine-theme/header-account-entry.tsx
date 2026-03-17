import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";

import { useAccountSession } from "@site/src/hooks/use-account-session";

type HeaderAccountEntryProps = {
    compact?: boolean;
};

const quickLinks = [
    { label: "个人中心", href: "/account" },
    { label: "我的推荐", href: "/account?section=referrals" },
    { label: "我的订单", href: "/account?section=orders" },
    { label: "我的工单", href: "/account?section=tickets" },
];

export const HeaderAccountEntry = ({
    compact = false,
}: HeaderAccountEntryProps) => {
    const { session, logout } = useAccountSession();
    const location = useLocation();

    const avatarLabel =
        session?.displayName?.slice(0, 1).toUpperCase() ||
        session?.username?.slice(0, 1).toUpperCase() ||
        "I";

    const handleLogout = async () => {
        await logout();

        if (
            typeof window !== "undefined" &&
            location.pathname.startsWith("/account")
        ) {
            window.location.href = "/login";
        }
    };

    return (
        <Menu as="div" className="relative">
            <Menu.Button
                className={clsx(
                    "inline-flex items-center gap-3 rounded-full border transition-colors",
                    "border-gray-200 bg-white/90 px-2 py-2 text-gray-900 hover:bg-gray-100",
                    "dark:border-gray-700 dark:bg-gray-800/90 dark:text-gray-0 dark:hover:bg-gray-700",
                    compact && "px-2.5",
                )}
            >
                <div
                    className={clsx(
                        "flex h-9 w-9 items-center justify-center rounded-full",
                        "bg-gradient-to-br from-sky-500 to-cyan-400 text-sm font-semibold text-white",
                    )}
                >
                    {session ? avatarLabel : <AccountIcon className="h-5 w-5" />}
                </div>
                {!compact && (
                    <div className="hidden text-left landing-lg:block">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            {session ? "已登录" : "账号"}
                        </div>
                        <div className="text-sm font-semibold">
                            {session ? session.displayName : "登录 / 注册"}
                        </div>
                    </div>
                )}
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={clsx(
                        "absolute right-0 z-20 mt-3 w-[288px] origin-top-right rounded-[28px] border border-gray-200 bg-white p-3 shadow-2xl outline-none",
                        "dark:border-gray-700 dark:bg-gray-800",
                    )}
                >
                    {session ? (
                        <>
                            <div className="rounded-[22px] bg-gray-50 p-4 dark:bg-gray-900">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-lg font-semibold text-white">
                                        {avatarLabel}
                                    </div>
                                    <div>
                                        <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                            {session.displayName}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            @{session.username}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                {quickLinks.map((item) => (
                                    <Menu.Item key={item.href}>
                                        {({ active }) => (
                                            <Link
                                                href={item.href}
                                                className={clsx(
                                                    "flex items-center rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:no-underline",
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-0"
                                                        : "text-gray-700 dark:text-gray-200",
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>

                            <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-700">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className={clsx(
                                                "flex w-full items-center rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors",
                                                active
                                                    ? "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-300"
                                                    : "text-gray-700 dark:text-gray-200",
                                            )}
                                        >
                                            退出登录
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="rounded-[22px] bg-gray-50 p-4 dark:bg-gray-900">
                                <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                    访问账号中心
                                </div>
                                <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    登录后可查看订单、许可证、工单与授权相关服务。
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href="/login"
                                            className={clsx(
                                                "flex items-center rounded-2xl px-4 py-3 text-base font-semibold transition-colors hover:no-underline",
                                                active
                                                    ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-0"
                                                    : "text-gray-700 dark:text-gray-200",
                                            )}
                                        >
                                            登录
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href="/store"
                                            className={clsx(
                                                "flex items-center rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:no-underline",
                                                active
                                                    ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-0"
                                                    : "text-gray-700 dark:text-gray-200",
                                            )}
                                        >
                                            查看购买授权
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

const AccountIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.418 0-8 2.015-8 4.5V20h16v-1.5c0-2.485-3.582-4.5-8-4.5Z"
        />
    </svg>
);

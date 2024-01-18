import React from "react";
import clsx from "clsx";
import { CommonThemedImage } from "./common-themed-image";

export const EnterpriseSSOMultifactorAuth = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={clsx("flex flex-col", "not-prose", className)}>
            <div
                className={clsx(
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2",
                    "gap-8 landing-md:gap-12 landing-lg:gap-6",
                )}
            >
                <div
                    className={clsx(
                        "flex flex-col",
                        "dark:bg-landing-noise",
                        "dark:bg-gray-800 bg-gray-50",
                        "rounded-2xl landing-sm:rounded-3xl",
                    )}
                >
                    <CommonThemedImage
                        className={clsx("rounded-2xl landing-sm:rounded-3xl")}
                        srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/sign-in-dark.png"
                        srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/sign-in-light.png"
                    />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-4",
                            "p-4 landing-sm:p-10",
                            "not-prose",
                        )}
                    >
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "font-semibold",
                            )}
                        >
                            单点登录
                        </h2>
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            预构建的组件和挂钩可轻松构建您的登录界面。
                        </p>
                    </div>
                </div>

                <div
                    className={clsx(
                        "flex flex-col",
                        "dark:bg-landing-noise",
                        "dark:bg-gray-800 bg-gray-50",
                        "rounded-2xl landing-sm:rounded-3xl",
                    )}
                >
                    <CommonThemedImage
                        className={clsx("rounded-2xl landing-sm:rounded-3xl")}
                        srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/multifactor-dark.png"
                        srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/multifactor-light.png"
                    />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-2 landing-sm:gap-4",
                            "p-4 landing-sm:p-10",
                            "not-prose",
                        )}
                    >
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "font-semibold",
                            )}
                        >
                            多重身份验证
                        </h2>
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            用于实现任何类型的可定制组件
                            MFA 流动
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import clsx from "clsx";
import { LandingPureReactCode } from "./landing-pure-react-code";
import { CommonThemedImage } from "./common-themed-image";

export const EnterpriseFlexibility = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={clsx("flex flex-col", "not-prose", className)}>
            <div
                className={clsx(
                    "pl-4 landing-sm:pl-6 landing-md:pl-10",
                    "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                )}
            >
                <h2 className={clsx("dark:text-gray-0 text-gray-900")}>
                以无与伦比的灵活性{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        进行构建
                    </span>
                    。
                </h2>
            </div>
            <div
                className={clsx(
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2",
                    "gap-8 landing-md:gap-12 landing-lg:gap-6",
                    "mt-8 landing-md:mt-20",
                )}
            >
                <LandingPureReactCode
                    description={`干净、架构良好的 Vue 应用程序作为输出。完全控制您的样式、业务逻辑和集成。`}
                    cta={false}
                />
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
                        srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/lego-pieces-dark.png"
                        srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/lego-pieces-light.png"
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
                            替代“从头开始”
                        </h2>
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            加速的工具、助手和智能助手
                            您的完整代码工作流程。没有黑匣子或
                            专有组件。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

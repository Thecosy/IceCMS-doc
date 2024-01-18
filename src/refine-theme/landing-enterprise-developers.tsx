import clsx from "clsx";
import React, { FC } from "react";
import {
    AccessControlIcon,
    BlackBoxIcon,
    IdentityIcon,
    MonitorIcon,
    SelfHostedIcon,
    SupportIcon,
} from "../components/landing/icons";

import { LandingSectionCtaButtonAlt } from "./landing-section-cta-button";

const list = [
    {
        icon: <SelfHostedIcon />,
        title: "自托管以确保合规性",
        description:
            "部署到您自己的基础设施，无需担心法规、性能和稳定性。毫不妥协地维护您当前的安全最佳实践。",
    },
    {
        icon: <IdentityIcon />,
        title: "利用现有身份提供商的力量",
        description:
            "对 Okta、Azure AD、Amazon Cognito 和 Google Cloud Identity 的本机支持。",
    },
    {
        icon: <AccessControlIcon />,
        title: "实现细粒度的访问控制",
        description:
            "对广泛接受的授权模型（包括 ACL、RBAC 和 ABAC）的开箱即用支持。",
    },
    {
        icon: <BlackBoxIcon />,
        title: "解锁黑匣子",
        description:
            "使用开放架构实施开源解决方案。免去向堆栈添加另一个专有组件的麻烦。",
    },
    {
        icon: <MonitorIcon />,
        title: "轻松监控您的应用程序",
        description:
            "用于审计日志记录和使用情况分析的现成提供商和组件。",
    },
    {
        icon: <SupportIcon />,
        title: "获得专家的支持",
        description:
            "加入提供优先支持、培训和咨询的计划。",
    },
];

type Props = {
    className?: string;
};

export const LandingEnterpriseDevelopers: FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className, "w-full")}>
            <div
                className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
            >
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                        "tracking-tight",
                        "text-start",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    解决您的{" "}
                    <span className="font-sans text-[#FE251B] drop-shadow-[0_0_30px_rgba(254,37,27,0.3)]">
                        ❤️
                    </span>{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                        )}
                    >
                        痛点
                    </span>
                    .
                </h2>
                <p
                    className={clsx(
                        "mt-4 landing-sm:mt-6",
                        "max-w-md",
                        "text-base",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    IceCMS 旨在通过优先考虑安全性来解决特定{" "}
                    <span className="font-semibold text-gray-900 dark:text-gray-0">
                    痛点。
                    </span>
                    .
                </p>
            </div>

            <div
                className={clsx(
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2 landing-lg:grid-cols-3",
                    "gap-4 landing-sm:gap-12 landing-md:gap-6",
                    "mb-4 landing-sm:mb-12 landing-md:mb-6",
                )}
            >
                {list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={clsx(
                                "not-prose",
                                "p-4 landing-sm:p-10",
                                "flex",
                                "flex-col landing-sm:flex-row landing-md:flex-col",
                                "items-start",
                                "gap-6",
                                "dark:bg-landing-noise",
                                "dark:bg-gray-800 bg-gray-50",
                                "rounded-2xl landing-sm:rounded-3xl",
                            )}
                        >
                            <div>{item.icon}</div>
                            <div className={clsx("flex", "flex-col", "gap-4")}>
                                <div
                                    className={clsx(
                                        "text-xl",
                                        "font-semibold",
                                        "text-gray-900 dark:text-gray-0",
                                    )}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className={clsx(
                                        "text-base",
                                        "dark:text-gray-400 text-gray-600",
                                    )}
                                >
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <LandingSectionCtaButtonAlt to="/enterprise">
                查看Pro版
            </LandingSectionCtaButtonAlt>
        </div>
    );
};

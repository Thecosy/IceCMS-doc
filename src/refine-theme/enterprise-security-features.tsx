import React from "react";
import clsx from "clsx";
import {
    AccessControlIcon,
    MonitorIcon,
    SelfHostedIcon,
} from "../components/landing/icons";

export const EnterpriseSecurityFeatures = ({
    className,
}: {
    className?: string;
}) => (
    <div className={clsx(className, "w-full")}>
        <div
            className={clsx(
                "grid",
                "grid-cols-1 landing-lg:grid-cols-3",
                "gap-4 landing-md:gap-12 landing-lg:gap-6",
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
                            "flex-col landing-sm:flex-row  landing-lg:flex-col",
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
    </div>
);

const list = [
    {
        icon: <AccessControlIcon />,
        title: "实现细粒度的访问控制",
        description:
        "对广泛接受的授权模型（包括 ACL、RBAC 和 ABAC）的开箱即用支持。",
    },
    {
        icon: <SelfHostedIcon />,
        title: "自托管以确保合规性",
        description:
        "部署到您自己的基础设施，无需担心法规、性能和稳定性。毫不妥协地维护您当前的安全最佳实践。",
    },
    {
        icon: <MonitorIcon />,
        title: "轻松监控您的应用程序",
        description:
        "用于审计日志记录和使用情况分析的现成提供商和组件。",
    },
];

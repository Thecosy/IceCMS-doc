import React from "react";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { CommonCircleChevronDown } from "./common-circle-chevron-down";

const faq = [
    {
        question: "Pro版本的定价是如何工作的？",
        answer: "定价模型是定制的，以适应项目的特定需求、开发团队的规模和最终用户的数量。"
    },
    {
        question: "关于我可以创建的项目数量是否有限制？",
        answer: "您可以创建的项目数量没有限制。"
    },
    {
        question: "是否可以单独购买特定功能或服务？",
        answer: "不可以，Pro只能作为完整包裹购买，包括所有功能和服务。"
    },
    {
        question: "Pro版本有多频繁地接收更新？",
        answer: "我们的目标是以持续交付的方式引入新功能和修复。另一方面，社区版每月更新。"
    },
    {
        question: "您是否提供一体化项目的定制开发服务？",
        answer: "我们提供任何类型的一体化开发服务。"
    },
    {
        question: "您提供的专业服务的范围是什么？",
        answer: "我们的专业服务涵盖与内部团队的协作任务，如入职协助、培训和代码审查。"
    },
    {
        question: "我能否无缝地将现有项目从社区版迁移到Pro版本？",
        answer: "虽然迁移是可能的，但我们强烈建议企业用户从相应的版本开始，因为各版本的生命周期是在不同的存储库中管理的，核心功能可能存在差异。"
    },
    {
        question: "我能否请求特定功能或定制？",
        answer: "我们将优先考虑产品路线图上的功能请求，并支持团队开发定制集成和组件。"
    },
    {
        question: "授权是否是永久的？",
        answer: "是的，永久授权，买断制，就算以后出 V4、V5 您也不用再次付费。"
    },
    {
        question: "IceCMS 是否可以商用？",
        answer: "当然，前提是您购买付费版。但绝对不允许用来做赌博、诈骗、木马、病毒等违法规范行为。"
    },
    {
        question: "购买捐赠版后是否支持退款？",
        answer: "理论上不支持退款，如有特殊需求，可申请退款，但要扣除支付平台的手续费，约 3%。（购买超出 14 天后不再支持退款。）"
    }
];

export const EnterpriseFaq = ({ className }: { className?: string }) => {
    return (
        <div className={clsx("flex flex-col", "not-prose", className)}>
            <div
                className={clsx(
                    "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                )}
            >
                <h2
                    className={clsx(
                        "font-semibold",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    常见问题
                </h2>
            </div>

            <div
                className={clsx(
                    "flex",
                    "flex-col",
                    "mt-6 landing-sm:mt-12 landing-lg:mt-20",
                    "not-prose",
                )}
            >
                {faq.map((item, index) => {
                    const isLast = index === faq.length - 1;

                    return (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button
                                        className={clsx(
                                            "flex items-start justify-between",
                                            "text-start",
                                            "text-base font-semibold",
                                            "dark:text-gray-0 text-gray-900",
                                            "py-3",
                                        )}
                                    >
                                        {item.question}
                                        <CommonCircleChevronDown
                                            className={clsx(
                                                "ml-4",
                                                "flex-shrink-0",
                                                "text-gray-500",
                                                "will-change-transform",
                                                open && "transform rotate-180",
                                                "transition-transform duration-200",
                                            )}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        unmount={false}
                                        enter="transition-all duration-300 ease-in-out"
                                        enterFrom="transform opacity-0 max-h-0"
                                        enterTo="transform opacity-100 max-h-[152px]"
                                        leave="transition-all duration-300 ease-in-out"
                                        leaveFrom="transform opacity-100 max-h-[152px]"
                                        leaveTo="transform opacity-0 max-h-0"
                                    >
                                        <Disclosure.Panel
                                            unmount={false}
                                            style={{
                                                display: "block",
                                            }}
                                            className={clsx(
                                                "mt-2 mb-6",
                                                "text-base",
                                                "dark:text-gray-400 text-gray-700",
                                            )}
                                        >
                                            {item.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                    {!isLast && (
                                        <hr
                                            className={clsx(
                                                "h-[1px]",
                                                "dark:bg-gray-700 bg-gray-200",
                                            )}
                                        />
                                    )}
                                </>
                            )}
                        </Disclosure>
                    );
                })}
            </div>
        </div>
    );
};
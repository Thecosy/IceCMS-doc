import Head from "@docusaurus/Head";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { GithubIcon } from "@site/src/refine-theme/icons/github";
import { DiscordIcon, TwitterIcon } from "@site/src/refine-theme/icons/popover";
import { FooterRedditIcon as RedditIcon } from "@site/src/refine-theme/icons/footer-reddit";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { BlogFooter } from "@site/src/refine-theme/blog-footer";

const About: React.FC = () => {
    return (
        <>
            <Head title="关于团队 | IceCMS">
                <html data-page="about" data-customized="true" />
            </Head>
            <div className="refine-prose">
                <CommonHeader hasSticky={true} />
                <div
                    className={clsx(
                        "not-prose",
                        "xl:max-w-[944px] xl:py-16",
                        "lg:max-w-[912px] lg:py-10",
                        "md:max-w-[624px] md:text-4xl  md:pb-6 pt-6",
                        "sm:max-w-[480px] text-xl",
                        "max-w-[328px]",
                        "w-full mx-auto",
                    )}
                >
                    <h1
                        className={clsx(
                            "font-semibold",
                            "!mb-0",
                            "text-gray-900 dark:text-gray-0",
                            "text-xl md:text-[40px] md:leading-[56px]",
                        )}
                    >
                        团队介绍
                    </h1>
                </div>

                <div
                    className={clsx(
                        "max-w-[1120px]",
                        "mx-auto w-full",
                        "px-4 sm:px-6 lg:px-8",
                    )}
                >
                    <div
                        className={clsx(
                            "flex flex-col xl:flex-row",
                            "gap-4 xl:gap-16",
                        )}
                    >
                        <div
                            className={clsx(
                                "mx-auto flex items-center justify-center",
                                "w-full xl:w-[576px]",
                            )}
                        >
                            <img
                                className="rounded-[12px]"
                                src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/about.jpg"
                                alt="IceCMS Team"
                            />
                        </div>
                        <div
                            className={clsx(
                                "mx-auto flex flex-col xl:justify-center",
                                "w-full xl:w-[480px]",
                                "text-gray-700 dark:text-gray-300",
                            )}
                        >
                            <div className={clsx("max-w-[642px]")}>
                                <p className="text-xs sm:text-base">
                                    IceCMS（冰激凌内容管理系统）主要由一个由
                                    NgShow
                                    领导的小型但专注的团队开发和维护，其在
                                    GitHub 上的用户名为
                                    Thecosy。作为项目的主要架构师和开发者，NgShow
                                    在创建这个在中国开发者社区中广受欢迎的灵活内容管理系统中发挥了关键作用。
                                </p>
                                <p className="text-xs sm:text-base">
                                    自项目启动以来，其发展势头稳步增强，目前在
                                    GitHub 上拥有超过 1800 个星标和 260
                                    多个分支——这些令人印象深刻的指标展示了社区对这一开源解决方案的浓厚兴趣。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={clsx(
                        "w-full",
                        "px-4 sm:px-6 lg:px-8",
                        "max-w-[1120px]",
                        "mx-auto mt-10 md:mt-20 lg:mt-32",
                    )}
                >
                    <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            技术栈
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-base text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>后端：</strong>Java、Spring Boot 和
                                MyBatis
                            </li>
                            <li>
                                <strong>安全：</strong>Apache Shiro
                            </li>
                            <li>
                                <strong>前端：</strong>Vue.js
                            </li>
                            <li>
                                <strong>跨平台：</strong>UniApp
                                用于移动和迷你程序支持
                            </li>
                            <li>
                                <strong>最新添加：</strong>Nuxt3 支持（2025 年 2
                                月添加）
                            </li>
                        </ul>
                        <p className="text-xs sm:text-base mt-4 text-gray-700 dark:text-gray-300">
                            这种多样的技术选择揭示了团队对现代开发实践和跨平台解决方案的承诺。最近的
                            new-version-for-nuxt3
                            提交展示了他们致力于将平台更新为最新的前端框架。
                        </p>
                    </div>

                    <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                                国际影响力
                            </h2>
                            <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300">
                                尽管该项目似乎起源于中国，主要服务于中文开发者，但团队一直在努力扩大其国际影响力。2024年11月，他们添加了英文README，使项目更易于全球开发者社区访问。这一国际化努力得到了mt-gitlocalize的贡献，后者协助了翻译过程。
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                                安全关注和社区响应
                            </h2>
                            <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300">
                                团队通过处理漏洞报告展示了他们对安全的承诺。项目中已识别出多个安全问题（包括CVE-2023-36100），并且团队已努力解决这些关切。GitHub上活跃的问题部分显示了团队与社区的互动，回应了与安全漏洞、功能请求和错误修复相关的报告。
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-16 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            开发势头
                        </h2>
                        <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300">
                            项目通过定期更新保持稳定的开发势头。近期的重要里程碑包括：
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-xs sm:text-base text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>2025年6月：</strong>SQL更新（c0efc6d）
                            </li>
                            <li>
                                <strong>2025年2月：</strong>
                                管理页面改进和Nuxt3支持
                            </li>
                            <li>
                                <strong>2024年7月：</strong>3.4.7版本发布
                            </li>
                            <li>
                                <strong>2024年4月：</strong>3.2.5版本发布
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10 md:mt-16 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            商业模式
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-base text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>社区版：</strong>
                                免费且开源，采用AGPL-3.0许可证
                            </li>
                            <li>
                                <strong>专业版：</strong>
                                具有额外功能和支持（在其官方网站提及）
                            </li>
                        </ul>
                        <p className="text-xs sm:text-base mt-4 text-gray-700 dark:text-gray-300">
                            这种双轨方法使他们能够在开源原则和可持续开发之间取得平衡。
                        </p>
                    </div>

                    <div className="mt-10 md:mt-16 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-10">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            加入社区
                        </h2>
                        <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300">
                            开源贡献一直是 IceCMS
                            成功的重要组成部分。我们感谢所有开发核心功能、修复错误、构建社区扩展、编写文档、报告问题并提供建设性反馈的贡献者。
                        </p>
                        <div className="grid w-full shrink-0 grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <a
                                target="_blank"
                                href="https://github.com/Thecosy/IceCMS"
                                className={clsx(
                                    "flex h-max flex-row justify-start gap-3",
                                    "dark:bg-gray-900",
                                    "border border-gray-200 dark:border-gray-700",
                                    "rounded-xl p-4",
                                    "no-underline hover:no-underline",
                                )}
                                rel="noreferrer"
                            >
                                <div>
                                    <GithubIcon
                                        className="text-2xl text-gray-900 dark:text-gray-0"
                                        width="24px"
                                        height="24px"
                                    />
                                </div>
                                <div className="text-xs md:text-base">
                                    <div className="mb-0 text-gray-500 dark:text-gray-400">
                                        Visit our
                                    </div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                                        GitHub Repo
                                    </div>
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://discord.gg/refine"
                                rel="noreferrer"
                                className={clsx(
                                    "flex  h-max flex-row justify-start gap-3",
                                    "dark:bg-gray-900",
                                    "border border-gray-200 dark:border-gray-700",
                                    "p-4 rounded-xl",
                                    "no-underline hover:no-underline",
                                )}
                            >
                                <div>
                                    <DiscordIcon
                                        className="text-2xl"
                                        width="24px"
                                        height="24px"
                                    />
                                </div>
                                <div className="text-xs md:text-base">
                                    <div className="mb-0 text-gray-500 dark:text-gray-400">
                                        Join our
                                    </div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                                        Discord Server
                                    </div>
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://reddit.com/r/refine"
                                rel="noreferrer"
                                className={clsx(
                                    "flex  h-max flex-row justify-start gap-3",
                                    "dark:bg-gray-900",
                                    "border border-gray-200 dark:border-gray-700",
                                    "p-4 rounded-xl",
                                    "no-underline hover:no-underline",
                                )}
                            >
                                <div>
                                    <RedditIcon
                                        className="text-2xl"
                                        width="24px"
                                        height="24px"
                                        color="#FF4500"
                                    />
                                </div>
                                <div className="text-xs md:text-base">
                                    <div className="mb-0 text-gray-500 dark:text-gray-400">
                                        Follow us on
                                    </div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                                        Reddit
                                    </div>
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://twitter.com/refine_dev"
                                rel="noreferrer"
                                className={clsx(
                                    "flex  h-max flex-row justify-start gap-3",
                                    "dark:bg-gray-900",
                                    "border border-gray-200 dark:border-gray-700",
                                    "p-4 rounded-xl",
                                    "no-underline hover:no-underline",
                                )}
                            >
                                <div>
                                    <TwitterIcon
                                        className="text-2xl"
                                        width="24px"
                                        height="24px"
                                    />
                                </div>
                                <div className="text-xs md:text-base">
                                    <div className="mb-0 text-gray-500 dark:text-gray-400">
                                        Follow us on
                                    </div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                                        Twitter
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <BlogFooter />
            </div>
        </>
    );
};

export default function AboutPage() {
    return (
        <CommonLayout>
            <About />
        </CommonLayout>
    );
}
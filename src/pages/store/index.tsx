import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { Disclosure } from "@headlessui/react";

import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { LandingFooter } from "@site/src/refine-theme/landing-footer";
import { CheckCircle } from "@site/src/refine-theme/icons/check-circle";
import { CommonCircleChevronDown } from "@site/src/refine-theme/common-circle-chevron-down";

const heroHighlights = [
    {
        title: "永久授权",
        description: "购买后可在授权单位自身业务中长期使用源码。",
    },
    {
        title: "授权备案",
        description: "下单后填写购买登记表单，完成授权主体备案。",
    },
    {
        title: "持续迭代",
        description: "套餐包含后续版本更新与私有资源交付规则。",
    },
    {
        title: "售后支持",
        description: "提供部署资料与有效期内的工单答疑支持。",
    },
];

const plans = [
    {
        name: "社区版",
        pricePrefix: "￥",
        price: "0",
        unit: "免费",
        description: "适合个人轻度使用和前期评估。",
        features: ["在线预览", "简易权限控制", "所有基础功能", "定期更新中..."],
        ctaLabel: "查看文档",
        ctaHref: "/docs",
    },
    {
        name: "捐赠版",
        badge: "推荐",
        pricePrefix: "￥",
        price: "249",
        unit: "不限根域名（限时特价）",
        description: "适合个人与小团队直接上线使用。",
        features: [
            "社区版所有功能 + 领先一个版本拉入私人仓库优先更新",
            "细致权限控制",
            "付费系统",
            "Nuxt - seo优化版本",
            "优先更新 持续更新中...",
        ],
        ctaLabel: "立即购买",
        ctaHref: "https://mbd.pub/o/bread/Y56bmJ9s",
        featured: true,
        external: true,
    },
    {
        name: "定制版",
        price: "详询",
        unit: "按需求评估",
        description: "适合有私有化交付或专项开发需求的用户。",
        features: [
            "基于捐赠版所有功能",
            "支持随主版本升级",
            "定制化服务",
            "可沟通交付节奏与配套支持",
        ],
        ctaLabel: "联系作者",
        ctaHref: "https://work.weixin.qq.com/kfid/kfc60ac355e8e8da022",
        external: true,
    },
];

const paymentMethods = [
    { name: "微信支付", description: "适合个人和小团队快速下单" },
    { name: "支付宝", description: "标准线上支付流程" },
    { name: "对公转账", description: "企业采购可联系作者走对公" },
];

const policyCards = [
    {
        title: "授权对象",
        items: [
            "授权按市场监督管理局登记实体计算。",
            "子公司、分公司、控股公司等独立主体需单独购买授权。",
            "若交付第三方源码或部署到第三方服务器，第三方需单独授权。",
        ],
    },
    {
        title: "交付内容",
        items: [
            "交付与演示环境功能一致的源码或安装包。",
            "提供部署文档与基础交付说明。",
            "有效期内提供后续迭代更新与工单服务。",
        ],
    },
    {
        title: "发票与支付",
        items: [
            "支持对公支付，具体信息可联系作者获取。",
            "支付后 7 个工作日内可开具增值税普通电子发票。",
            "建议保留购买时间、订单号与付款截图等凭证。",
        ],
    },
    {
        title: "退款与合规",
        items: [
            "源码类商品因可复制性默认不支持退换。",
            "购买后请尽快填写登记表单完成授权备案。",
            "禁止分发源码、二次销售或用于违法违规项目。",
        ],
    },
];

const purchaseSteps = [
    {
        step: "01",
        title: "选择套餐",
        description: "根据评估阶段、上线需求和服务范围选择社区版、捐赠版或定制版。",
    },
    {
        step: "02",
        title: "完成支付",
        description: "捐赠版可直接下单，定制版先联系作者确认需求、交付范围与报价。",
    },
    {
        step: "03",
        title: "备案登记",
        description: "支付完成后填写购买登记表，提交授权主体、部署信息和联系方式。",
    },
    {
        step: "04",
        title: "交付开通",
        description: "完成备案后交付源码、部署包或私有仓库权限，并进入售后支持流程。",
    },
];

const faqs = [
    {
        question: "授权是否永久有效？",
        answer: (
            <>
                授权本身为永久授权，可在授权单位自身业务中长期使用。更新、工单与配套服务按当前购买套餐及购买说明执行。
            </>
        ),
    },
    {
        question: "一份授权可以用于几个项目？",
        answer: (
            <>
                授权单位可在归属于自身主体的服务器上使用源码，不限制单位内部合法项目数；但不允许对外分发源码或向第三方转授。
            </>
        ),
    },
    {
        question: "给客户部署或交付源码，是否需要额外授权？",
        answer: (
            <>
                需要。如果项目需要部署到客户服务器，或需要向客户交付源码，客户作为独立主体应单独购买授权。
            </>
        ),
    },
    {
        question: "购买后还需要做什么？",
        answer: (
            <>
                请在支付完成后尽快填写
                {" "}
                <Link
                    href="https://pro.tduckcloud.com/s/14af54f03ddd4080988307834a024787"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-refine-blue dark:text-refine-cyan-alt"
                >
                    购买登记表单
                </Link>
                ，并联系作者完成授权备案与交付确认。
            </>
        ),
    },
    {
        question: "是否支持对公支付和开票？",
        answer: (
            <>
                支持。可联系作者获取对公信息；完成支付后，可在 7 个工作日内开具增值税普通电子发票。
            </>
        ),
    },
    {
        question: "源码商品支持退款吗？",
        answer: (
            <>
                原则上不支持。购买前请充分确认技术栈、功能范围与部署环境是否满足需求，源码交付后不接受退换。
            </>
        ),
    },
    {
        question: "售后支持包含哪些内容？",
        answer: (
            <>
                购买后可获得部署文档、交付说明以及有效期内的工单支持。如需更深度的专项支持或定制开发，请选择定制版或联系作者评估。
            </>
        ),
    },
];

const sectionWidth = clsx(
    "mx-auto",
    "w-full",
    "max-w-[592px]",
    "landing-sm:max-w-[656px]",
    "landing-md:max-w-[896px]",
    "landing-lg:max-w-[1200px]",
);

const StorePage: React.FC = () => {
    const title = "购买 IceCMS Pro 授权 | IceCMS";

    return (
        <>
            <Head>
                <html data-active-page="store" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta
                    name="description"
                    content="查看 IceCMS Pro 套餐、购买流程、授权规则与售后支持说明。"
                />
                <meta
                    property="og:description"
                    content="查看 IceCMS Pro 套餐、购买流程、授权规则与售后支持说明。"
                />
            </Head>
            <CommonLayout description="查看 IceCMS Pro 套餐、购买流程、授权规则与售后支持说明。">
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-sky-300/20 blur-3xl dark:bg-cyan-500/10" />
                        <div className="absolute right-[-80px] top-[120px] h-[300px] w-[300px] rounded-full bg-amber-300/20 blur-3xl dark:bg-blue-500/10" />
                        <div className="absolute bottom-[120px] left-[20%] h-[260px] w-[260px] rounded-full bg-cyan-200/20 blur-3xl dark:bg-teal-500/10" />
                    </div>

                    <CommonHeader />

                    <main
                        className={clsx(
                            "relative",
                            "pb-16 landing-sm:pb-20 landing-lg:pb-28",
                        )}
                    >
                        <section
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "pt-8 landing-sm:pt-12 landing-lg:pt-16",
                            )}
                        >
                            <div
                                className={clsx(
                                    "grid",
                                    "gap-8 landing-lg:gap-10",
                                    "landing-lg:grid-cols-[minmax(0,1fr)_400px]",
                                    "items-start",
                                )}
                            >
                                <div
                                    className={clsx(
                                        "relative overflow-hidden",
                                        "rounded-[32px]",
                                        "border border-gray-200 dark:border-gray-700",
                                        "bg-white/90 dark:bg-gray-800/80",
                                        "backdrop-blur",
                                        "p-6 landing-sm:p-8 landing-lg:p-10",
                                    )}
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-400" />
                                    <div
                                        className={clsx(
                                            "inline-flex",
                                            "items-center",
                                            "rounded-full",
                                            "border border-sky-200 dark:border-cyan-800",
                                            "bg-sky-50 dark:bg-cyan-950/40",
                                            "px-4 py-2",
                                            "text-sm font-semibold",
                                            "text-sky-700 dark:text-cyan-300",
                                        )}
                                    >
                                        IceCMS Pro 授权中心
                                    </div>

                                    <h1
                                        className={clsx(
                                            "mt-6",
                                            "max-w-[720px]",
                                            "text-4xl landing-sm:text-5xl landing-lg:text-6xl",
                                            "leading-tight",
                                            "font-semibold",
                                            "text-gray-900 dark:text-gray-0",
                                        )}
                                    >
                                        一次购买，
                                        <br />
                                        把授权、交付和购买说明放到同一页
                                    </h1>

                                    <p
                                        className={clsx(
                                            "mt-6",
                                            "max-w-[760px]",
                                            "text-base landing-sm:text-lg",
                                            "leading-7",
                                            "text-gray-600 dark:text-gray-400",
                                        )}
                                    >
                                        参考 Eagle 的购买授权页结构，这里将 IceCMS 的套餐定价、授权范围、购买流程、
                                        发票与售后规则集中展示。用户不需要再分别翻价格页和购买文档，就能完成评估与下单。
                                    </p>

                                    <div
                                        className={clsx(
                                            "mt-8",
                                            "grid",
                                            "gap-4",
                                            "landing-sm:grid-cols-2",
                                        )}
                                    >
                                        {heroHighlights.map((item) => (
                                            <div
                                                key={item.title}
                                                className={clsx(
                                                    "rounded-3xl",
                                                    "border border-gray-200 dark:border-gray-700",
                                                    "bg-gray-50/90 dark:bg-gray-900/70",
                                                    "p-5",
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle className="h-6 w-6 text-sky-600 dark:text-cyan-300" />
                                                    <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                                        {item.title}
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className={clsx(
                                            "mt-8",
                                            "flex flex-wrap gap-3",
                                        )}
                                    >
                                        <CtaLink href="#plans" label="查看套餐" />
                                        <CtaLink
                                            href="https://mbd.pub/o/bread/Y56bmJ9s"
                                            label="直接购买捐赠版"
                                            variant="secondary"
                                            external
                                        />
                                        <CtaLink
                                            href="/docs/business/purchase/howtopurchase"
                                            label="查看购买文档"
                                            variant="ghost"
                                        />
                                    </div>

                                    <div
                                        className={clsx(
                                            "mt-10",
                                            "grid gap-4",
                                            "landing-sm:grid-cols-3",
                                        )}
                                    >
                                        <FactCard
                                            title="249 元起"
                                            description="捐赠版不限根域名，适合直接上线。"
                                        />
                                        <FactCard
                                            title="7 个工作日内开票"
                                            description="支持增值税普通电子发票。"
                                        />
                                        <FactCard
                                            title="购买后需备案"
                                            description="填写登记表后完成授权主体确认。"
                                        />
                                    </div>
                                </div>

                                <aside
                                    className={clsx(
                                        "landing-lg:sticky landing-lg:top-24",
                                        "rounded-[32px]",
                                        "border border-gray-200 dark:border-gray-700",
                                        "bg-white/95 dark:bg-gray-800/90",
                                        "backdrop-blur",
                                        "p-6",
                                    )}
                                >
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
                                        Quick Buy
                                    </div>
                                    <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-0">
                                        快速购买
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                        用最短路径完成下单，再通过登记表与作者沟通完成授权备案和交付。
                                    </p>

                                    <div className="mt-6 space-y-4">
                                        <QuickActionCard
                                            title="捐赠版"
                                            price="￥249"
                                            note="不限根域名（限时特价）"
                                            description="个人/小团队最常用的商业授权版本。"
                                            href="https://mbd.pub/o/bread/Y56bmJ9s"
                                            label="立即购买"
                                            external
                                        />
                                        <QuickActionCard
                                            title="定制版"
                                            price="详询"
                                            note="按需求评估"
                                            description="适合专项交付、定制开发或配套服务。"
                                            href="https://work.weixin.qq.com/kfid/kfc60ac355e8e8da022"
                                            label="联系作者"
                                            external
                                            subtle
                                        />
                                    </div>

                                    <div className="mt-6 rounded-3xl bg-gray-50 p-4 dark:bg-gray-900/70">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-0">
                                            支持的支付方式
                                        </div>
                                        <div className="mt-4 grid gap-3">
                                            {paymentMethods.map((method) => (
                                                <div
                                                    key={method.name}
                                                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
                                                >
                                                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-0">
                                                        {method.name}
                                                    </div>
                                                    <div className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                                                        {method.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/20">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-0">
                                            购买完成后别漏掉这一步
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                            请填写
                                            {" "}
                                            <Link
                                                href="https://pro.tduckcloud.com/s/14af54f03ddd4080988307834a024787"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-semibold text-gray-900 underline decoration-amber-400 underline-offset-4 dark:text-gray-0"
                                            >
                                                购买登记表单
                                            </Link>
                                            ，用于授权备案、交付确认与后续支持。
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </section>

                        <section
                            id="plans"
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "mt-12 landing-sm:mt-16 landing-lg:mt-20",
                            )}
                        >
                            <SectionHeading
                                eyebrow="Pricing"
                                title="授权套餐"
                                description="保留现有社区版、捐赠版、定制版三档结构，并把购买入口统一到当前站内。"
                            />

                            <div className="mt-8 grid gap-6 landing-lg:grid-cols-3">
                                {plans.map((plan) => (
                                    <PlanCard key={plan.name} {...plan} />
                                ))}
                            </div>
                        </section>

                        <section
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "mt-12 landing-sm:mt-16 landing-lg:mt-20",
                            )}
                        >
                            <SectionHeading
                                eyebrow="Policy"
                                title="授权与交付"
                                description="把原本散落在购买文档中的关键规则提炼成购买页内可直接阅读的摘要。"
                            />

                            <div className="mt-8 grid gap-6 landing-md:grid-cols-2">
                                {policyCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className={clsx(
                                            "rounded-[28px]",
                                            "border border-gray-200 dark:border-gray-700",
                                            "bg-white dark:bg-gray-800/80",
                                            "p-6 landing-sm:p-7",
                                        )}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-0">
                                            {card.title}
                                        </h3>
                                        <div className="mt-5 space-y-3">
                                            {card.items.map((item) => (
                                                <BulletItem key={item}>
                                                    {item}
                                                </BulletItem>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <CtaLink
                                    href="/docs/business/purchase/howtopurchase"
                                    label="查看完整购买文档"
                                    variant="ghost"
                                />
                                <CtaLink
                                    href="https://pro.tduckcloud.com/s/14af54f03ddd4080988307834a024787"
                                    label="填写购买登记表"
                                    variant="secondary"
                                    external
                                />
                            </div>
                        </section>

                        <section
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "mt-12 landing-sm:mt-16 landing-lg:mt-20",
                            )}
                        >
                            <SectionHeading
                                eyebrow="Workflow"
                                title="购买流程"
                                description="用户从评估、支付到备案和交付的路径，都能在这个页面一次看完。"
                            />

                            <div className="mt-8 grid gap-5 landing-md:grid-cols-2 landing-lg:grid-cols-4">
                                {purchaseSteps.map((item) => (
                                    <div
                                        key={item.step}
                                        className={clsx(
                                            "rounded-[28px]",
                                            "border border-gray-200 dark:border-gray-700",
                                            "bg-white dark:bg-gray-800/80",
                                            "p-6",
                                        )}
                                    >
                                        <div className="text-sm font-semibold tracking-[0.18em] text-sky-700 dark:text-cyan-300">
                                            {item.step}
                                        </div>
                                        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-0">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section
                            id="faq"
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "mt-12 landing-sm:mt-16 landing-lg:mt-20",
                            )}
                        >
                            <SectionHeading
                                eyebrow="FAQ"
                                title="常见问题"
                                description="问题聚焦在授权边界、购买后动作、退款、发票和售后。"
                            />

                            <div
                                className={clsx(
                                    "mt-8",
                                    "rounded-[32px]",
                                    "border border-gray-200 dark:border-gray-700",
                                    "bg-white dark:bg-gray-800/80",
                                    "px-6 landing-sm:px-8",
                                )}
                            >
                                {faqs.map((item, index) => {
                                    const isLast = index === faqs.length - 1;

                                    return (
                                        <Disclosure key={item.question}>
                                            {({ open }) => (
                                                <div
                                                    className={clsx(
                                                        "py-5",
                                                        !isLast &&
                                                            "border-b border-gray-200 dark:border-gray-700",
                                                    )}
                                                >
                                                    <Disclosure.Button
                                                        className={clsx(
                                                            "flex w-full items-start justify-between gap-4 text-left",
                                                            "text-base landing-sm:text-lg font-semibold",
                                                            "text-gray-900 dark:text-gray-0",
                                                        )}
                                                    >
                                                        <span>{item.question}</span>
                                                        <CommonCircleChevronDown
                                                            className={clsx(
                                                                "mt-0.5 h-6 w-6 flex-shrink-0 text-gray-500 transition-transform",
                                                                open && "rotate-180",
                                                            )}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-4 max-w-[920px] text-sm leading-7 text-gray-600 dark:text-gray-400 landing-sm:text-base">
                                                        {item.answer}
                                                    </Disclosure.Panel>
                                                </div>
                                            )}
                                        </Disclosure>
                                    );
                                })}
                            </div>
                        </section>

                        <section
                            className={clsx(
                                sectionWidth,
                                "px-4 landing-sm:px-6 landing-lg:px-0",
                                "mt-12 landing-sm:mt-16 landing-lg:mt-20",
                            )}
                        >
                            <div
                                className={clsx(
                                    "relative overflow-hidden",
                                    "rounded-[32px]",
                                    "border border-gray-200 dark:border-gray-700",
                                    "bg-gray-900 text-gray-0",
                                    "p-7 landing-sm:p-10",
                                )}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.28),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.18),_transparent_30%)]" />
                                <div className="relative">
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                        Ready
                                    </div>
                                    <h2 className="mt-3 text-3xl font-semibold landing-sm:text-4xl">
                                        准备购买 IceCMS Pro？
                                    </h2>
                                    <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-200 landing-sm:text-base">
                                        如果你希望站内购买链路更完整，现在已经可以从导航、企业页、购买文档和独立 `/store`
                                        页面进入同一套授权购买说明。
                                    </p>
                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <CtaLink
                                            href="https://mbd.pub/o/bread/Y56bmJ9s"
                                            label="购买捐赠版"
                                            dark
                                            external
                                        />
                                        <CtaLink
                                            href="https://work.weixin.qq.com/kfid/kfc60ac355e8e8da022"
                                            label="联系作者"
                                            variant="secondary-dark"
                                            external
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <LandingFooter />
                </div>
            </CommonLayout>
        </>
    );
};

type CtaLinkProps = {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "ghost" | "secondary-dark";
    external?: boolean;
    dark?: boolean;
};

const CtaLink = ({
    href,
    label,
    variant = "primary",
    external,
    dark,
}: CtaLinkProps) => {
    const className = clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:no-underline",
        variant === "primary" &&
            "bg-refine-blue text-white hover:bg-blue-700 dark:bg-refine-cyan-alt dark:text-gray-900 dark:hover:bg-cyan-300",
        variant === "secondary" &&
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-0 dark:hover:bg-gray-700",
        variant === "ghost" &&
            "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
        variant === "secondary-dark" &&
            "border border-gray-600 bg-transparent text-gray-0 hover:bg-gray-800",
        dark &&
            "bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-0 dark:text-gray-900",
    );

    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={className}
        >
            {label}
        </Link>
    );
};

const SectionHeading = ({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) => (
    <div className="max-w-[760px]">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
            {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-0 landing-sm:text-4xl">
            {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 landing-sm:text-base">
            {description}
        </p>
    </div>
);

const FactCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/70">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
            {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
        </div>
    </div>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600 dark:text-cyan-300" />
        <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
            {children}
        </div>
    </div>
);

type PlanCardProps = {
    name: string;
    badge?: string;
    pricePrefix?: string;
    price: string;
    unit: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    featured?: boolean;
    external?: boolean;
};

const PlanCard = ({
    name,
    badge,
    pricePrefix,
    price,
    unit,
    description,
    features,
    ctaLabel,
    ctaHref,
    featured,
    external,
}: PlanCardProps) => (
    <div
        className={clsx(
            "relative flex h-full flex-col overflow-hidden rounded-[30px] border p-6 landing-sm:p-7",
            featured
                ? "border-sky-400 bg-sky-50/70 dark:border-cyan-500 dark:bg-cyan-950/20"
                : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800/80",
        )}
    >
        {badge ? (
            <div className="absolute right-6 top-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-gray-900">
                {badge}
            </div>
        ) : null}

        <div className="text-xl font-semibold text-gray-900 dark:text-gray-0">
            {name}
        </div>
        <div className="mt-5 flex items-end gap-1 text-gray-900 dark:text-gray-0">
            {pricePrefix ? (
                <span className="text-2xl font-semibold">{pricePrefix}</span>
            ) : null}
            <span className="text-4xl font-semibold leading-none">{price}</span>
        </div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{unit}</div>
        <p className="mt-4 min-h-[48px] text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
        </p>

        <div className="mt-6 space-y-3">
            {features.map((feature) => (
                <BulletItem key={feature}>{feature}</BulletItem>
            ))}
        </div>

        <div className="mt-8">
            <CtaLink
                href={ctaHref}
                label={ctaLabel}
                external={external}
                variant={featured ? "primary" : "secondary"}
            />
        </div>
    </div>
);

const QuickActionCard = ({
    title,
    price,
    note,
    description,
    href,
    label,
    external,
    subtle,
}: {
    title: string;
    price: string;
    note: string;
    description: string;
    href: string;
    label: string;
    external?: boolean;
    subtle?: boolean;
}) => (
    <div
        className={clsx(
            "rounded-[28px] border p-5",
            subtle
                ? "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/70"
                : "border-sky-300 bg-sky-50 dark:border-cyan-700 dark:bg-cyan-950/20",
        )}
    >
        <div className="flex items-start justify-between gap-4">
            <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-0">
                    {title}
                </div>
                <div className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-0">
                    {price}
                </div>
                <div className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    {note}
                </div>
            </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
        </p>
        <div className="mt-5">
            <CtaLink
                href={href}
                label={label}
                external={external}
                variant={subtle ? "secondary" : "primary"}
            />
        </div>
    </div>
);

export default StorePage;

const { type } = require('os');

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    mainSidebar: [
        // Getting Started
        {
            type: "category",
            label: "开始",
            className: "category-as-header",
            items: [
                "getting-started/overview",
                "getting-started/quickstart",
                {
                    type: "doc",
                    id: "tutorial/introduction/index",
                    label: "演示",
                },
                {
                    type: "link",
                    href: "https://s.refine.dev/examples",
                    label: "在线演示",
                    customProps: {
                        external: true,
                    },
                },
                {
                    type: "link",
                    href: "https://refine.dev/templates",
                    label: "模版",
                    customProps: {
                        external: true,
                    },
                },
            ],
        },
        // Devtools
        {
            type: "link",
            href: "/enterprise",
            label: "Pro版",
            className: "enterprise-badge",
        },
        // Guides & Concepts
        {
            type: "category",
            label: "环境",
            className: "category-as-header",
            items: [    
                "project-env/environment",
                "project-env/tool",
            ]
        },
        // Guides & Concepts
        {
            type: "category",
            label: "部署",
            className: "category-as-header",
            items: [
                {
                    type: "category",
                    label: "前端",
                    link: {
                        type: "generated-index",
                        title: "front",
                        slug: "/front",
                    },
                    items: [
                        "project-build/front/front-end",
                        {
                            type: "category",
                            label: "Nuxt端",
                            items: [
                                "project-build/front/nuxt/base",
                                "project-build/front/nuxt/interface",
                            ],
                        },
                        {
                            type: "category",
                            label: "Uniapp端",
                            items: [
                                "project-build/front/uniapp/base",
                                {
                                    type: "category",
                                    label: "小程序配置",
                                    items: [
                                         "project-build/front/uniapp/miniproject/register",
                                        "project-build/front/uniapp/miniproject/getAppSecret",
                                        "project-build/front/uniapp/miniproject/setAppSecret",
                                        "project-build/front/uniapp/miniproject/pay",
                                        "project-build/front/uniapp/miniproject/payset",
                                        "project-build/front/uniapp/miniproject/fasttest",
                                        "project-build/front/uniapp/miniproject/flow",



                                    ],
                                },
                                {
                                    type: "category",
                                    label: "App配置",
                                    items: [
                                        "project-build/front/uniapp/app/fast",
                                        "project-build/front/uniapp/app/ios",
                                        "project-build/front/uniapp/app/market",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "后端",
                    link: {
                        type: "generated-index",
                        title: "server",
                        slug: "/server",
                    },
                    items: [
                        "project-build/server/baota",
                        "project-build/server/1panel",
                        "project-build/server/general",
                        "project-build/server/docker",
                    ],
                },
                {
                    type: "category",
                    label: "支付配置",
                    link: {
                        type: "generated-index",
                        title: "pay",
                        slug: "/pay",
                    },
                    items: [
                        "project-build/pay/ali",
                        "project-build/pay/we",
                    ],
                },
            ],
        },
        // Guides & Concepts
        {
            type: "category",
            label: "开发",
            className: "category-as-header",
            items: [    
                "project-code/overview",
                {
                    type: "category",
                    label: "环境配置",
                    link: {
                        type: "generated-index",
                        title: "environment",
                        slug: "/environment",
                    },
                    items: [
                        "project-code/environment/jdk-config",
                        "project-code/environment/maven_config",
                        "project-code/environment/idea_environment_config",
                        "project-code/environment/icecms_compiler",
                        "project-code/environment/icecms_with_run",
                    ],
                },
                {
                    type: "category",
                    label: "docker",
                    link: {
                        type: "generated-index",
                        title: "docker",
                        slug: "/docker",
                    },
                    items: [
                        "project-code/docker/docker-install",
                        "project-code/docker/docker-commands",
                        "project-code/docker/dockerfile",
                        "project-code/docker/dockercomplose",
                        "project-code/docker/docker-network",
                        "project-code/docker/docker-volume",
                    ],
                },
                {
                    type: "category",
                    label: "nuxt",
                    link: {
                        type: "generated-index",
                        title: "nuxt",
                        slug: "/nuxt",
                    },
                    items: [
                        "project-code/nuxt/config",
                        "project-code/nuxt/nuxtstart",
                        "project-code/nuxt/nuxtfront",

                    ],
                },
                {
                    type: "category",
                    label: "vue",
                    link: {
                        type: "generated-index",
                        title: "vue",
                        slug: "/vue",
                    },
                    items: [
                        "project-code/vue/vuex",
                    ],
                },
                {
                    type: "category",
                    label: "接口",
                    link: {
                        type: "generated-index",
                        title: "interface",
                        slug: "/interface",
                    },
                    items: [
                        "project-code/interface/code",
                        "project-code/interface/allinterface",
                    ],
                },
                  {
                    type: "category",
                    label: "性能",
                    link: {
                        type: "generated-index",
                        title: "Performance",
                        slug: "/Performance",
                    },
                    items: [
                        "project-code/performance/code",
                        "project-code/performance/Optimization",
                    ],
                },
            ]
        },
                // Migration Guide
                {
                    type: "category",
                    label: "Pro版",
                    className: "category-as-header",
                    items: [
                        {
                            type: "category",
                            label: "购买",
                            link: {
                                type: "generated-index",
                                title: "purchase",
                                slug: "/purchase",
                            },
                            items: [
                                "business/purchase/howtopurchase",
                                "business/purchase/licensinginformation",
                                "business/purchase/disclaimer",
                                "business/purchase/rirghtsexplanation",
                            ],
                        },
                        {
                            type: "category",
                            label: "用户",
                            link: {
                                type: "generated-index",
                                title: "user",
                                slug: "/user",
                            },
                            items: [
                                "business/user/typicalusers",
                              
                            ],
                        },
                        {
                            type: "category",
                            label: "售后",
                            link: {
                                type: "generated-index",
                                title: "aftersales",
                                slug: "/aftersales",
                            },
                            items: [
                                "business/aftersales/ticketfeedback",
                              
                            ],
                        },
                        {
                            type: "category",
                            label: "技术栈",
                            link: {
                                type: "generated-index",
                                title: "techstack",
                                slug: "/techstack",
                            },
                            items: [
                                "business/techstack/techstack",
                              
                            ],
                        },
                    ],
                },
                // Migration Guide
                {
                    type: "category",
                    label: "指南 🚀",
                    className: "category-as-header",
                    items: [
                        "migration-guide/3x-to-4x",
                        "migration-guide/userguide",
                        "migration-guide/auth-provider",
                        "migration-guide/router-provider",
                    ],
                }

    ],
};

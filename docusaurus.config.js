/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require("dotenv").config();

const redirectJson = require("./redirects.json");
const tutorialData = require("./tutorial-units");

/** @type {import('@docusaurus/types/src/index').DocusaurusConfig} */
const siteConfig = {
    title: "IceCMS",
    tagline: "Build your IceCMS",
    url: "https://icecms.cn",
    baseUrl: "/",
    projectName: "IceCMS",
    organizationName: "IceCMS",
    trailingSlash: true,
    favicon: "img/favicon.ico",
    scripts: [],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: Boolean(process.env.DISABLE_DOCS)
                    ? false
                    : {
                          path: "./docs",
                          sidebarPath: require.resolve("./sidebars.js"),
                          editUrl:
                              "https://github.com/Thecosy/IceCMS/tree/master/documentation",
                          showLastUpdateAuthor: true,
                          showLastUpdateTime: true,
                          disableVersioning:
                              process.env.DISABLE_VERSIONING === "true",
                          versions: {
                              current: {
                                  label: "中文",
                              },
                          },
                          lastVersion: "current",
                          admonitions: {
                              tag: ":::",
                              keywords: [
                                  "additional",
                                  "note",
                                  "tip",
                                  "info-tip",
                                  "info",
                                  "caution",
                                  "danger",
                                  "sourcecode",
                                  "create-example",
                                  "simple",
                              ],
                          },
                          exclude: ["**/**/_*.md"],
                      },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/refine-theme/css/colors.css"),
                        require.resolve("./src/refine-theme/css/fonts.css"),
                        require.resolve("./src/refine-theme/css/custom.css"),
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
                gtag: {
                    trackingID: "G-27Z1WY952H",
                },
                sitemap: {
                    ignorePatterns: ["**/_*.md"],
                },
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: redirectJson.redirects,
                createRedirects(existingPath) {
                    if (existingPath.includes("/api-reference/core/")) {
                        return [
                            existingPath.replace(
                                "/api-reference/core/",
                                "/api-references/",
                            ),
                        ];
                    }
                    return undefined; // Return a falsy value: no redirect created
                },
            },
        ],
        [
            "docusaurus-plugin-copy",
            {
                id: "Copy Workers",
                path: "static/workers",
                context: "workers",
                include: ["**/*.{js}"],
            },
        ],
        async function tailwindcss() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        // "./plugins/docgen.js",
        "./plugins/examples.js",
        "./plugins/checklist.js",
        ...(process.env.DISABLE_BLOG
            ? []
            : [
                  [
                      "./plugins/blog-plugin.js",
                      {
                          blogTitle: "Blog",
                          blogDescription:
                              "A resource for Refine, front-end ecosystem, and web development",
                          routeBasePath: "/blog",
                          postsPerPage: 12,
                          blogSidebarTitle: "All posts",
                          blogSidebarCount: 0,
                          feedOptions: {
                              type: "all",
                              copyright: `Copyright © ${new Date().getFullYear()} refine.`,
                          },
                      },
                  ],
              ]),
        "./plugins/intercom.js",
        "./plugins/clarity.js",
        "./plugins/templates.js",
        "./plugins/example-redirects.js",
    ],
    themeConfig: {
        onBrokenLinks: 'ignore',
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" },
                },
                {
                    className: "code-block-hidden",
                    line: "hide-next-line",
                    block: { start: "hide-start", end: "hide-end" },
                },
                {
                    className: "theme-code-block-added-line",
                    line: "added-line",
                    block: { start: "added-start", end: "added-end" },
                },
                {
                    className: "theme-code-block-removed-line",
                    line: "removed-line",
                    block: { start: "removed-start", end: "removed-end" },
                },
            ],
        },
        image: "img/refine_social.png",
        algolia: {
            appId: "KVC523MV4F",
            apiKey: "4ba21bc1c5a4a6d9151a21a16ea10ade",
            indexName: "icecms",
            // lang: "zh",
            contextualSearch: false,
            // searchPagePath: false,
            // contextualSearch: false,
            // searchParameters: {}
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "react-admin, react-framework, internal-tool, admin-panel, ant-design, material ui, mui",
            },
        ],
        navbar: {
            logo: {
                alt: "refine",
                src: "img/refine_logo.png",
            },
            items: [
                { to: "blog", label: "Blog", position: "left" },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/Thecosy/IceCMS",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://discord.gg/refine",
                    position: "right",
                    className: "header-icon-link header-discord-link",
                },
                {
                    href: "https://twitter.com/refine_dev",
                    position: "right",
                    className: "header-icon-link header-twitter-link",
                },
            ],
        },
        footer: {
            logo: {
                alt: "refine",
                src: "/img/refine_logo.png",
            },
            links: [
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs",
                        },
                        {
                            label: "Tutorials",
                            to: "docs/tutorial/introduction/index/",
                        },
                        {
                            label: "Blog",
                            to: "blog",
                        },
                    ],
                },
                {
                    title: "Product",
                    items: [
                        {
                            label: "Examples",
                            to: "examples",
                        },
                        {
                            label: "Integrations",
                            to: "integrations",
                        },
                        {
                            label: "Become an Expert",
                            to: "become-a-refine-expert",
                        },
                    ],
                },
                {
                    title: "Company",
                    items: [
                        {
                            label: "About",
                            to: "about",
                        },
                        {
                            label: "Store 🎁",
                            to: "https://store.refine.dev",
                        },
                    ],
                },
                {
                    title: "__LEGAL",
                    items: [
                        {
                            label: "License",
                            to: "https://github.com/Thecosy/IceCMS/blob/master/LICENSE",
                        },
                        // {
                        //     label: "Terms",
                        //     to: "/enterprise",
                        // },
                        // {
                        //     label: "Privacy",
                        //     to: "/privacy-policy",
                        // },
                        // {
                        //     label: "info@refine.dev",
                        //     to: "mailto:info@refine.dev",
                        // },
                    ],
                },
                {
                    title: "__SOCIAL",
                    items: [
                        {
                            href: "https://github.com/Thecosy/IceCMS",
                            label: "github",
                        },
                        {
                            href: "https://discord.gg/refine",
                            label: "discord",
                        },
                        {
                            href: "https://reddit.com/r/refine",
                            label: "reddit",
                        },
                        {
                            href: "https://twitter.com/refine_dev",
                            label: "twitter",
                        },
                        {
                            href: "https://www.linkedin.com/company/refine-dev",
                            label: "linkedin",
                        },
                    ],
                },
            ],
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
        colorMode: {
            defaultMode: "dark",
        },
    },
    customFields: {
        /** Footer Fields */
        footerDescription:
            '<strong style="font-weight:700;">refine</strong> is a React-based framework for the rapid development of web applications. It eliminates the repetitive tasks demanded by <strong style="font-weight:700;">CRUD</strong> operations and provides industry standard solutions.',
        contactTitle: "Contact",
        contactDescription: [
            "IceCMS Development Inc.",
            "IceCMS obtains all interpretation rights",
        ],
        contactEmail: "info@icecms.cn",
        /** ---- */
        /** Live Preview */
        LIVE_PREVIEW_URL:
            process.env.LIVE_PREVIEW_URL ?? "http://localhost:3030/preview",
        /** ---- */
        tutorial: tutorialData,
    },
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve("swc-loader"),
            options: {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },
                    target: "es2017",
                },
                module: {
                    type: isServer ? "commonjs" : "es6",
                },
            },
        }),
    },
};

module.exports = siteConfig;

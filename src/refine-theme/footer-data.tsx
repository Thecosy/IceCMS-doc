import React from "react";
import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
import { FooterRedditIcon } from "./icons/footer-reddit";
import { FooterTwitterIcon } from "./icons/footer-twitter";
import { NewBadgeIcon } from "./icons/popover";

export const menuItems = [
    {
        label: "资源",
        items: [
            {
                label: "快速开始",
                href: "/docs/getting-started/quickstart",
            },
            {
                label: "演示",
                href: "/docs/tutorial/introduction/index/",
            },
            {
                label: "Blog",
                href: "/blog",
            },
        ],
    },
    {
        label: "产品",
        items: [
            {
                label: "Pro版",
                icon: <NewBadgeIcon />,
                href: "/enterprise",
            },
            {
                label: "模版",
                href: "/templates",
            },
            {
                label: "集成",
                href: "/integrations",
            },
            // {
            //     label: "Become an Expert",
            //     href: "/become-an-expert",
            // },
            // {
            //     label: "Cloud",
            //     href: "/cloud",
            // },
        ],
    },
    {
        label: "公司",
        items: [
            {
                label: "关于",
                href: "/about",
            },
            {
                label: "商店",
                href: "https://store.refine.dev",
            },
            {
                label: "联系我们",
                href: "https://form.typeform.com/to/H54hLD9r",
            },
        ],
    },
];

export const secondaryMenuItems = [
    // {
    //     label: "Terms & Conditions",
    //     href: "#",
    // },
    {
        label: "隐私",
        href: "/privacy-policy",
    },
    {
        label: "许可",
        href: "https://github.com/Thecosy/IceCMS/blob/master/LICENSE",
    },
];

export const footerDescription = `IceCMS 是一个基于 SpringBoot 的框架，用于快速开发 Web 应用程序，并提供行业标准解决方案。`;

export const socialLinks = [
    {
        icon: FooterGithubIcon,
        href: "https://github.com/Thecosy/IceCMS",
    },
    {
        icon: FooterDiscordIcon,
        href: "https://discord.gg/refine",
    },
    {
        icon: FooterRedditIcon,
        href: "https://www.reddit.com/r/refine/",
    },
    {
        icon: FooterTwitterIcon,
        href: "https://twitter.com/refine_dev",
    },
    {
        icon: FooterLinkedinIcon,
        href: "https://www.linkedin.com/company/refine-dev",
    },
];

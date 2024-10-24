import {
    DocumentsIcon,
    IntegrationsIcon,
    TutorialIcon,
    ExamplesIcon,
    AwesomeIcon,
    ContributeIcon,
    RefineWeekIcon,
    HackathonsIcon,
    AboutUsIcon,
    StoreIcon,
    MeetIcon,
    BlogIcon,
    NewBadgeIcon,
} from "../icons/popover";

export type NavbarPopoverItemType = {
    isPopover: true;
    label: string;
    items: {
        label: string;
        description: string;
        link: string;
        icon: React.FC;
    }[];
};

export type NavbarItemType = {
    isPopover?: false;
    label: string;
    icon?: React.FC;
    href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
    {
        isPopover: true,
        label: "开源",
        items: [
            {
                label: "文档",
                description: "开始所需的一切。",
                link: "/docs/",
                icon: DocumentsIcon,
            },
            {
                label: "教程",
                description: "创建您的第一个IceCMS应用程序。",
                link: "/docs/tutorial/introduction/index/",
                icon: TutorialIcon,
            },
            {
                label: "仓库",
                description: "Gtihub存储库。",
                link: "https://github.com/Thecosy/IceCMS",
                icon: AwesomeIcon,
            },
            {
                label: "集成",
                description: "探索IceCMS生态系统。",
                link: "/integrations",
                icon: IntegrationsIcon,
            },
            {
                label: "模板",
                description: "为您的项目准备好的示例",
                link: "/templates",
                icon: ExamplesIcon,
            },
            {
                label: "Blog",
                description: "有关开发的文章。",
                link: "/blog",
                icon: BlogIcon,
            },
        ],
    },
    {
        isPopover: false,
        label: "Pro版",
        href: "/enterprise",
        icon: NewBadgeIcon,
    },
    {
        isPopover: true,
        label: "社区",
        items: [
            {
                label: "Contributing",
                description: "Join open-source contributors.",
                link: "/docs/guides-concepts/contributing/",
                icon: ContributeIcon,
            },
            {
                label: "RefineWeek",
                description: "Weekly projects to practice refine.",
                link: "/week-of-refine",
                icon: RefineWeekIcon,
            },
            {
                label: "Hackathons",
                description: "Compete in hackathons and earn prizes!",
                link: "https://s.refine.dev/hackathon2",
                icon: HackathonsIcon,
            },
        ],
    },
    {
        isPopover: true,
        label: "关于",
        items: [
            {
                label: "About IceCMS",
                description: "Team & company information.",
                link: "/about",
                icon: AboutUsIcon,
            },
            {
                label: "Swag Store",
                description: "T-shirts, caps, and more!",
                link: "https://store.refine.dev",
                icon: StoreIcon,
            },
            {
                label: "Meet Refine",
                description: "Call us for any questions",
                link: "https://refinedev.typeform.com/to/Z9wS06kE",
                icon: MeetIcon,
            },
        ],
    },
];

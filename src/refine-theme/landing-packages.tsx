import clsx from "clsx";
import { useInView } from "framer-motion";
import React, {
    DetailedHTMLProps,
    FC,
    ReactNode,
    SVGProps,
    useRef,
} from "react";
import {
    Ably,
    Airtable,
    Antd,
    Appwrite,
    Chakra,
    Directus,
    Elide,
    ElideGraphql,
    Firebase,
    Graphql,
    Hasura,
    Headless,
    HookForm,
    Hygraph,
    JSONApi,
    Kbar,
    Mantine,
    Medusa,
    Mui,
    Nest,
    NestQuery,
    Nextjs,
    Remix,
    Rest,
    Sanity,
    ShadCnUI,
    SQLite,
    Strapi,
    Supabase,
    TailwindCss,
} from "../assets/integration-icons";
import { LandingSectionCtaButton } from "./landing-section-cta-button";

type Props = {
    className?: string;
};

export const LandingPackages: FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className, "w-full")}>
            <div
                className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
            >
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px]",
                        "tracking-tight",
                        "text-start",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    启动{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-green-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.3)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                        )}
                    >
                        更快
                    </span>
                    , 维护{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        更容易
                    </span>
                    , 管理{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-red dark:drop-shadow-[0_0_30px_rgba(255,76,77,0.4)]",
                            "text-refine-purple drop-shadow-[0_0_30px_rgba(128,0,255,0.3)]",
                        )}
                    >
                        更便捷
                    </span>
                    .
                </h2>
            </div>

            <div
                className={clsx(
                    "w-full",
                    "relative",
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "pb-4 landing-md:pb-10",
                    "dark:bg-landing-packages-dark bg-landing-packages",
                    "dark:bg-gray-800 bg-gray-50",
                    "rounded-2xl landing-sm:rounded-3xl",
                    "overflow-hidden",
                )}
            >
                <div
                    className={clsx(
                        "landing-packages-mask",
                        "pt-4 landing-md:pt-10",
                    )}
                >
                    <PackagesContainer animDirection="right">
                        {[...listOne, ...listOne].map(
                            ({ icon: Icon, label, tooltip }, index) => (
                                <PackageItem
                                    key={index}
                                    label={label}
                                    tooltip={tooltip}
                                    icon={<Icon width="24" height="24" />}
                                />
                            ),
                        )}
                    </PackagesContainer>
                    <PackagesContainer animDirection="left">
                        {[...listTwo, ...listTwo].map(
                            ({ icon: Icon, label, tooltip }, index) => (
                                <PackageItem
                                    key={index}
                                    label={label}
                                    tooltip={tooltip}
                                    icon={<Icon width="24" height="24" />}
                                />
                            ),
                        )}
                    </PackagesContainer>
                </div>

                <div
                    className={clsx(
                        "not-prose",
                        "mt-4 landing-sm:mt-6 landing-lg:mt-10",
                        "px-4 landing-sm:px-10",
                    )}
                >
                    <h6
                        className={clsx(
                            "p-0",
                            "font-semibold",
                            "text-base landing-sm:text-2xl",
                            "dark:text-gray-300 text-gray-900",
                        )}
                    >
                        无缝连接
                    </h6>
                    <div
                        className={clsx(
                            "not-prose",
                            "flex",
                            "items-center",
                            "justify-between",
                            "flex-wrap",
                            "gap-4 landing-sm:gap-8",
                        )}
                    >
                        <p
                            className={clsx(
                                "p-0",
                                "mt-2 landing-sm:mt-4",
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            超过 15 种服务的开箱即用集成

                        </p>
                        <LandingSectionCtaButton to="/integrations">
                        所有集成
                        </LandingSectionCtaButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PackagesContainer = ({
    children,
    className,
    animDirection,
    ...props
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    animDirection: "left" | "right";
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    return (
        <div
            ref={ref}
            className={clsx(
                "relative",
                "flex",
                "items-center",
                animDirection === "left" ? "justify-start" : "justify-end",
            )}
        >
            <div
                className={clsx(
                    className,
                    "hover:animation-paused",
                    inView
                        ? animDirection === "left"
                            ? "animate-landing-packages-left"
                            : "animate-landing-packages-right"
                        : "",
                    "absolute",
                    "left-0",
                    "top-0",
                    "pr-4",
                    "w-auto",
                    "flex",
                    "items-center",
                    "gap-[18px]",
                    "mt-6",
                    "relative",
                )}
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

const PackageItem = (props: {
    icon: ReactNode;
    label: string;
    tooltip: string;
}) => {
    const { tooltip, icon, label } = props;

    return (
        <div
            className={clsx(
                "group",
                "relative",
                "z-10",
                "flex",
                "items-center",
                "justify-center",
                "gap-3",
                "pl-4 pt-4 pb-4 pr-6",
                "dark:bg-gray-900 bg-gray-0",
                "rounded-full",
                "cursor-pointer",
            )}
        >
            <div>{icon}</div>
            <div
                className={clsx(
                    "text-sm",
                    "font-medium",
                    "dark:bg-landing-packages-text-dark bg-landing-packages-text",
                    "bg-clip-text",
                    "text-transparent",
                    "whitespace-nowrap",
                )}
            >
                {label}
            </div>

            <div
                className={clsx(
                    "absolute",
                    "z-20",
                    "top-[-48px]",
                    "scale-0",
                    "group-hover:scale-100",
                    "transition-transform",
                    "origin-top",
                )}
            >
                <div
                    className={clsx(
                        "relative",
                        "text-sm",
                        "dark:bg-gray-0 bg-gray-900",
                        "dark:text-gray-700 text-gray-300",
                        "rounded-full",
                        "px-6",
                        "py-3",
                        "whitespace-nowrap",
                    )}
                >
                    {tooltip}
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={15}
                    fill="none"
                    className={clsx(
                        "absolute",
                        "scale-0",
                        "-bottom-2",
                        "left-1/2",
                        "-translate-x-1/2",
                        "group-hover:scale-100",
                        "transition-transform",
                        "origin-bottom",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    <path
                        fill="currentColor"
                        d="M17.73 13.664C18.238 14.5 19.089 15 20 15c.912 0 1.763-.501 2.27-1.336l3.025-4.992C26.306 7.002 28.01 7 29.833 7H40V0H0v7h10.167c1.823 0 3.527.003 4.538 1.672l3.026 4.992Z"
                    />
                </svg>
            </div>
        </div>
    );
};

const listOne = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Firebase {...props} />,
        label: "Firebase",
        tooltip: "npm i refine-firebase",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Ably {...props} />,
        label: "Ably",
        tooltip: "npm i @refinedev/ably",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Airtable {...props} />,
        label: "Airtable",
        tooltip: "npm i @refinedev/airtable",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Appwrite {...props} />,
        label: "Appwrite",
        tooltip: "npm i @refinedev/appwrite",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Directus {...props} />,
        label: "Directus",
        tooltip: "npm i @tspvivek/refine-directus",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Elide {...props} />,
        label: "Elide",
        tooltip: "npm i elide-simple-rest",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <ElideGraphql {...props} />,
        label: "Elide GraphQL",
        tooltip: "npm i elide-simple-graphql",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Hasura {...props} />,
        label: "Hasura",
        tooltip: "npm i @refinedev/hasura",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <HookForm {...props} />,
        label: "Hook Form",
        tooltip: "npm i @refinedev/react-hook-form",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Antd {...props} />,
        label: "Ant Design",
        tooltip: "npm i @refinedev/antd",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Mui {...props} />,
        label: "Material UI",
        tooltip: "npm i @refinedev/mui",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Mantine {...props} />,
        label: "Mantine",
        tooltip: "npm i @refinedev/mantine",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Chakra {...props} />,
        label: "Chakra UI",
        tooltip: "npm i @refinedev/chakra-ui",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <ShadCnUI {...props} />,
        label: "shadcn/ui",
        tooltip: "npx shadcn-ui init",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <TailwindCss {...props} />,
        label: "Tailwind CSS",
        tooltip: "npx tailwindcss init",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Headless UI",
        tooltip: "npm i @headlessui/react",
    },
];

const listTwo = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Graphql {...props} />,
        label: "GraphQL",
        tooltip: "npm i @refinedev/graphql",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Kbar {...props} />,
        label: "Kbar",
        tooltip: "npm i @refinedev/kbar",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Medusa {...props} />,
        label: "Medusa",
        tooltip: "npm i @refinedev/medusa",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Nest {...props} />,
        label: "NestJS CRUD",
        tooltip: "npm i @refinedev/nestjsx-crud",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <NestQuery {...props} />,
        label: "Nestjs-query",
        tooltip: "npm i @refinedev/nestjs-query",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Nextjs {...props} />,
        label: "Next.js",
        tooltip: "npm i @refinedev/nextjs-router",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Remix {...props} />,
        label: "Remix",
        tooltip: "npm i @refinedev/remix-router",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Rest {...props} />,
        label: "REST",
        tooltip: "npm i @refinedev/simple-rest",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Strapi {...props} />,
        label: "Strapi",
        tooltip: "npm i @refinedev/strapi-v4",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Supabase {...props} />,
        label: "Supabase",
        tooltip: "npm i @refinedev/supabase",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Hygraph {...props} />,
        label: "Hygraph",
        tooltip: "npm i @acomagu/refine-hygraph",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Sanity {...props} />,
        label: "Sanity",
        tooltip: "npm i refine-sanity",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <SQLite {...props} />,
        label: "SQLite",
        tooltip: "npm i refine-sqlite",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <JSONApi {...props} />,
        label: "JSON:API",
        tooltip: "npm i refine-jsonapi",
    },
];

import clsx from "clsx";
import React, { FC } from "react";
import { CommonCircleChevronDown } from "./common-circle-chevron-down";
import { CommonCircleChevronUp } from "./common-circle-chevron-up";
import { LandingSectionCtaButton } from "./landing-section-cta-button";

type Props = {
    className?: string;
};

export const LandingTestimonial: FC<Props> = ({ className }) => {
    const [showMore, setShowMore] = React.useState(false);

    const testimonialsFirstThree = testimonials.slice(0, 3);
    const testiomianlsStartFromThree = testimonials.slice(3);
    const testimonialsFirstTwo = testimonials.slice(0, 2);
    const testimonialsStartFromTwo = testimonials.slice(2);

    return (
        <div
            className={clsx(
                className,
                "w-full",
                "flex",
                "flex-col",
                "items-center",
            )}
        >
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
                    IceCMS{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                        )}
                    >
                        带来不同的
                    </span>{" "}
                    改变
                </h2>
            </div>

            <div
                className={clsx(
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "grid grid-cols-12",
                    "gap-6",
                    "items-stretch",
                )}
            >
                {testimonialsFirstThree.map((testimonial, index) => {
                    return (
                        <TestimonialCard
                            key={index}
                            className={clsx(
                                "block landing-md:hidden landing-lg:block",
                                "col-span-full landing-lg:col-span-4",
                                "h-auto",
                            )}
                            {...testimonial}
                        />
                    );
                })}
                {testimonialsFirstTwo.map((testimonial, index) => {
                    return (
                        <TestimonialCard
                            key={index}
                            className={clsx(
                                "hidden landing-md:block landing-lg:hidden",
                                "col-span-6",
                                "h-auto",
                            )}
                            {...testimonial}
                        />
                    );
                })}
            </div>
            {showMore && (
                <div
                    className={clsx(
                        "block landing-md:hidden landing-lg:block",
                        "columns-1 landing-lg:columns-3 gap-6",
                    )}
                >
                    {testiomianlsStartFromThree.map((testimonial, index) => {
                        return (
                            <TestimonialCard
                                key={index}
                                className={clsx(
                                    "inline-block",
                                    "w-full",
                                    "mt-6",
                                )}
                                {...testimonial}
                            />
                        );
                    })}
                </div>
            )}
            {showMore && (
                <div
                    className={clsx(
                        "hidden landing-md:block landing-lg:hidden",
                        "columns-2 gap-6",
                    )}
                >
                    {testimonialsStartFromTwo.map((testimonial, index) => {
                        return (
                            <TestimonialCard
                                key={index}
                                className={clsx(
                                    "inline-block",
                                    "w-full",
                                    "mt-6",
                                )}
                                {...testimonial}
                            />
                        );
                    })}
                </div>
            )}
            <LandingSectionCtaButton
                className={clsx("cursor-pointer", "mt-6")}
                onClick={() => setShowMore((prev) => !prev)}
                icon={
                    showMore ? (
                        <CommonCircleChevronUp />
                    ) : (
                        <CommonCircleChevronDown />
                    )
                }
            >
                Show {showMore ? "less" : "more"}
            </LandingSectionCtaButton>
        </div>
    );
};

const TestimonialCard = ({
    name,
    title,
    description,
    img,
    link,
    className,
}) => {
    return (
        <div
            className={clsx(
                "border dark:border-gray-700 border-gray-200",
                "rounded-3xl",
                className,
            )}
        >
            <div
                className={clsx(
                    "not-prose",
                    "h-full",
                    "flex flex-col",
                    "justify-between",
                    "gap-6",
                    "p-10",
                )}
            >
                <div
                    className={clsx(
                        "text-base",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    {description}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                        "flex gap-4",
                        "items-center",
                        "appearance-none",
                        "no-underline",
                    )}
                >
                    <img
                        src={img}
                        alt={name}
                        className={clsx("w-12 h-12 rounded-full")}
                    />
                    <div className={clsx("flex flex-col")}>
                        <div
                            className={clsx(
                                "text-sm",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            {name}
                        </div>
                        <div
                            className={clsx(
                                "text-sm",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            {title}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

const testimonials = [
    {
        title: "CEO - Resend",
        name: "Zeno Rocha",
        link: "https://twitter.com/zenorocha",
        description:
            "I find CRUD boring, but IceCMS makes it fun for developers again!",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/zeno-rocha.png",
    },
    {
        title: "Author of React Hook Form",
        name: "Beier Luo",
        link: "https://twitter.com/HookForm",
        description:
            "IceCMS perfectly aligns with the philosophy of React Hook Form, and they work seamlessly together.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/beier-luo.png",
    },
    {
        title: "Sr. Software Engineer at Atlassian",
        name: "Daniel Del Core",
        link: "https://twitter.com/danieldelcore",
        description:
            "IceCMS has codemod support for major version transitions, making it easy for users to integrate new versions into their existing codebases seamlessly.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/daniel-del-core.png",
    },
    {
        title: "Founder - Tremor",
        name: "Christopher Kindl",
        link: "https://twitter.com/kindlaar",
        description:
            "IceCMS has one of the most convenient developer experiences (DX), giving me superpowers when it comes to developing modern web apps with security and flexibility in mind.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/christopher-kindl.png",
    },
    {
        title: "CEO - Medusa",
        name: "Nicklas Gellner",
        link: "https://medusajs.com/",
        description:
            "Medusa and IceCMS is a match for all developers looking for a strong open-source foundation. Check out the IceCMS SWAG store for a great Medusa implementation!",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/nicklas-gellner.png",
    },
    {
        title: "CEO - cerbos.dev",
        name: "Emre Baran",
        link: "https://cerbos.dev/about",
        description:
            "No enterprise or development team want to be confined by the limitation of a framework. IceCMS is one of those rare frameworks that strikes the balance perfectly right. Low code, easy to use but when needed fully customizable with a perfect escape hatch.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/emre-baran.png",
    },
    {
        title: "Founder - Cohorence",
        name: "Zachary Zaro",
        link: "https://www.withcoherence.com",
        description: "npm create IceCMS-app@latest => Boom!",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/zachary-zaro.png",
    },
    {
        title: "Daisy UI - Founder",
        name: "Pouya Saadeghi",
        link: "https://daisyui.com",
        description:
            "I really like how IceCMS gives the freedom to choose different stacks for back-end, front-end, and even UI libraries.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/pouya-saadeghi.png",
    },
    {
        title: "Founder - Next UI",
        name: "Junior Garcia",
        link: "https://twitter.com/jrgarciadev",
        description:
            "In IceCMS's headless way, the flexibility of the UI is impressive. The implementation of NextUI in IceCMS demonstrates this.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/junior-garcia.png",
    },
    {
        title: "Founder - JS Mastery",
        name: "Adrian Hajdin",
        link: "https://twitter.com/jsmasterypro/status/1721977998436675703?s=20",
        description:
            "IceCMS has truly transformed the app development process, making it incredibly efficient and hassle-free. With IceCMS, you can focus on your app's core features, not on the time-consuming tools setup, allowing you to do things that matter the most.",
        img: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/adrian-hajdin.png",
    },
];

import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import { openFigma } from "../utils/open-figma";

interface Props {
    className?: string;
}

export const DocRefineLogo = ({ className }: Props) => {
    const location = useLocation();
    const isEnglish = location.pathname.includes("english");

    return (
        <div
            className={clsx(
                "flex",
                "items-center justify-start",
                "gap-2",
                "no-underline",
                className,
            )}
        >
            <Link
                to="/"
                className={clsx("no-underline", "flex items-center gap-2")}
                onContextMenu={openFigma}
            >
                <Logo className="text-refine-cyan dark:text-refine-cyan-alt" />
                <span
                    className={clsx(
                        "text-gray-1000 dark:text-gray-0",
                        "text-base",
                        "font-semibold",
                    )}
                >
                    IceCMS
                </span>
            </Link>
            <span
                className={clsx(
                    "block",
                    "h-6",
                    "w-px",
                    "mx-1",
                    "bg-gray-300 dark:bg-gray-600",
                )}
            />
            <Link to="/docs" className={clsx("no-underline")}>
                <span
                    className={clsx(
                        "text-gray-1000 dark:text-gray-0",
                        "text-base font-normal",
                    )}
                >
                    {isEnglish ? "Docs" : "文档"}
                </span>
            </Link>
        </div>
    );
};

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <image
            x="0"
            y="0"
            width="22"
            height="22"
            xlinkHref="https://img3.icecmspro.com/string/e3ca36f1-0ea5-4706-8bb5-993cd10201e6.png"
        />
    </svg>
);
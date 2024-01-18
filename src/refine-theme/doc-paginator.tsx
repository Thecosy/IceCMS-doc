import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ArrowLeftIcon } from "./icons/arrow-left";
import { ArrowRightIcon } from "./icons/arrow-right";

export const DocPaginator = (props) => {
    const { previous, next } = props;

    return (
        <div className={clsx("grid grid-cols-2", "gap-4 2xl:gap-8", "w-full")}>
            {previous && (
                <Link
                    href={previous.permalink}
                    className={clsx(
                        "group",
                        "flex-1",
                        "p-4",
                        "rounded-lg",
                        "border border-gray-300 dark:border-gray-600",
                        "hover:bg-gray-100 hover:dark:bg-gray-700",
                        "hover:no-underline",
                    )}
                >
                    <div className="flex-1 flex items-start justify-center flex-col gap-2 text-left">
                        <div
                            className={clsx(
                                "flex items-center gap-2",
                                "text-base",
                                "text-gray-800 dark:text-gray-100",
                            )}
                        >
                            <span
                                className={clsx(
                                    "flex items-center justify-center",
                                    "w-6 h-6",
                                )}
                            >
                                <ArrowLeftIcon className="text-gray-400 dark:text-gray-500" />
                            </span>
                            Previous
                        </div>
                        <span
                            className={clsx(
                                "text-base",
                                "text-refine-react-light-link dark:text-refine-react-dark-link",
                                "ml-8",
                            )}
                        >
                            {previous.title}
                        </span>
                    </div>
                </Link>
            )}
            {next && (
                <Link
                    href={next.permalink}
                    className={clsx(
                        "group",
                        "flex-1",
                        "p-4",
                        "rounded-lg",
                        "border border-gray-300 dark:border-gray-600",
                        "hover:bg-gray-100 hover:dark:bg-gray-700",
                        "hover:no-underline",
                        !previous && "col-start-2",
                    )}
                >
                    <div className="flex-1 flex items-end justify-center flex-col gap-2 text-right">
                        <div
                            className={clsx(
                                "flex items-center gap-2",
                                "text-base",
                                "text-gray-800 dark:text-gray-100",
                            )}
                        >
                            Next
                            <span
                                className={clsx(
                                    "flex items-center justify-center",
                                    "w-6 h-6",
                                )}
                            >
                                <ArrowRightIcon className="text-gray-400 dark:text-gray-500" />
                            </span>
                        </div>

                        <span
                            className={clsx(
                                "text-base",
                                "text-refine-react-light-link dark:text-refine-react-dark-link",
                                "mr-8",
                            )}
                        >
                            {next.title}
                        </span>
                    </div>
                </Link>
            )}
        </div>
    );
};

import React from "react";
import { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

import { ChevronLeft, ChevronRight } from "../../components/blog/icons";
import { usePagination, DOTS } from "../../hooks/use-pagination";
import clsx from "clsx";

export default function BlogListPaginator(props) {
    const { metadata, basePath = "/blog" } = props;
    const { totalPages, page: currentPage } = metadata;

    const paginationRange = usePagination({ totalPages, currentPage });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <nav
            className={clsx(
                "blog-md:justify-end flex items-center justify-center",
            )}
            aria-label={translate({
                id: "theme.blog.paginator.navAriaLabel",
                message: "Blog list page navigation",
                description: "The ARIA label for the blog pagination",
            })}
        >
            <ul
                className="flex list-none items-center gap-1"
                style={{
                    padding: 0,
                }}
            >
                <li>
                    <Link
                        to={
                            currentPage === 1
                                ? undefined
                                : currentPage - 1 === 1
                                ? basePath
                                : `${basePath}/page/${currentPage - 1}`
                        }
                        className={clsx(
                            "text-gray-500 dark:text-gray-400",
                            "rounded",
                            "hover:no-underline",
                            "hover:no-underline",
                            {
                                "pointer-events-none opacity-20":
                                    currentPage === 1,
                            },
                        )}
                    >
                        <ChevronLeft />
                    </Link>
                </li>

                {paginationRange.map((pageNumber) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li
                                key={`page:${pageNumber}`}
                                className={clsx(
                                    "flex items-center justify-center",
                                    "text-gray-500 dark:text-gray-400",
                                    "rounded",
                                    "hover:no-underline",
                                    "no-underline",
                                    "h-[32px] w-[32px]",
                                )}
                            >
                                &#8230;
                            </li>
                        );
                    }

                    return (
                        <li key={pageNumber}>
                            <Link
                                to={
                                    pageNumber === 1
                                        ? basePath
                                        : `${basePath}/page/${pageNumber}`
                                }
                                className={clsx(
                                    "text-sm",
                                    "flex items-center justify-center",
                                    "text-gray-500 dark:text-gray-400",
                                    "rounded",
                                    "hover:no-underline",
                                    "h-[32px] w-[32px]",
                                    "no-underline",
                                    pageNumber === currentPage &&
                                        "bg-gray-100 dark:bg-gray-700",
                                )}
                            >
                                {pageNumber}
                            </Link>
                        </li>
                    );
                })}

                <li>
                    <Link
                        to={
                            currentPage === lastPage
                                ? undefined
                                : `${basePath}/page/${currentPage + 1}`
                        }
                        className={clsx(
                            "text-gray-500 dark:text-gray-400",
                            "rounded",
                            "hover:no-underline",
                            {
                                "pointer-events-none opacity-20":
                                    currentPage === lastPage,
                            },
                        )}
                    >
                        <ChevronRight />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

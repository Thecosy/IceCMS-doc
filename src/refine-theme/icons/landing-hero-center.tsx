import React from "react";

export const LandingHeroCenterSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={128}
            height={128}
            fill="none"
            {...props}
        >
            <image
                className="hidden dark:block"
                href="https://res.cloudinary.com/dxl1idlr5/image/upload/v1705216752/center-logo-end_oavdqe.png"
                x={0}
                y={0}
                width={128}
                height={128}
            />
            <image
                className="block dark:hidden"
                href="https://res.cloudinary.com/dxl1idlr5/image/upload/v1705216759/center-logo-light_pqb8hh.png"
                x={0}
                y={0}
                width={128}
                height={128}
            />
        </svg>
    </>
);

import * as React from "react";
import { SVGProps } from "react";

const SvgExamples = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className ? className : undefined}
        {...props}
        className={props.className ? props.className : undefined}
    >
        <path
            opacity="0.75"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.03438 6.10352e-05H30.9649H30.9653C31.5365 6.10352e-05 31.9997 0.463854 32 1.03444V5.03143C32 5.6023 31.5365 6.0658 30.9656 6.0658H1.03438C0.463505 6.0658 0 5.6023 0 5.03143V1.03444C0 0.463566 0.463505 6.10352e-05 1.03438 6.10352e-05ZM2.06876 3.99734H29.9305L29.9312 2.06911H2.06876V3.99734ZM1.03438 8.27501H13.1699C13.741 8.27501 14.2042 8.73881 14.2042 9.30939V15.8343C14.2042 16.4051 13.7407 16.8686 13.1699 16.8686H1.03438C0.463505 16.8686 0 16.4051 0 15.8343V9.30939C0 8.73852 0.463505 8.27501 1.03438 8.27501ZM2.06876 14.7999H12.1355V10.3438H2.06876V14.7999ZM13.1699 19.4012H1.03438C0.463505 19.4012 0 19.8642 0 20.4356V26.9605C0 27.5319 0.463505 27.9949 1.03438 27.9949H13.1699C13.7407 27.9949 14.2042 27.5319 14.2042 26.9605V20.4356C14.2042 19.8642 13.741 19.4012 13.1699 19.4012ZM12.1355 25.9259H2.06876V21.4698H12.1355V25.9259ZM17.8571 8.27501H30.9649C31.5361 8.27501 31.9993 8.73881 31.9993 9.30939V26.9596C31.9993 27.531 31.5358 27.994 30.9649 27.994H17.8571C17.2863 27.994 16.8228 27.531 16.8228 26.9596V9.30939C16.8228 8.73852 17.2863 8.27501 17.8571 8.27501ZM18.8915 25.9259H29.9305V10.3438H18.8915V25.9259Z"
            fill="url(#paint0_linear_1502_1669)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_1502_1669"
                x1="16"
                y1="6.10352e-05"
                x2="16"
                y2="27.9948"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3FDCF7" />
                <stop offset="1" stopColor="#1890FF" />
            </linearGradient>
        </defs>
    </svg>
);

export default SvgExamples;

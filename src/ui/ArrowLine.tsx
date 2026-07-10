import { forwardRef } from "react";

interface ArrowLineProps {
    className?: string;
    strokeWidth?: number;
}

const ArrowLine = forwardRef<SVGSVGElement, ArrowLineProps>(function ArrowLine({ className, strokeWidth = 0.75 }, ref) {
    return (
        <svg
            ref={ref}
            viewBox="0 40 130 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMidYMid meet"
        >
            <path d="M9.414 87L12.586 87L11 91.893Z" fill="currentColor" />
            <path data-animate="arrow" d="M121 47C121 56.6546 106.563 88.3787 77.6878 86.3103C48.8129 84.242 37.1251 51.1394 32.3125 47.691C26.0579 43.2092 11 64.9314 11 87" stroke="currentColor" strokeWidth={strokeWidth} />
        </svg>
    );
});

export default ArrowLine;
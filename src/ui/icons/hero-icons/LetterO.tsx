import { forwardRef } from "react";

interface LetterOProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const LetterO = forwardRef<SVGSVGElement, LetterOProps>(function LetterO({ className, width, height }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 66 113" xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <g transform="translate(8, 13.5) scale(0.76)">
      <path
        fill="currentColor"
        d="M33 112.5C26.2 112.5 20.3 111.25 15.3 108.75C10.4 106.15 6.6 102.45 3.9 97.65C1.3 92.75 0 87.05 0 80.55V31.95C0 25.35 1.3 19.65 3.9 14.85C6.6 10.05 10.4 6.4 15.3 3.89999C20.3 1.3 26.2 0 33 0C39.8 0 45.65 1.3 50.55 3.89999C55.55 6.4 59.35 10.05 61.95 14.85C64.65 19.65 66 25.3 66 31.8V80.55C66 87.05 64.65 92.75 61.95 97.65C59.35 102.45 55.55 106.15 50.55 108.75C45.65 111.25 39.8 112.5 33 112.5ZM33 98.1C38.5 98.1 42.65 96.6 45.45 93.6C48.35 90.5 49.8 86.15 49.8 80.55V31.95C49.8 26.25 48.35 21.9 45.45 18.9C42.65 15.9 38.5 14.4 33 14.4C27.6 14.4 23.45 15.9 20.55 18.9C17.65 21.9 16.2 26.25 16.2 31.95V80.55C16.2 86.15 17.65 90.5 20.55 93.6C23.45 96.6 27.6 98.1 33 98.1Z"
      />
      </g>
    </svg>
  );
});

export default LetterO;

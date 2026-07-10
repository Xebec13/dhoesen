import { forwardRef } from "react";

interface HeartProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Heart = forwardRef<SVGSVGElement, HeartProps>(function Heart({ className, width, height }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="-5 -1 56 46"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M3.88325 22.6332L25 43.75L46.1169 22.6332C48.6031 20.1468 50 16.7746 50 13.2583V12.6636C50 5.66969 44.3303 0 37.3366 0C33.4894 0 29.851 1.74872 27.4478 4.75269L25 7.8125L22.5522 4.75269C20.149 1.74872 16.5106 0 12.6636 0C5.66969 0 0 5.66969 0 12.6636V13.2583C0 16.7746 1.39684 20.1468 3.88325 22.6332Z"
      />
    </svg>
  );
});

export default Heart;

import { forwardRef } from "react";

interface HalfMoonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const HalfMoon = forwardRef<SVGSVGElement, HalfMoonProps>(function HalfMoon({ className, width, height }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 -5 22 45"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M11.256,17 C11.256,10.1 15.735,4.236 22,1.991 C20.243,1.361 18.353,1 16.372,1 C7.33,1 0,8.164 0,17 C0,25.837 7.33,33 16.372,33 C18.353,33 20.243,32.639 22,32.009 C15.735,29.764 11.256,23.901 11.256,17"
      />
    </svg>
  );
});

export default HalfMoon;

import { forwardRef } from "react";

interface CurlyProps {
  className?: string;
  "data-animate"?: string;
}

const Curly = forwardRef<SVGSVGElement, CurlyProps>(function Curly({ className, ...props }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="-15 -15 141 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M99.2 21.1018C105 29.4018 109.3 40.2018 110.2 51.0018V59.7018C109.7 63.7018 108.8 67.6018 107.1 71.3018C101.1 84.4018 87.7 92.9018 73.4 94.3018C60.3 95.6018 44.6 92.8017 37.3 80.5017C31.5 70.7017 28.6 56.9018 37.7 48.0018C51 35.0018 82.4001 39.1018 75.8001 62.6018C74.2001 68.1018 65.8001 65.4018 67.3001 59.9018C71.6001 44.4018 43.6 47.0018 40.9 59.9018C38.7 70.8018 47.3 82.0018 57.5 84.7018C68.1 87.4017 80.4 85.6018 89.4 79.3018C113 62.8018 98.9 18.9018 73.4 11.6018C47.9 4.40176 13.6 12.4017 4.70001 40.1017L0 28.5018C1.9 25.0018 4.29998 21.7018 7.09998 18.8018C30.6 -4.99824 78.9 -8.29824 99.2 21.1018Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Curly;

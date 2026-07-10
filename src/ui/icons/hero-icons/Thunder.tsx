import { forwardRef } from "react";

interface ThunderProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Thunder = forwardRef<SVGSVGElement, ThunderProps>(function Thunder({ className, width, height }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="-5 -3 25 42"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M11.8917 10.35H15.6187C16.1355 10.3504 16.6441 10.4789 17.099 10.7241C17.554 10.9692 17.941 11.3234 18.2254 11.7548C18.5099 12.1863 18.6829 12.6815 18.729 13.1962C18.7751 13.7109 18.6928 14.229 18.4896 14.7042L10.2396 33.9604C10.0404 34.4215 9.68852 34.7999 9.24309 35.032C8.79766 35.264 8.28589 35.3356 7.79389 35.2346C7.30189 35.1336 6.85969 34.8662 6.5417 34.4775C6.22371 34.0887 6.04934 33.6023 6.04792 33.1V18.6833L3.02083 18.5896C2.21022 18.5625 1.44187 18.2214 0.878161 17.6383C0.314453 17.0551 -0.00045023 16.2756 4.83154e-07 15.4646V3.125C4.83154e-07 2.2962 0.329241 1.50134 0.915292 0.915291C1.50134 0.32924 2.2962 0 3.125 0L8.76667 0C9.59547 0 10.3903 0.32924 10.9764 0.915291C11.5624 1.50134 11.8917 2.2962 11.8917 3.125V10.35Z"
      />
    </svg>
  );
});

export default Thunder;

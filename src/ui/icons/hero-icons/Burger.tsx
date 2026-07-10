import { forwardRef } from "react";

interface BurgerProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Burger = forwardRef<SVGSVGElement, BurgerProps>(function Burger({ className, width, height }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 52 66"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M12 11.25V2.25H48.4527V11.25H12Z"
      />
      <path
        fill="currentColor"
        d="M12 37.25V28.25H30V37.25H12Z"
      />
      <path
        fill="currentColor"
        d="M48.4527 63.25V54.25H12V63.25H48.4527Z"
      />
    </svg>
  );
});

export default Burger;

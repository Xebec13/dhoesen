/**
 * Logo — brand mark "D." with hover-triggered color transition.
 *
 * Renders a "D" that shifts to mauvelous-300 on group hover, followed by a
 * mauvelous-300 dot. The dot can optionally carry `data-animate="logo-dot"`
 * for external GSAP control (fade out when a nav section is active).
 *
 * Props: size (sm/md/lg), animateDot (adds data-animate attribute),
 * className (custom classes).
 */

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animateDot?: boolean;
}

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export default function Logo({ className, size = "md", animateDot = false }: LogoProps) {
  return (
    <span className={`block h-fit text-inherit font-medium leading-none group ${sizeClasses[size]} ${className ?? ""}`}>
      <span className="group-hover:text-mauvelous-300 transition-colors ease-in-out duration-300">D</span>
      <span
        className="ml-[-0.25ch] text-mauvelous-300"
        {...(animateDot ? { "data-animate": "logo-dot" } : {})}
      >
        .
      </span>
    </span>
  );
} 
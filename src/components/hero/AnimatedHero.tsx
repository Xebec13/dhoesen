import { useRef, type ReactNode } from "react";

interface AnimatedHeroProps {
  children: ReactNode;
}

export default function AnimatedHero({ children }: AnimatedHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref}>{children}</div>;
}

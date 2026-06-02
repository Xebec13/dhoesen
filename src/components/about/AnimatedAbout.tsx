import { useRef, type ReactNode } from "react";

interface AnimatedAboutProps {
  children: ReactNode;
}

export default function AnimatedAbout({ children }: AnimatedAboutProps) {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref}>{children}</div>;
}

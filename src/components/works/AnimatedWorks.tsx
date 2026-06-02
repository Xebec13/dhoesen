import { useRef, type ReactNode } from "react";

interface AnimatedWorksProps {
  children: ReactNode;
}

export default function AnimatedWorks({ children }: AnimatedWorksProps) {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref}>{children}</div>;
}

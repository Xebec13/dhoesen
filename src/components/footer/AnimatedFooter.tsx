import { useRef, type ReactNode } from "react";

interface AnimatedFooterProps {
  children: ReactNode;
}

export default function AnimatedFooter({ children }: AnimatedFooterProps) {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref}>{children}</div>;
}

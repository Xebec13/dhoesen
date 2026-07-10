import { type ReactNode } from "react";

interface InkRevealProps {
  children: ReactNode;
  className?: string;
}

export default function InkReveal({ children, className }: InkRevealProps) {
  return <div className={className}>{children}</div>;
}

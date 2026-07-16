import { type ReactNode, type RefObject } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

interface AnimatedAboutProps {
  children: ReactNode;
  aboutRef: RefObject<HTMLDivElement | null>;
}

export default function AnimatedAbout({ children, aboutRef }: AnimatedAboutProps) {
  useTextReveal(aboutRef, { variant: "chars", selector: "[data-animate='reveal-chars']", duration:1 });
  useTextReveal(aboutRef, { variant: "word-chars", selector: "[data-animate='reveal-words']", duration: 0.15, stagger: 0.020, delay: 0.5 });

  return <>{children}</>;
}

import { type ReactNode, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface AnimatedCurlyBorderProps {
  children: ReactNode;
  containerRef: RefObject<HTMLDivElement | null>;
}

const ANIMATED_SELECTORS = {
  cornerTR: "[data-animate='curly-corner-tr']",
  cornerBL: "[data-animate='curly-corner-bl']",
  top: "[data-animate='curly-border-top']",
  right: "[data-animate='curly-border-right']",
  bottom: "[data-animate='curly-border-bottom']",
  left: "[data-animate='curly-border-left']",
} as const;

export default function AnimatedCurlyBorder({ children, containerRef }: AnimatedCurlyBorderProps) {
  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const tr = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.cornerTR);
    const bl = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.cornerBL);
    const top = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.top);
    const right = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.right);
    const bottom = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.bottom);
    const left = container.querySelector<HTMLElement>(ANIMATED_SELECTORS.left);

    if (!tr || !bl) return;

    if (top) gsap.set(top, { scaleX: 0 });
    if (right) gsap.set(right, { scaleY: 0 });
    if (bottom) gsap.set(bottom, { scaleX: 0 });
    if (left) gsap.set(left, { scaleY: 0 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });

    tl.add("start", 0);

    tl.set(tr, { clipPath: "inset(0% 0% 100% 100%)" }, "start");
    tl.to(tr, { clipPath: "inset(0% 0% 0% 0%)", duration: 2 }, "start");

    tl.set(bl, { clipPath: "inset(100% 100% 0% 0%)" }, "start");
    tl.to(bl, { clipPath: "inset(0% 0% 0% 0%)", duration: 2 }, "start");

    tl.to([top, right], { scaleX: 1, scaleY: 1, duration: 1.5 }, "start+=0.4");
    tl.to([bottom, left], { scaleX: 1, scaleY: 1, duration: 1.5 }, "start+=0.4");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tl.play();
      },
      { threshold: 0 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tl.revert();
    };
  }, { scope: containerRef });

  return <>{children}</>;
}

import { type RefObject } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

interface UseTextFlipHoverOptions {
  duration?: number;
  stagger?: number;
}

export function useTextFlipHover(
  targetRef: RefObject<HTMLElement | null>,
  options?: UseTextFlipHoverOptions,
) {
  const { duration = 0.4, stagger = 0.02 } = options ?? {};

  useGSAP(() => {
    const el = targetRef.current;
    if (!el) return;

    const clone = el.cloneNode(true) as HTMLElement;
    el.parentNode?.insertBefore(clone, el.nextSibling);
    gsap.set(clone, { yPercent: -100 });

    const originalSplit = new SplitText(el, { type: "chars" });
    const cloneSplit = new SplitText(clone, { type: "chars" });

    const origChars = originalSplit.chars as HTMLElement[];
    const cloneChars = cloneSplit.chars as HTMLElement[];

    gsap.set(cloneChars, {
      rotationX: -90,
      opacity: 0,
      transformOrigin: "50% 50% -50",
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(origChars, { duration, rotationX: 90, transformOrigin: "50% 50% -50", stagger });
    tl.to(origChars, { duration, opacity: 0, stagger, ease: "power4.in" }, 0);
    tl.to(cloneChars, { duration: 0.05, opacity: 1, stagger }, 0.001);
    tl.to(cloneChars, { duration, rotationX: 0, stagger }, 0);

    function flipForward() { tl.play(); }
    function flipBackward() { tl.reverse(); }

    el.addEventListener("mouseenter", flipForward);
    el.addEventListener("mouseleave", flipBackward);

    return () => {
      el.removeEventListener("mouseenter", flipForward);
      el.removeEventListener("mouseleave", flipBackward);
      clone.remove();
      originalSplit.revert();
      cloneSplit.revert();
    };
  }, { scope: targetRef, dependencies: [duration, stagger] });
}

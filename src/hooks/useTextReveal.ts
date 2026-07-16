import { type RefObject } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

/**
 * useTextReveal — animates text elements into view on scroll.
 *
 * Uses GSAP SplitText to split target elements into characters (variant
 * `"chars"`) or first into words then characters (`"word-chars"`).
 *
 * Initial state: each character is offset upward (yPercent: -100), invisible
 * (opacity: 0), and rotated backward (rotationX: -200) for a 3D entrance.
 *
 * Animation: a GSAP timeline plays once when the container enters the
 * viewport (IntersectionObserver, threshold: 0). Each character transitions
 * to yPercent: 0, opacity: 1, rotationX: 0 with staggered delay.
 *
 * Variant differences:
 * - `"chars"`: all characters animate in parallel with stagger.
 * - `"word-chars"`: characters animate word-by-word — each word's chars
 *   finish before the next word starts (sequential word stagger).
 *
 * Cleans up on unmount: disconnects observer, reverts timeline, reverts
 * all SplitText instances.
 */
export interface UseTextRevealOptions {
  variant: "chars" | "word-chars";
  selector: string;
  yPercent?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

export function useTextReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: UseTextRevealOptions,
) {
  const {
    variant,
    selector,
    yPercent = -100,
    opacity = 0,
    duration = 0.5,
    stagger = 0.03,
    delay = 0,
  } = options;

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    const splits: SplitText[] = [];
    const allItems: HTMLElement[] = [];
    const wordCharItems: HTMLElement[][] = [];

    Array.from(targets).forEach((el) => {
      if (variant === "word-chars") {
        const wordSplit = new SplitText(el, { type: "words" });
        const words = wordSplit.words as HTMLElement[];
        gsap.set(words, { whiteSpace: "nowrap" });
        const charSplits = words.map((w) => new SplitText(w, { type: "chars" }));
        splits.push(wordSplit, ...charSplits);
        charSplits.forEach((s) => {
          const chars = s.chars as HTMLElement[];
          allItems.push(...chars);
          wordCharItems.push(chars);
        });
      } else {
        const split = new SplitText(el, { type: "chars" });
        splits.push(split);
        const items = split.chars as HTMLElement[];
        allItems.push(...items);
      }
    });

    gsap.set(allItems, {
      display: "inline-block",
      willChange: "transform",
      yPercent,
      opacity,
      rotationX: -200,
      transformPerspective: 800,
      transformOrigin: "0% 50%",
    });

    const tl = gsap.timeline({ paused: true, delay });

    if (variant === "word-chars") {
      let wordStart = 0;
      wordCharItems.forEach((chars) => {
        tl.to(chars, {
          yPercent: 0,
          opacity: 1,
          rotationX: 0,
          duration,
          stagger,
          ease: "power3.out",
        }, wordStart);
        wordStart += stagger * chars.length;
      });
    } else {
      splits.forEach((split) => {
        const items = split.chars as HTMLElement[];
        tl.to(items, { yPercent: 0, opacity: 1, rotationX: 0, duration, stagger, ease: "power3.out" }, 0);
      });
    }

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
      splits.forEach((s) => s.revert());
    };
  }, { scope: containerRef, dependencies: [selector, variant, yPercent, opacity, duration, stagger, delay] });
}

import { type ReactNode, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * AnimatedHero — GSAP animation driver for the Hero section.
 *
 * Wraps children (Hero's JSX) and runs all animations inside `useGSAP`.
 * Uses `containerRef` (the h1 element) as the scoping root — all queries
 * are limited to this ref, never leaking outside.
 *
 * Three animation layers:
 *
 * 1. **Initial state** — `gsap.set` ensures letters are visible (opacity: 1)
 *    and icons are hidden (opacity: 0) before the timeline starts.
 *
 * 2. **Crossfade loops** (`createPairTimeline`) — targets `data-animate="pair"`
 *    elements, splits them into two staggered groups (even / odd indices).
 *    Each timeline toggles opacity between `data-animate="letter"` and
 *    `data-animate="icon"` children in a looping yoyo: letter fades out,
 *    icon fades in, then reverses after a pause.
 *
 * 3. **MorphSVG on letter O** (`setupLetterO`) — locates `data-animate="letterO"`,
 *    finds the nested SVG `<path>`, and morphs it to `STRETCHED_O_PATH`
 *    (a stretched oval) while adjusting the SVG viewBox. Loop with yoyo.
 *
 * Follows the project's `data-animate` convention — never targets CSS classes
 * or HTML tags. Allowed attribute values: `"pair"`, `"letter"`, `"icon"`, `"letterO"`.
 */
const STRETCHED_O_PATH = "M30 112.354C23.2 112.354 20.3 111.189 15.3 108.689C10.4 106.089 6.6 102.389 3.9 97.589C1.3 92.689 0 86.989 0 80.489V31.889C0 25.289 1.3 19.589 3.9 14.789C6.6 9.98898 10.4 6.33898 15.3 3.83898C20.3 1.23898 23.2 0.0264044 30 0.0264044C31.0214 0.0264044 361.021 -0.0327067 362 0.0259579C367.536 0.357841 372.386 1.62953 376.55 3.83898C381.55 6.33898 385.35 9.98898 387.95 14.789C390.65 19.589 392 25.239 392 31.739C392 38.239 392 80.489 392 80.489C392 86.989 390.65 92.689 387.95 97.589C385.35 102.389 381.55 106.089 376.55 108.689C372.386 110.813 367.536 112.035 362 112.354C361.021 112.411 31.0214 112.354 30 112.354ZM30 97.8753C31.0491 97.8753 361.049 97.9844 362 97.8753C366.034 97.4122 369.184 95.9667 371.45 93.539C374.35 90.439 375.8 86.089 375.8 80.489V31.889C375.8 26.189 374.35 21.839 371.45 18.839C369.184 16.4112 366.034 14.9658 362 14.5027C361.049 14.3936 31.0491 14.5027 30 14.5027C24.6 14.5027 23.45 15.839 20.55 18.839C17.65 21.839 16.2 26.189 16.2 31.889V80.489C16.2 86.089 17.65 90.439 20.55 93.539C23.45 96.539 24.6 97.8753 30 97.8753Z";

interface AnimatedHeroProps {
  children: ReactNode;
  containerRef: RefObject<HTMLHeadingElement | null>;
}

function createPairTimeline(pairs: Element[], delay: number) {
  const letters = pairs.map(p => p.querySelector("[data-animate='letter']")).filter(Boolean);
  const icons = pairs.map(p => p.querySelector("[data-animate='icon']")).filter(Boolean);
  if (!letters.length || !icons.length) return;

  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.7, delay });
  tl.to(letters, { opacity: 0, duration: 0.3 })
    .to(icons, { opacity: 1, duration: 0.3 }, "<");
}

function setupLetterO(container: Element) {
  const letterOContainer = container.querySelector("[data-animate='letterO']");
  if (!letterOContainer) return;

  const svg = letterOContainer.querySelector("svg");
  if (!svg) return;

  svg.setAttribute("overflow", "visible");
  const path = svg.querySelector("path");
  if (!path) return;

  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.7, delay: 1 });
  tl.to(path, { morphSVG: STRETCHED_O_PATH, duration: 1.2, ease: "power2.inOut" });
  tl.to(svg, { attr: { viewBox: "0 0 315 113" }, duration: 1.2, ease: "power2.inOut" }, "<");
}

export default function AnimatedHero({ children, containerRef }: AnimatedHeroProps) {
  useGSAP(() => {
    const ctx = containerRef.current;
    if (!ctx) return;

    const allLetters = ctx.querySelectorAll("[data-animate='letter']");
    const allIcons = ctx.querySelectorAll("[data-animate='icon']");
    if (!allLetters.length || !allIcons.length) return;

    gsap.set(allLetters, { opacity: 1 });
    gsap.set(allIcons, { opacity: 0 });

    const pairs = [...ctx.querySelectorAll("[data-animate='pair']")];
    createPairTimeline(pairs.filter((_, i) => i % 2 === 0), 1);
    createPairTimeline(pairs.filter((_, i) => i % 2 === 1), 2);

    setupLetterO(ctx);
  });

  return <>{children}</>;
}
import { type ReactNode, type RefObject } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

interface AnimatedAboutProps {
  children: ReactNode;
  contentRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLDivElement | null>;
}

export default function AnimatedAbout({ children, contentRef, triggerRef }: AnimatedAboutProps) {
  useGSAP(() => {
    if (!contentRef.current || !triggerRef.current) return;

    const h1 = contentRef.current.querySelector("[data-animate='name']");
    const h2 = contentRef.current.querySelector("[data-animate='role']");
    const p = contentRef.current.querySelector("[data-animate='description']");
    if (!h1 || !h2 || !p) return;

    const splitName = new SplitText(h1, { type: "chars", tag: "span" });
    const splitRole = new SplitText(h2, { type: "chars", tag: "span" });
    const splitDesc = new SplitText(p, { type: "chars", tag: "span" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(splitName.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 }, 0)
      .fromTo(splitRole.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 }, 0.25)
      .fromTo(splitDesc.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 }, 0.5);

    return () => {
      splitName.revert();
      splitRole.revert();
      splitDesc.revert();
    };
  });

  return <>{children}</>;
}

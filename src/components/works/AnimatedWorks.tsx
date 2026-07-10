import { type ReactNode, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface AnimatedWorksProps {
  children: ReactNode;
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function AnimatedWorks({ children, containerRef }: AnimatedWorksProps) {
  useGSAP(() => {
    if (!containerRef.current) return;

    const title = containerRef.current.querySelector("[data-animate='title']");
    if (!title) return;

    const mm = gsap.matchMedia();
    const st = {
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    };

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(title, { fontSize: "15rem" }, { fontSize: "3.75rem", scrollTrigger: st });
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.fromTo(title, { fontSize: "24rem" }, { fontSize: "6rem", scrollTrigger: st });
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(title, { fontSize: "32rem" }, { fontSize: "8rem", scrollTrigger: st });
    });
  });

  return <>{children}</>;
}

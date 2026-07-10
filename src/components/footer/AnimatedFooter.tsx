import { type ReactNode, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface AnimatedFooterProps {
  children: ReactNode;
  arrowSectionRef: RefObject<HTMLDivElement | null>;
  arrowSvgRef: RefObject<SVGSVGElement | null>;
}

export default function AnimatedFooter({ children, arrowSectionRef, arrowSvgRef }: AnimatedFooterProps) {
  useGSAP(() => {
    if (!arrowSectionRef.current || !arrowSvgRef.current) return;

    const path = arrowSvgRef.current.querySelector("path[data-animate='arrow']") as SVGPathElement | null;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.25,
      ease: "sine.in",
      scrollTrigger: {

        trigger: arrowSectionRef.current,
        start: "top top",
        once: true,
      },
    });
  });

  return <>{children}</>;
}

import { useRef, type ReactNode } from "react";
import Curly from "@/ui/border/Curly";
import AnimatedCurlyBorder from "@/ui/border/AnimatedCurlyBorder";

interface CurlyBorderProps {
  className?: string;
  children?: ReactNode;
}

interface BorderSpan {
  name: string;
  className: string;
}

interface CornerCurly {
  name: string;
  pos: string;
  className: string;
}

const BORDER_T = "h-2.5 md:h-4";
const BORDER_L = "w-2.5 md:w-4";
const BORDER_H = "border-t-3 border-b-3";
const BORDER_V = "border-r-3 border-l-3";

const CURLY_COMMON = "size-14 md:size-16 lg:size-20 text-current";

const BORDER_SPANS: BorderSpan[] = [
  { name: "curly-border-top", className: `absolute top-0 right-0 ${BORDER_T} w-full ${BORDER_H} origin-right` },
  { name: "curly-border-right", className: `absolute top-0 right-0 h-full ${BORDER_L} ${BORDER_V} origin-top` },
  { name: "curly-border-bottom", className: `absolute bottom-0 left-0 ${BORDER_T} w-full ${BORDER_H} origin-left` },
  { name: "curly-border-left", className: `absolute bottom-0 left-0 h-full ${BORDER_L} ${BORDER_V} origin-bottom` },
];

const CORNER_CURLIES: CornerCurly[] = [
  { name: "curly-corner-tr", pos: "top-0 right-0", className: `${CURLY_COMMON} translate-x-1/3 -translate-y-1/3` },
  { name: "curly-corner-bl", pos: "bottom-0 left-0", className: `${CURLY_COMMON} -translate-x-1/3 translate-y-1/3 rotate-y-180 rotate-x-180` },
];


export default function CurlyBorder({ className, children }: CurlyBorderProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <AnimatedCurlyBorder containerRef={ref}>
      <div ref={ref} className={`relative  ${className ?? ""}`}>
        {children}

        {BORDER_SPANS.map((span) => (
          <span key={span.name} data-animate={span.name} className={`bg-shark-900/10 mix-blend-darken border-current ${span.className}`} />
        ))}

        {CORNER_CURLIES.map((curly) => (
          <div key={curly.name} className={`absolute ${curly.pos}  overflow-visible pointer-events-none`}>
            <Curly data-animate={curly.name} className={`relative ${curly.className}`} />
          </div>
        ))}
      </div>
    </AnimatedCurlyBorder>
  );
}

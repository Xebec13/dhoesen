import { useRef } from "react";
import AnimatedWorks from "@/components/works/AnimatedWorks";
import { worksData } from "@/components/works/works-data";

/**
 * Renders the works section in two blocks: a large centered accent title spanning the viewport, 
 * followed by a vertically stacked list of project entries separated by horizontal rules.
 * Each item reads as a distinct row with a full-width divider.
 */
export default function Works() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="works">
      <AnimatedWorks containerRef={contentRef}>
        <div ref={contentRef} className="relative min-h-screen md:min-h-[200vh]">
          <div className="min-h-[50vh] md:min-h-screen sticky top-0 text-center grid place-items-center overflow-x-hidden">
            <p data-animate="title" className="font-cormorant font-semibold italic uppercase whitespace-nowrap overflow-x-hidden">{worksData.title}</p>
          </div>
        </div>
        <div className="relative border min-h-screen md:min-h-[200vh]">
          <div className="sticky top-0 min-h-[50vh] md:min-h-screen ">
            <ul className="flex flex-col justify-start items-stretch gap-y-3 px-4 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8 text-4xl md:text-6xl lg:text-9xl">
              {worksData.items.flatMap((item, i) => [
                <li key={`item-${i}`} className="p-2.5 md:p-3.5 lg:p-5 font-semibold">
                  {item.title}
                </li>,
                <div key={`sep-${i}`} className="line h-1 w-full bg-current" />,
              ])}
            </ul>
          </div>
        </div>
      </AnimatedWorks>
    </section>
  );
}

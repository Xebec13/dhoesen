import { useRef } from "react";
import AnimatedAbout from "@/components/about/AnimatedAbout";
import { aboutData } from "@/components/about/about-data";
import CurlyBorder from "@/ui/border/CurlyBorder";

/**
 * About — personal introduction section.
 *
 * Layout: single column on mobile, 2-column grid on md+. The section spans
 * `min-h-screen md:min-h-[200vh]` with a `md:sticky top-0` inner wrapper,
 * creating a parallax-like scroll effect.
 *
 * Left column: portrait image (aspect-2/3 mobile, aspect-9/16 desktop) with
 * grayscale filter, sourced from aboutData.imgSrc.
 *
 * Right column: name and role (`data-animate="reveal-chars"`) followed by
 * description paragraphs (`data-animate="reveal-words"`). Both are wrapped
 * in overflow-hidden containers for the reveal animation.
 *
 * Text reveal animations are delegated to AnimatedAbout
 * (src/components/about/AnimatedAbout.tsx) which calls the `useTextReveal`
 * hook (src/lib/useTextReveal.ts) — characters slide up and rotate into
 * place via IntersectionObserver trigger.
 */
export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <section id="about">
      <AnimatedAbout aboutRef={aboutRef}>
        <div className="relative min-h-screen md:min-h-[200vh] px-4 md:px-6 lg:px-8">

          <div className="relative md:sticky top-0">
            <div className="flex flex-col justify-center items-start md:grid md:grid-cols-2 md:items-stretch min-h-[75vh] md:min-h-screen gap-4">

              <div className="md:self-center md:mx-auto w-full min-w-3xs max-w-1/2 md:max-w-3/4 lg:max-w-1/2 md:min-h-[25vh] md:max-h-[50vh] lg:max-h-[75vh]">
                <CurlyBorder className="aspect-2/3 md:aspect-9/16 lg:aspect-9/16 ">
                  <img className="size-full object-cover object-center grayscale-45 bg-black/10" src={aboutData.imgSrc} alt={aboutData.name} loading="lazy" />
                </CurlyBorder>
              </div>

              <div ref={aboutRef} className="md:self-center flex flex-col justify-center h-full md:min-h-[25vh] md:max-h-[50vh] lg:max-h-[75vh] min-w-3xs mt-3 md:ml-auto gap-3">

                <h3 className="flex flex-col md:my-auto max-w-fit leading-tight tracking-wide whitespace-nowrap uppercase">
                  <span className="overflow-hidden">
                    <span data-animate="reveal-chars" className="text-xl font-medium">{aboutData.name}</span>
                  </span>
                  <span className="overflow-hidden">
                    <span data-animate="reveal-chars" className="text-lg font-medium text-shark-700">{aboutData.role}</span>
                  </span>
                </h3>
                <div className="md:mb-auto max-w-[95%] md:max-w-[90%] lg:max-w-[85%]">
                  {aboutData.description.map((line) => (
                    <div className="flex flex-col overflow-hidden gap-1" key={line}>
                      <p data-animate="reveal-words" className="text-sm md:text-base text-left text-pretty tracking-wide leading-snug">{line}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </AnimatedAbout>
    </section>
  );
}

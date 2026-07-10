import { useRef } from "react";
import AnimatedAbout from "@/components/about/AnimatedAbout";
import { aboutData } from "@/components/about/about-data";

/**
 * Renders the about section top-to-bottom: a portrait image, then name and role alongside a description paragraph, followed by a visual spacer.
 * The text reflows from stacked to side-by-side on wider screens — the image occupies the full viewport width on mobile and half on desktop.
 */
export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about">
      <AnimatedAbout contentRef={contentRef} triggerRef={triggerRef}>
        <div ref={triggerRef} className="relative min-h-[200vh] px-4 md:px-6 lg:px-8">

          <div className="sticky top-0">
            <div className="border min-h-screen flex flex-col justify-center items-start  md:grid md:grid-cols-2 md:place-items-center gap-3">
              
              <div className="border md:mb-[15vh] max-w-2/3 aspect-2/3 md:aspect-9/16 lg:aspect-2/3 md:min-h-[25vh] md:max-h-[50vh]">
                <img className="size-full object-cover object-center grayscale-50 bg-black/30" src={aboutData.imgSrc} alt={aboutData.name} loading="lazy" />
              </div>

              <div ref={contentRef} className="border md:mt-[25vh] max-w-full lg:max-w-3/4 flex flex-col gap-3">
                <div className="text-lg md:text-2xl max-w-fit leading-tight">
                  <h1 data-animate="name" className="uppercase font-semibold tracking-wide whitespace-nowrap">{aboutData.name}</h1>
                  <h2 data-animate="role" className="uppercase font-medium tracking-wide whitespace-nowrap text-shark-700">{aboutData.role}</h2>
                </div>
                <div className="text-lg md:text-2xl">
                  <p data-animate="description" className="font-light text-left text-pretty tracking-wide leading-snug">{aboutData.description}</p>
                </div>
              </div>


            </div>

          </div>
        </div>
      </AnimatedAbout>
    </section>
  );
}

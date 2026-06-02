import AnimatedAbout from "@/components/about/AnimatedAbout";
import { aboutData } from "@/components/about/about-data";

/**
 * Renders the about section top-to-bottom: a portrait image, then name and role alongside a description paragraph, followed by a visual spacer.
 * The text reflows from stacked to side-by-side on wider screens — the image occupies the full viewport width on mobile and half on desktop.
 */
export default function About() {
  return (
    <AnimatedAbout>
      <section className="min-h-screen gap-3.5 p-5 md:p-6 lg:p-8">
        <div className="size-full aspect-4/3 min-h-[25vh] max-h-[50vh] mx-auto">
          <img className="size-full object-contain object-center" src={aboutData.imgSrc} alt={aboutData.name} loading="lazy" />
        </div>

        <div className="flex flex-col justify-between mt-2.5 gap-2.5">
          <div className="text-lg md:text-2xl md:w-1/2 md:mx-auto">
            <h1 className="uppercase font-bold tracking-wide whitespace-nowrap">{aboutData.name}</h1>
            <h2 className="uppercase font-medium tracking-wide whitespace-nowrap">{aboutData.role}</h2>
          </div>
          <div className="text-lg md:text-2xl md:mx-auto md:w-1/2">
            <p className="font-light tracking-wide">{aboutData.description}</p>
          </div>
        </div>
      </section>
    </AnimatedAbout>
  );
}

import PrimaryTitle from "@/assets/vectors/PrimaryTitle";
import SecondaryTitle from "@/assets/vectors/SecondaryTitle";
import AnimatedHero from "@/components/hero/AnimatedHero";
import { heroData } from "@/components/hero/hero-data";

/**
 * Renders the hero section as the first viewport entry point.
 * Reads top-to-bottom: an SVG primary title, an italic subtitle, an image placeholder (targeted for a PixiJS canvas), a keyword list, and an SVG secondary title aligned right.
 * A decorative spacer block separates it from the next section.
 */
export default function Hero() {
  return (
    <AnimatedHero>
      <section className="min-h-screen max-h-screen flex flex-col gap-y-3.5 p-5 md:p-6 lg:p-8">
        <div className="flex flex-none flex-col gap-1.5">
          <div className="w-full">
            <PrimaryTitle className="w-full" />
          </div>
          <p className="font-bodoni font-light italic text-2xl text-center md:text-3xl lg:text-4xl">{heroData.subtitle}</p>
        </div>

        <div className="relative flex-1 min-h-0 max-w-1/2 border">
          <img className="absolute inset-0 size-full object-center object-cover" src={heroData.imgSrc} alt="hero" loading="eager" />
        </div>

        <div className="flex flex-col md:flex-row gap-2.5">
          <div className="flex justify-start items-end md:max-w-1/4">
            <h1 className="flex justify-between flex-wrap gap-1.5 text-2xl md:text-3xl lg:text-4xl">
              {heroData.keywords.map((word, i) => (
                <span className="leading-none uppercase" key={i}>{word}</span>
              ))}
            </h1>
          </div>
          <div className="ml-auto mt-auto w-full max-w-1/2">
            <SecondaryTitle className="w-full" />
          </div>
        </div>
      </section>
      <div className="min-h-[50vh] border bg-gray-300" />
    </AnimatedHero>
  );
}

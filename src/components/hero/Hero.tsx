import { useRef } from "react";
import AnimatedHero from "@/components/hero/AnimatedHero";
import { heroData } from "@/components/hero/hero-data";
import Icon from "@/ui/icons/Icons";

/**
 * Hero — page header section.
 *
 * Layout: single column on mobile, 2-column grid on md+.
 * The left column is an h1 spanning 5 grid rows via `grid-rows-subgrid`,
 * containing 5 words from heroData.title as individual <span> elements.
 * The right column holds leadTitle and subtitle in relative --> absolute positioning.
 *
 * Each word contains animated letter–icon pairs. A letter marked
 * `data-animate="letter"` and its adjacent icon (`data-animate="icon"`)
 * sit inside a `data-animate="pair"` wrapper — the target for a crossfade
 * animation (letter fades out, icon fades in, looping with yoyo).
 *
 * The last word ("strony dla firm.") uses `data-animate="letterO"` to
 * trigger a morphSVG animation on the SVG path (letter O → stretched oval).
 *
 * All animations are driven by AnimatedHero (src/components/hero/AnimatedHero.tsx):
 *   - queries elements by `data-animate` attributes only (never CSS classes)
 *   - sets initial state (opacity: 1 on letters, 0 on icons)
 *   - creates two staggered crossfade loops (every other pair)
 *   - runs morphSVG on letterO (repeat: -1, yoyo: true)
 *
 * `h1Ref` is passed as `containerRef` to AnimatedHero, scoping all queries
 * to this heading. The component is purely presentational — zero animation logic.
 * `handleCopy` intercepts copy events on the h1 and replaces the clipboard
 * content with the full title as plain text (heroData.title joined by spaces).
 */
export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const handleCopy = (e: React.ClipboardEvent<HTMLHeadingElement>) => {
    e.clipboardData.setData("text/plain", heroData.title.join(" "));
    e.preventDefault();
  };

  return (
    <section id="hero">
      <AnimatedHero containerRef={h1Ref}>
        <div className="grid place-items-center min-h-[75vh] md:min-h-screen pt-[12.5vh] px-4 md:px-6 lg:px-8 text-inherit overflow-x-hidden">

          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto] w-full gap-x-0 gap-y-3 md:gap-x-4 md:gap-y-0">

            <h1 ref={h1Ref} aria-label={heroData.title.join(" ")} onCopy={handleCopy} className="min-w-0 grid grid-rows-5 md:grid-rows-subgrid md:col-span-1 md:row-span-5 max-w-full text-[clamp(1.25rem,0.5rem+7vw,7.25rem)] leading-none uppercase font-semibold whitespace-nowrap">

              {/* cześć */}
              <span >
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 select-none" aria-hidden="true"><Icon name="halfMoon" className="size-full" /></span>
                  <span data-animate="letter">{heroData.title[0].charAt(0)}</span>
                </span>
                {heroData.title[0].slice(1)}
              </span>

              {/* projektuje */}
              <span >
                <span>{heroData.title[1].slice(0, 2)}</span>
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 scale-115 select-none" aria-hidden="true"><Icon name="heart" className="size-full" /></span>
                  <span data-animate="letter">{heroData.title[1].charAt(2)}</span>
                </span>
                <span>{heroData.title[1].slice(3, 7)}</span>
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 scale-70 border-2 md:border-10 border-current rounded-xs select-none" aria-hidden="true" />
                  <span data-animate="letter">{heroData.title[1].charAt(7)}</span>
                </span>
                <span>{heroData.title[1].slice(8)}</span>
              </span>

              {/* interaktywne */}
              <span >
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 scale-85 select-none" aria-hidden="true"><Icon name="thunder" className="w-full h-full" /></span>
                  <span data-animate="letter">{heroData.title[2].charAt(0)}</span>
                </span>
                {heroData.title[2].slice(1, 11)}
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 select-none" aria-hidden="true">
                    <Icon name="burger" className="size-full" />
                  </span>
                  <span data-animate="letter">{heroData.title[2].charAt(11)}</span>
                </span>
              </span>

              {/* minimalistyczne */}
              <span>
                {heroData.title[3].slice(0, 4)}
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 scale-200 select-none" aria-hidden="true"><Icon name="ace" className="size-full" /></span>
                  <span data-animate="letter">{heroData.title[3].charAt(4)}</span>
                </span>
                {heroData.title[3].slice(5, 10)}
                <span data-animate="pair" className="relative inline-block">
                  <span data-animate="icon" className="absolute inset-0 scale-85 select-none" aria-hidden="true"><Icon name="hand" className="size-full" /></span>
                  <span data-animate="letter">{heroData.title[3].charAt(10)}</span>
                </span>
                {heroData.title[3].slice(11)}
              </span>

              {/* strony dla firm. */}
              <span className="overflow-hidden md:overflow-visible ">
                {heroData.title[4].slice(0, 3)}
                <span data-animate="letterO" className="relative inline-block align-bottom">
                  <span className="sr-only">{heroData.title[4].charAt(3)}</span>
                  <span aria-hidden="true" className="select-none ">
                    <Icon name="letterO" className="w-auto h-[1em] overflow-x-hidden" />
                  </span>
                </span>
                {heroData.title[4].slice(4, -1)}<span data-animate="pair" className="relative inline-block ml-[-0.3ch]">
                  <span data-animate="icon" className="absolute inset-0 flex items-center justify-center select-none" aria-hidden="true">
                    <Icon name="bomb" className="w-auto h-[1em]" />
                  </span>
                  <span data-animate="letter" className="text-mauvelous-300">{heroData.title[4].slice(-1)}</span>
                </span>
              </span>
            </h1>
            
            {/* second column */}
            <div className="relative md:col-start-2 md:row-start-2 ">
              <div className="absolute inset-0 flex flex-col md:flex-row w-fit h-fit gap-3 uppercase text-sm ">
                <p className="flex whitespace-nowrap">{heroData.leadTitle}</p>
                <h2 className="flex flex-wrap md:justify-between max-w-2/3 md:max-w-1/2 lg:max-w-1/2 md:ml-auto lg:mx-auto gap-y-1 gap-x-2 md:gap-x-4 md:gap-y-2">
                  {heroData.subtitle.map((subtitle, index) => (
                    <span key={index}>{subtitle}</span>
                  ))}
                </h2>
              </div>
            </div>
          </div>

        </div>
      </AnimatedHero>
    </section>
  );
}

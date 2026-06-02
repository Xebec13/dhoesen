import AnimatedWorks from "@/components/works/AnimatedWorks";
import { worksData } from "@/components/works/works-data";

/**
 * Renders the works section in two blocks: a large centered accent title spanning the viewport, followed by a vertically stacked list of project entries separated by horizontal rules.
 * Each item reads as a distinct row with a full-width divider.
 */
export default function Works() {
  return (
    <AnimatedWorks>
      <section className="min-h-screen">
        <div className="min-h-screen text-center border-3 border-orange-300">
          <p className="text-6xl md:text-8xl font-bold uppercase">{worksData.title}</p>
        </div>
        <ul className="min-h-[50vh] md:min-h-screen flex flex-col justify-start items-stretch gap-y-3.5 p-5 md:p-6 lg:p-8 text-4xl md:text-6xl lg:text-8xl">
          {worksData.items.flatMap((item, i) => [
            <li key={`item-${i}`} className="p-2.5 md:p-3.5 lg:p-5 font-semibold">
              {item.title}
            </li>,
            <div key={`sep-${i}`} className="line h-1 w-full bg-current" />,
          ])}
        </ul>
      </section>
    </AnimatedWorks>
  );
}

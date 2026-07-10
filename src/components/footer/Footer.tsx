import { useRef } from "react";
import ArrowLine from "@/ui/ArrowLine";
import AnimatedFooter from "@/components/footer/AnimatedFooter";
import { footerData } from "@/components/footer/footer-data";

export default function Footer() {
  const arrowSectionRef = useRef<HTMLDivElement>(null);
  const arrowSvgRef = useRef<SVGSVGElement>(null);

  return (
    <footer id="footer" className="min-h-[50vh] md:min-h-screen flex flex-col">
      <AnimatedFooter arrowSectionRef={arrowSectionRef} arrowSvgRef={arrowSvgRef}>
        <div ref={arrowSectionRef} className="flex-1 px-4 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8 text-right">
          <p className="size-full ml-auto md:max-w-3/4 text-2xl md:text-6xl lg:text-7xl font-medium font-cormorant">{footerData.contactPrompt}</p>
          <div className="mx-auto size-full  opacity-90">
            <ArrowLine ref={arrowSvgRef} className="size-full" />
          </div>
        </div>

        <div className="min-h-[25vh] flex flex-col justify-between gap-4 px-4 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8 border-t-2">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full md:max-w-3/4 mx-auto">
            <div className="flex flex-col items-start w-full max-w-fit md:max-w-1/4 ">
              <p className="text-sm md:text-base lg:text-lg">{footerData.email}</p>
            </div>

            <div className="flex flex-col items-center md:justify-end md:items-end w-full md:max-w-1/2">
              <span className="font-cormorant italic font-light text-lg md:text-xl pl-1">Albo ja napisze</span>
              <div className="py-1.5 px-3 border flex items-center justify-center max-w-fit text-sm">
                {footerData.formPlaceholder}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start font-light w-full md:max-w-3/4 mx-auto">
            <p className="text-sm">{footerData.location}</p>
            <p className="text-xs opacity-80">{footerData.signature}</p>
          </div>
        </div>
      </AnimatedFooter>
    </footer>
  );
}

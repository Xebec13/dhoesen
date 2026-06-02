import ArrowLine from "@/assets/vectors/ArrowLine";
import AnimatedFooter from "@/components/footer/AnimatedFooter";
import { footerData } from "@/components/footer/footer-data";

/**
 * Renders the footer section as a full-screen contact area: a prompt paragraph with an arrow vector occupies the upper portion, followed by email, a form placeholder, social links, location, and signature in the lower portion.
 * Layout stacks vertically on mobile and shifts to horizontal for the bottom row on larger screens.
 */
export default function Footer() {
  return (
    <AnimatedFooter>
      <footer className="min-h-screen">
        <div className="flex-1 gap-2.5 p-5 md:p-6 lg:p-8 text-right">
          <p className="size-full ml-auto md:max-w-3/4 text-4xl md:text-6xl lg:text-8xl font-light font-bodoni">{footerData.contactPrompt}</p>
          <div className="mx-auto size-full max-w-3/4 opacity-90">
            <ArrowLine className="size-full" />
          </div>
        </div>

        <div className="min-h-[30vh] flex flex-col justify-between p-5 md:p-6 lg:p-8 border-t-2">
          <div className="flex flex-col max-w-fit">
            <p>{footerData.email}</p>
            <div className="p-2 border">{footerData.formPlaceholder}</div>
          </div>
          <div className="social flex flex-col md:flex-row justify-between">
            <div className="flex">
              {footerData.links.map((link, i) => (
                <p key={i}>{link.label}</p>
              ))}
            </div>
            <p>{footerData.location}</p>
            <p>{footerData.signature}</p>
          </div>
        </div>
      </footer>
    </AnimatedFooter>
  );
}

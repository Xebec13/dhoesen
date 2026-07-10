import { useState, useCallback, useRef, useEffect } from "react";
import AnimatedNavbar from "@/components/navbar/AnimatedNavbar";
import { navData } from "@/components/navbar/nav-data";
import Logo from "@/ui/Logo";

/**
 * Navbar — site navigation header.
 *
 * Fixed at the top with `mix-blend-difference` for adaptive contrast.
 * Renders two navigation variants depending on viewport:
 *
 * **Desktop** (`md+`): 2-column grid with Logo (left) and nav links +
 * contact info (right). Each link is marked `data-animate="nav-item"`
 * for hover tracking by AnimatedNavbar.
 *
 * **Mobile** (`<md`): hamburger button toggles `isOpen` state. When open,
 * a backdrop overlay + side drawer (max 50vw) reveals nav links, contact
 * info, and a placeholder element. Drawer background is shark-900 with
 * old-lace-50 text.
 *
 * All animation logic (scroll tracking, hover tracking, sliding dot) is
 * delegated to AnimatedNavbar (src/components/navbar/AnimatedNavbar.tsx)
 * via `desktopNavRef`.
 */
export default function Navbar() {
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 z-40 md:mix-blend-difference">
      <AnimatedNavbar desktopNavRef={desktopNavRef} mobileNavRef={mobileNavRef}>
        
        {/* Desktop NAVBAR */}
        <nav ref={desktopNavRef} className="hidden md:grid grid-cols-2 min-h-[12.5vh] pt-10 px-4 md:px-6 lg:px-8 gap-4 text-shark-900 md:invert">
          <div className="flex flex-col justify-start items-start pl-1.5">
            <a href="#hero" className="max-w-fit">
              <Logo size="md" animateDot />
            </a>
          </div>

          <div className="relative flex flex-col md:flex-row h-fit gap-4 uppercase text-sm">
            <div className="absolute top-0 -left-4 h-full mt-0.5 pointer-events-none" aria-hidden="true">
              <div className="size-2 rounded-full bg-mauvelous-300 opacity-0" data-animate="sliding-dot"></div>
            </div>
            <ul className="list-none grid grid-rows-4 gap-3">
              {navData.links.map((link) => (
                <li className="max-w-fit text-xs md:text-sm uppercase leading-none" key={link.id} data-animate="nav-item">
                  <a
                    href={`#${link.id}`}
                    className="whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>


            <div className="flex flex-col justify-start items-end max-w-3/4 md:max-w-1/2 lg:max-w-1/4 md:ml-auto gap-3 leading-none whitespace-nowrap lowercase text-xs md:text-sm">
              <p>{navData.phone}</p>
              <p>{navData.email}</p>
            </div>
          </div>
        </nav>

        {/* Mobile NAVBAR */}
        <nav ref={mobileNavRef} className="relative block md:hidden min-h-[10vh] pt-8 px-4 ml-auto max-w-fit z-50">
          <button onClick={toggleMenu} className="group relative flex items-center justify-center size-12 cursor-pointer hover:scale-105 transition-transform duration-300">
            {!isOpen ? (
              <div className="flex flex-col items-start justify-start gap-1 w-full transition-colors duration-300 group-hover:text-mauvelous-300">
                <div className="w-full min-h-0.75 bg-current" />
                <div className="w-1/2 min-h-0.75 bg-current" />
                <div className="w-full min-h-0.75 bg-current" />
              </div>
            ) : (
              <div className="relative size-12">
                <div className="absolute w-full h-0.75 bg-old-lace-50 transition-colors duration-300 group-hover:bg-mauvelous-300 top-1/2 -translate-y-1/2 rotate-45" />
                <div className="absolute w-full h-0.75 bg-old-lace-50 transition-colors duration-300 group-hover:bg-mauvelous-300 top-1/2 -translate-y-1/2 -rotate-45" />
              </div>
            )}
          </button>
        </nav>
        
        {/* EXPANDED DIV */}
        {isMounted && (
        <div className={`fixed inset-0 flex justify-end md:hidden min-h-screen z-40 ${isOpen ? "" : "pointer-events-none"}`}>
          <div
            onClick={toggleMenu}
            className={`fixed inset-0 flex-1 size-full backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          />

          <aside className={`relative flex flex-col justify-evenly max-w-1/2 p-4 gap-4 bg-shark-900 text-old-lace-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <ul className="flex flex-col gap-4 list-none ">
              {navData.links.map((link) => (
                <li key={link.id} className="text-xl uppercase leading-none max-w-fit py-1.5">
                  <a onClick={toggleMenu} className="hover:text-mauvelous-300 " href={`#${link.id}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col w-full ml-auto gap-1 whitespace-nowrap text-xs">
              <p>{navData.phone}</p>
              <p>{navData.email}</p>
            </div>
            <div className="border-t-2">dupsko</div>
          </aside>
        </div>
        )}
      </AnimatedNavbar>
    </header>
  );
}

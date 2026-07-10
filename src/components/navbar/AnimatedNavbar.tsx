import { type ReactNode, type RefObject, useState, useEffect } from "react";
import { gsap, useGSAP,ScrollTrigger, } from "@/lib/gsap";


/**
 * AnimatedNavbar — GSAP animation driver for the Navbar.
 *
 * Three responsibilities coordinated via `desktopNavRef`:
 *
 * **Scroll tracking** (`setupScrollTracking`): listens to scroll events
 * and determines which section (about / works / offer / footer) is in the
 * upper third of the viewport. Updates `activeIndex` (-1 if none).
 *
 * **Hover tracking** (`setupHoverTracking`): listens for mouseenter/leave
 * on `data-animate="nav-item"` elements. Updates `hoverIndex` (null when
 * nothing is hovered). `hoverIndex` takes priority over `activeIndex`
 * (hover wins).
 *
 * **Sliding dot** (`data-animate="sliding-dot"`): a small dot that slides
 * vertically alongside the active/hovered nav item. Its `yPercent` is set
 * to `targetIndex * 300` via GSAP. Opacity toggles: 0 when no section is
 * active/hovered, 1 otherwise.
 *
 * **Logo dot** (`data-animate="logo-dot"`): fades out when a section is
 * active or hovered, fades back in when idle.
 *
 * Uses `useGSAP` for initial setup (scroll + hover listeners) and two
 * `useEffect` hooks for reactive GSAP animations on dot position/opacity.
 */
const SECTIONS = ["about", "works", "offer", "footer"];

function setupScrollTracking(onSectionChange: (index: number) => void) {
  const update = () => {
    const viewportMiddle = window.scrollY + window.innerHeight / 3;

    let foundIndex = -1;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i]);

      if (el && viewportMiddle >= el.offsetTop) {
        foundIndex = i;
        break;
      }
    }

    onSectionChange(foundIndex);
  };

  const trigger = ScrollTrigger.create({ onUpdate: update });

  update();

  return () => trigger.kill();
}


function setupHoverTracking(
  container: HTMLElement,
  onHover: (index: number | null) => void,
) {
  const navItems = container.querySelectorAll("[data-animate='nav-item']");

  const onEnter = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    navItems.forEach((item, i) => { if (item === target) onHover(i); });
  };

  const onLeave = () => onHover(null);

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", onEnter);
    item.addEventListener("mouseleave", onLeave);
  });

  return () => {
    navItems.forEach((item) => {
      item.removeEventListener("mouseenter", onEnter);
      item.removeEventListener("mouseleave", onLeave);
    });
  };
}
interface AnimatedNavbarProps {
  children: ReactNode;
  desktopNavRef: RefObject<HTMLElement | null>;
  mobileNavRef: RefObject<HTMLElement | null>;
}

export default function AnimatedNavbar({ children, desktopNavRef }: AnimatedNavbarProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useGSAP(() => {
    if (!desktopNavRef.current) return;

    const slidingDot = desktopNavRef.current.querySelector("[data-animate='sliding-dot']");
    if (slidingDot) gsap.set(slidingDot, { opacity: 0 });

    const cleanupScroll = setupScrollTracking(setActiveIndex);
    const cleanupHover = setupHoverTracking(desktopNavRef.current, setHoverIndex);

    return () => {
      cleanupScroll();
      cleanupHover();
    };
  });

  useEffect(() => {
    const dot = desktopNavRef.current?.querySelector("[data-animate='sliding-dot']");
    if (!dot) return;

    const targetIndex = hoverIndex ?? activeIndex;

    gsap.to(dot, {
      opacity: targetIndex === -1 ? 0 : 1,
      yPercent: targetIndex === -1 ? 0 : targetIndex * 300,
      duration: 0.7,
      ease: "power2.out",
    });
  }, [activeIndex, hoverIndex, desktopNavRef]);

  useEffect(() => {
    const dot = desktopNavRef.current?.querySelector("[data-animate='logo-dot']");
    if (!dot) return;

    gsap.to(dot, {
      opacity: activeIndex === -1 && hoverIndex === null ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeIndex, hoverIndex, desktopNavRef]);

  return <>{children}</>;
}

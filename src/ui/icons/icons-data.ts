import type { ComponentType, SVGProps } from "react";
import HalfMoon from "@/ui/icons/hero-icons/HalfMoon";
import Thunder from "@/ui/icons/hero-icons/Thunder";
import Heart from "@/ui/icons/hero-icons/Heart";
import Bomb from "@/ui/icons/hero-icons/Bomb";
import Hand from "@/ui/icons/hero-icons/Hand";
import Ace from "@/ui/icons/hero-icons/Ace";
import LetterO from "@/ui/icons/hero-icons/LetterO";
import Burger from "@/ui/icons/hero-icons/Burger";

export const iconsRegistry: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  halfMoon: HalfMoon,
  thunder: Thunder,
  heart: Heart,
  bomb: Bomb,
  hand: Hand,
  ace: Ace,
  letterO: LetterO,
  burger: Burger,
};

export type IconName = keyof typeof iconsRegistry;

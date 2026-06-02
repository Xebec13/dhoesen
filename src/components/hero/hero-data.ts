import heroImg from "@/assets/dh.webp";

export interface HeroData {
  subtitle: string;
  keywords: string[];
  imgSrc: string;
}

export const heroData: HeroData = {
  subtitle: "zorientowany na",
  keywords: ["Creative", "Design", "Web", "Development", "Motion", "UI/UX", "Strategia", "Produkcja"],
  imgSrc: heroImg,
};

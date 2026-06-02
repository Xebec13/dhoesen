import aboutImg from "@/assets/dh.webp";

export interface AboutData {
  imgSrc: string;
  name: string;
  role: string;
  description: string;
}

export const aboutData: AboutData = {
  imgSrc: aboutImg,
  name: "Dawid Hoesen",
  role: "Creative Developer",
  description:
    "Tworzę interaktywne, pełne dynamicznych animacji strony i aplikacje webowe. Łączę zaawansowany kod z psychologicznym podejściem do doświadczeń użytkownika.",
};

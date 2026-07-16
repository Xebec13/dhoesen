import aboutImg from "@/assets/dh.webp";

export interface AboutData {
  imgSrc: string;
  name: string;
  role: string;
  description: [string, string];
}

export const aboutData: AboutData = {
  imgSrc: aboutImg,
  name: "Dawid Hoesen",
  role: "Creative Developer",
  description: [
    "Tworzę interfejsy oparte na ruchu i dynamice.",
    "Łączę zaawansowany kod z psychologicznym podejściem do doświadczeń użytkownika.",
  ],
};

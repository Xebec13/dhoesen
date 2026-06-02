export interface FooterLink {
  label: string;
}

export interface FooterData {
  contactPrompt: string;
  email: string;
  formPlaceholder: string;
  links: FooterLink[];
  location: string;
  signature: string;
}

export const footerData: FooterData = {
  contactPrompt: "Ciekawi Cie co możemy razem zbudować? Napisz do mnie tutaj",
  email: "dhoesen@gmail.com",
  formPlaceholder: "FORM PLACEHOLDER",
  links: [
    { label: "GIT" },
    { label: "LINKEDIN" },
  ],
  location: "POLSKA | WARSZAWA",
  signature: "Xebec13",
};

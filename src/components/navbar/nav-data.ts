export interface NavLink {
  id: string;
  label: string;
}

export interface NavData {
  links: NavLink[];
  email: string;
  phone: string;
}

export const navData: NavData = {
  links: [
    { id: "about", label: "o mnie" },
    { id: "works", label: "prace" },
    { id: "offer", label: "twój ruch" },
    { id: "footer", label: "napisz do mnie" },
  ],
  email: "dhoesen@gmail.com",
  phone: "123456789",
};

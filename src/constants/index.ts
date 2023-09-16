import { Github, Youtube, Linkedin, Home } from "lucide-react";

export const options = [
  { text: "Youtube", icon: Youtube, id: crypto.randomUUID() },
  { text: "Github", icon: Github, id: crypto.randomUUID() },
  { text: "Linkedin", icon: Linkedin, id: crypto.randomUUID() },
  { text: "Portfolio", icon: Home, id: crypto.randomUUID() },
];

export const getIcon = {
  Youtube: Youtube,
  Github: Github,
  Linkedin: Linkedin,
  Portfolio: Home,
};

export type Icons = keyof typeof getIcon;

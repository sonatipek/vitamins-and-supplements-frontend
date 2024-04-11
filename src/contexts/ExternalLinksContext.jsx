import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { createContext } from "react";

export const ExternalLinksContext = createContext();

export function ExternalLinksProvider({ children }) {
  const externalLinks = {
    navLinks: [
      { title: "Ana Sayfa", href: "/" },
      { title: "Supplementler", href: "/supplements" },
      { title: "Proje Hakkında", href: "/project-about" },
    ],
    contactLinks: [
      {
        title: "LinkedIn",
        href: "https://linkedin.com/in/sonatipek",
        icon: <Linkedin />,
      },
      {
        title: "Twitter / X",
        href: "https://twitter.com/sonatipek",
        icon: <Twitter />,
      },
      {
        title: "GitHub",
        href: "https://github.com/sonatipek",
        icon: <Github />,
      },
      {
        title: "Kişisel Web Sitesi",
        href: "https://sonatipek.com",
        icon: <Globe />,
      },
    ],
    relatedProjects: [
      {
        title: "Front-end Reposu",
        href: "https://github.com/sonatipek/vitamins-and-supplements-frontend",
        icon: <Github />,
      },
      {
        title: "Back-end Reposu",
        href: "https://github.com/sonatipek/vitamins-and-supplements-api",
        icon: <Github />,
      },
    ],
  };

  const contextValue = {
    externalLinks,
  };

  return (
    <ExternalLinksContext.Provider value={contextValue}>
      {children}
    </ExternalLinksContext.Provider>
  );
}

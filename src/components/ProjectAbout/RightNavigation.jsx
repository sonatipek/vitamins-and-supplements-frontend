import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function RightNavigation() {
  const [activeSection, setActiveSection] = useState(
    "supplements-and-vitamins",
  );

  // useEffects for scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 hidden lg:flex">
      <ul className="space-y-4">
        <li className="group">
          <a
            href="#supplements-and-vitamins"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "supplements-and-vitamins" && "translate-x-14",
            )}
          >
            Supplements & Vitamins
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "supplements-and-vitamins" && "translate-x-14",
            )}
          ></div>
        </li>

        <li className="group">
          <a
            href="#tech-stack"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "tech-stack" && "translate-x-14",
            )}
          >
            Teknolojiler ve Araçlar
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "tech-stack" && "translate-x-14",
            )}
          ></div>
        </li>

        <li className="group">
          <a
            href="#repos"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "repos" && "translate-x-14",
            )}
          >
            Proje Repoları
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "repos" && "translate-x-14",
            )}
          ></div>
        </li>

        <li className="group">
          <a
            href="#contribution"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "contribution" && "translate-x-14",
            )}
          >
            Projelere Katkı
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "contribution" && "translate-x-14",
            )}
          ></div>
        </li>

        <li className="group">
          <a
            href="#contact"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "contact" && "translate-x-14",
            )}
          >
            İletişim
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "contact" && "translate-x-14",
            )}
          ></div>
        </li>

        <li className="group">
          <a
            href="#sources-and-references"
            className={twMerge(
              "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
              activeSection === "sources-and-references" && "translate-x-14",
            )}
          >
            Kaynak & Referanslar
          </a>
          <div
            className={twMerge(
              "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
              activeSection === "sources-and-references" && "translate-x-14",
            )}
          ></div>
        </li>
      </ul>
    </div>
  );
}

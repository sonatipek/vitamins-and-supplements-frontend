import { useContext } from "react";

// UI Components
import Text from "../components/ui/Text";
import Link from "./ui/Link";

// Assets
import BrandLogo from "../assets/brand_logo.svg";
import SonatLogo from "../assets/sonatipek_logo.svg";
import SonatLogoLight from "../assets/sonatipek_logo_light.svg";

// Contexts
import { ThemeContext } from "../contexts/ThemeContext";
import { ExternalLinksContext } from "../contexts/ExternalLinksContext";

export default function Footer() {
  // useContexts
  const { theme } = useContext(ThemeContext);
  const { externalLinks } = useContext(ExternalLinksContext);


  // Datas
  const { navLinks } = externalLinks;
  const { contactLinks } = externalLinks;
  const { relatedProjects } = externalLinks;
  return (
    <>
      <footer className="container mt-24 flex flex-col items-start justify-between border-y px-4 py-6 dark:border-mid md:mt-32 md:flex-row md:px-0">
        <div className="w-3/3 mb-7 md:mb-0 md:w-1/3">
          <a href="/" className="">
            <img
              src={BrandLogo}
              alt="vitamins and supplements brand logo"
              width={32}
            />
          </a>
          <Text type="subtext" className="mt-3">
            Bu site üzerinde bulunan bilgiler, herhangi bir kullanım tavsiyesi
            içermez. Sağlığınızla ilgili herhangi bir değişiklik yapmadan önce
            doktorunuza danışmanız önemlidir.
          </Text>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-14">
          <ul className="*:text-light">
            <h6 className="mb-2 font-bold !text-mid">Sayfalar</h6>
            {navLinks.map((value, index) => (
              <li
                key={index}
                className="mt-1 transition-colors duration-300 hover:text-dark"
              >
                <a href={value.href}>{value.title}</a>
              </li>
            ))}
          </ul>

          <ul className="*:text-light">
            <h6 className="mb-2 font-bold !text-mid">İletişim</h6>
            {contactLinks.map((value, index) => (
              <li
                key={index}
                className="mt-1 transition-colors duration-300 hover:text-dark"
              >
                <a href={value.href} target="_blank">
                  {value.icon}
                </a>
              </li>
            ))}
          </ul>

          <ul className="*:text-light">
            <h6 className="mb-2 font-bold !text-mid">Bağlantılı Projeler</h6>
            {relatedProjects.map((value, index) => (
              <li
                key={index}
                className="mt-1 transition-colors duration-300 hover:text-dark"
              >
                <a href={value.href} target="_blank">
                  {value.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="container mt-6 flex flex-col items-center justify-between pb-5 md:flex-row">
        <Text className="flex items-center gap-2 text-mid">
          Built by{" "}
          <a href="https://sonatipek.com" target="_blank">
            <img
              src={theme === "light" ? SonatLogo : SonatLogoLight}
              alt="sonat saygin ipek logo"
            />
          </a>
        </Text>

        <Text type="subtext">
          Vitamins and Supplements is{" "}
          <Link
            href="https://github.com/sonatipek/vitamins-and-supplements-frontend/blob/main/LICENSE"
            target="_blank"
          >
            MIT licensed
          </Link>
        </Text>
      </div>
    </>
  );
}

import { Github, Linkedin, Twitter, Globe } from "lucide-react";

import Text from "../components/ui/Text";
import BrandLogo from "../assets/brand_logo.svg";
import SonatLogo from "../assets/sonatipek_logo.svg";
import SonatLogoLight from "../assets/sonatipek_logo_light.svg";
import Link from "./ui/Link";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const navLinks = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Supplementler", href: "/supplements" },
  { title: "Proje Hakkında", href: "/project-about" },
];

const contactLinks = [
  { title: <Linkedin />, href: "https://linkedin.com/in/sonatipek" },
  { title: <Twitter />, href: "https://twitter.com/sonatipek" },
  { title: <Github />, href: "https://github.com/sonatipek" },
  { title: <Globe />, href: "https://sonatipek.com" },
];
const projectLinks = [
  {
    title: "Front-end Repo",
    href: "https://github.com/sonatipek/vitamins-and-supplements-frontend",
  },
  {
    title: "Back-end Repo",
    href: "https://github.com/sonatipek/vitamins-and-supplements-api",
  },
];

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer className="container mt-24 md:mt-32 flex flex-col md:flex-row items-start justify-between border-y dark:border-mid py-6 px-4 md:px-0">
        <div className="w-3/3 md:w-1/3 mb-7 md:mb-0">
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

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-14">
          <ul className="*:text-light">
            <h6 className="font-bold !text-mid mb-2">Sayfalar</h6>
            {navLinks.map((value, index) => (
              <li
                key={index}
                className="hover:text-dark transition-colors duration-300 mt-1"
              >
                <a href={value.href}>{value.title}</a>
              </li>
            ))}
          </ul>

          <ul className="*:text-light">
            <h6 className="font-bold !text-mid mb-2">İletişim</h6>
            {contactLinks.map((value, index) => (
              <li
                key={index}
                className="hover:text-dark transition-colors duration-300 mt-1"
              >
                <a href={value.href} target="_blank">
                  {value.title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="*:text-light">
            <h6 className="font-bold !text-mid mb-2">Proje</h6>
            {projectLinks.map((value, index) => (
              <li
                key={index}
                className="hover:text-dark transition-colors duration-300 mt-1"
              >
                <a href={value.href} target="_blank">
                  {value.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="container mt-6 pb-5 flex flex-col md:flex-row items-center justify-between">
        <Text className="text-mid flex items-center gap-2">
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

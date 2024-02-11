import { Github, Linkedin, Twitter, Globe } from "lucide-react";

import Text from "../components/ui/Text";
import BrandLogo from "../assets/brand_logo.svg";
import SonatLogo from "../assets/sonatipek_logo.svg";
import Link from "./ui/Link";

const navLinks = [
  { title: "Supplementler", href: "#" },
  { title: "Geliştiriciler İçin/Proje Hakkında", href: "#" },
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
  return (
    <>
      <footer className="container mt-28 flex items-start justify-between border-y-2 py-6">
        <div className="w-1/3">
          <a href="/">
            <img
              src={BrandLogo}
              alt="vitamins and supplements brand logo"
              width={64}
            />
          </a>
          <Text type="subtext">
            Bu site üzerinde bulunan bilgiler, herhangi bir kullanım tavsiyesi
            içermez. Sağlığınızla ilgili herhangi bir değişiklik yapmadan önce
            doktorunuza danışmanız önemlidir.
          </Text>
        </div>

        <div className="flex gap-14">
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
      <div className="container mt-6 flex items-center justify-between">
        <Text className="text-mid flex items-center gap-2">Built by <a href="https://sonatipek.com" target="_blank"><img src={SonatLogo} alt="sonat saygin ipek logo" /></a></Text>

        <Text type="subtext">Vitamins and Supplements is <Link href="https://github.com/sonatipek/vitamins-and-supplements-frontend/blob/main/LICENSE" target="_blank">MIT licensed</Link></Text>
      </div>
    </>
  );
}

import { Github, Moon } from "lucide-react";
import BrandLogo from "../assets/brand_logo.svg";

export default function Navbar() {
  const navLinks = [
    { title: "Supplementler", href: "#" },
    { title: "Geliştiriciler İçin/Proje Hakkında", href: "#" },
  ];
  return (
    <header>
      <nav className="container py-3 flex items-center justify-between">
        <a href="/">
          <img src={BrandLogo} alt="Vitamins and Supplements Brand Logo" width={88} />
          <h1 className="hidden">
            Vitamins & Supplements
          </h1>
        </a>

        <ul className="flex gap-5 *:font-medium *:text-darkest">
          {navLinks.map((value, index) => (
            <li key={index}>
              <a href={value.href}>{value.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <a
            target="_blank"
            href="https://github.com/sonatipek/vitamins-and-supplements-frontend"
            className="flex px-5 gap-2 text-dark border-r-2 border-light hover:underline"
          >
            <Github strokeWidth={1.5} /> Repo
          </a>

          <button className="pl-2 text-dark hover:scale-105  transition-transform duration-300">
            <Moon strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}

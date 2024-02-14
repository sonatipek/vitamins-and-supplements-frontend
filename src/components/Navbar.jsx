import { Github, MenuIcon, Moon, X } from "lucide-react";
import BrandLogo from "../assets/brand_logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonHandler = () => {
    setIsMenuOpen((prev) => !prev)
  };


  const navLinks = [
    { title: "Supplementler", href: "#" },
    { title: "Geliştiriciler İçin/Proje Hakkında", href: "#" },
  ];

  return (
    <header>
      <nav className="container py-3 flex flex-col md:flex-row items-center justify-between">
        <a href="/" className="self-start">
          <img
            src={BrandLogo}
            alt="Vitamins and Supplements Brand Logo"
            width={88}
          />
          <h1 className="hidden">Vitamins & Supplements</h1>
        </a>
        <button className="inline md:hidden absolute right-10 top-10" onClick={menuButtonHandler}>
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>

        <ul className={`${isMenuOpen ? "static" : "absolute -translate-y-96"} md:static md:-translate-y-0 flex flex-col md:flex-row gap-5 items-center transition-transform duration-500`}>
          {navLinks.map((value, index) => (
            <li key={index} className="text-darkest hover:underline font-medium">
              <a href={value.href}>{value.title}</a>
            </li>
          ))}
        </ul>

        <div className={`${isMenuOpen ? "static" : "absolute -translate-y-96"} md:static md:-translate-y-0 flex gap-2 mt-12 md:mt-0 transition-transform duration-500`}>
          <a
            target="_blank"
            href="https://github.com/sonatipek/vitamins-and-supplements-frontend"
            className="flex pr-5 gap-2 text-dark border-r-2 border-light hover:underline"
          >
            <Github strokeWidth={1.5} /> Repo
          </a>

          <button className="pl-2 text-dark hover:scale-105 transition-transform duration-300">
            <Moon strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, MenuIcon, Moon, Sun, X, ArrowUpRight } from "lucide-react";

import BrandLogo from "../assets/brand_logo.svg";

import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const themeButtonHandler = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Supplementler", href: "/supplements" },
    { title: "Proje Hakkında", href: "/project-about" },
  ];

  return (
    <header className="">
      <nav className="container flex flex-col items-center justify-between py-3 md:flex-row">
        <a href="/" className="self-start">
          <img
            src={BrandLogo}
            alt="Vitamins and Supplements Brand Logo"
            width={48}
          />
          <h1 className="hidden">Vitamins & Supplements</h1>
        </a>
        <button
          className="absolute right-10 top-10 inline text-darkest dark:text-white md:hidden "
          onClick={menuButtonHandler}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "static" : "absolute -translate-y-96"
          } flex flex-col items-center gap-5 transition-transform duration-500 md:static md:-translate-y-0 md:flex-row`}
        >
          {navLinks.map((value, index) => (
            <li
              key={index}
              className="font-medium text-darkest decoration-brand decoration-2 underline-offset-4 hover:underline dark:text-white"
            >
              <NavLink to={value.href}>{value.title}</NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`${
            isMenuOpen ? "static" : "absolute -translate-y-96"
          } mt-12 flex gap-2 transition-transform duration-500 md:static md:mt-0 md:-translate-y-0`}
        >
          <a
            target="_blank"
            href="https://github.com/sonatipek/vitamins-and-supplements-frontend"
            className="group relative flex gap-2 border-r-2 border-light pr-5 text-dark hover:underline dark:border-mid dark:text-light"
          >
            <Github strokeWidth={1.5} /> Repo
            <ArrowUpRight
              className="absolute right-0 text-mid opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              size={18}
              strokeWidth={1.5}
            />
          </a>

          <button
            className="pl-2 text-dark transition-transform duration-300 hover:scale-105 dark:text-light"
            onClick={themeButtonHandler}
          >
            {theme === "light" ? (
              <Moon strokeWidth={1.5} />
            ) : (
              <Sun strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

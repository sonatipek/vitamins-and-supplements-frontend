import { Github, Moon } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { title: "Supplementler", href: "#" },
    { title: "Geliştiriciler İçin/Proje Hakkında", href: "#" },
  ];
  return (
    <header>
      <nav className="container py-3 flex items-center justify-between">
        <h1 className="inline-block w-1/2 md:w-1/5 text-2xl text-darkest font-semibold">
          Vitamins & Supplements
        </h1>

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
            <Github strokeWidth={1.5}/> Repo
          </a>

          <button className="pl-2 text-dark hover:scale-105  transition-transform duration-300">
            <Moon strokeWidth={1.5}/>
          </button>
        </div>
      </nav>
    </header>
  );
}

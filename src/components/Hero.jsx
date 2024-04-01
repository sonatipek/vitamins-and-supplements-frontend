import { ChevronRight } from "lucide-react";
import Link from "./ui/Link";
import Thunderbolt from "../assets/thunderbolt.svg";
import ThunderboltLight from "../assets/thunderbolt_light.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="mt-20 mb-20 md:mb-30 lg:mb-40 lg:container">
      <div className="flex justify-center">
        <img
          src={theme === "light" ? Thunderbolt : ThunderboltLight}
          alt="thunderbolt svg"
          width={224}
          className="mt-4 hidden md:inline"
        />

        <h3 className="mx-auto mt-12 text-3xl md:text-5xl md:leading-tight lg:text-6xl lg:px-24 font-semibold text-center text-pretty text-darkest dark:text-white ">
          Yalnızca ihtiyacınız olanı{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-darkBrand to-brand">
            hemen keşfedin
          </span>
        </h3>

        <img
          src={theme === "light" ? Thunderbolt : ThunderboltLight}
          alt="thunderbolt svg"
          width={224}
          className="mt-4 hidden md:inline scale-x-[-1]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 md:mt-0 lg:-mt-1 xl:-mt-12">
        <Link href="/supplements" type="button">
          Hemen Keşfet
        </Link>

        <Link
          href="https://linkedin.com/in/sonatipek"
          target="_blank"
          classname="!text-brand !no-underline !font-semibold group"
        >
          İş Birliği
          <ChevronRight
            size={16}
            className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
}

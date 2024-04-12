import { useContext } from "react";

// UI Components
import Link from "../ui/Link";

// Assets
import Thunderbolt from "../../assets/thunderbolt.svg";
import ThunderboltLight from "../../assets/thunderbolt_light.svg";

// Icons
import { ChevronRight } from "lucide-react";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="md:mb-30 mb-20 mt-20 lg:container lg:mb-40">
      <div className="flex justify-center">
        <img
          src={theme === "light" ? Thunderbolt : ThunderboltLight}
          alt="thunderbolt svg"
          width={224}
          className="mt-4 hidden md:inline"
        />

        <h3 className="mx-auto mt-12 text-pretty text-center text-3xl font-semibold text-darkest dark:text-white md:text-5xl md:leading-tight lg:px-24 lg:text-6xl ">
          Yalnızca ihtiyacınız olanı{" "}
          <span className="bg-gradient-to-r from-darkBrand to-brand bg-clip-text font-bold text-transparent">
            hemen keşfedin
          </span>
        </h3>

        <img
          src={theme === "light" ? Thunderbolt : ThunderboltLight}
          alt="thunderbolt svg"
          width={224}
          className="mt-4 hidden scale-x-[-1] md:inline"
        />
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-0 lg:-mt-1 xl:-mt-12">
        <Link href="/supplements" variant="primary-button">
          Hemen Keşfet
        </Link>

        <Link
          href="https://linkedin.com/in/sonatipek"
          target="_blank"
          variant="primary-link"
        >
          İş Birliği
          <ChevronRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

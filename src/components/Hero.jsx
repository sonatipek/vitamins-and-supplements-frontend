import { ChevronRight } from "lucide-react";
import Link from "./ui/Link";
import Thunderbolt from "../assets/thunderbolt.svg";

export default function Hero() {
  return (
    <section className="mt-14 mb-40 container">
      <div className="flex justify-center">
        <img src={Thunderbolt} alt="thunderbolt svg" width={224} className="mt-4" />

        <div>
          <h3 className="mx-auto text-6xl font-bold text-center text-pretty text-dark leading-tight">
            Yalnızca{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-darkBrand to-brand">
              ihtiyacınız olanı
            </span>{" "}
            hemen keşfedin
          </h3>
          <p className="mx-auto text-mid font-light text-center mt-3 w-2/4 leading-none">
            Beslenme programınızı en uygun şekilde destekleyin.
          </p>
        </div>

        <img src={Thunderbolt} alt="thunderbolt svg" width={224} className="mt-4" />
      </div>

      <div className="flex items-center justify-center gap-5">
        <Link href="/supplements" type="button">
          Supplement&apos;lere Göz At
        </Link>

        <Link
          href="https://linkedin.com/in/sonatipek"
          target="_blank"
          classname="!text-darkest font-semibold group"
        >
          İletişime Geç
          <ChevronRight
            size={24}
            className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
}

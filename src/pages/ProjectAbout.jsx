import Title from "../components/ui/Title";
import Text from "../components/ui/Text";
import List from "../components/ui/List";
import Link from "../components/ui/Link";
import PreviewCard from "../components/ui/PreviewCard";

// Images
import ExpressLogo from "../assets/express_logo.svg";
import ExpressLogoDark from "../assets/expressjs_dark.svg";
import FigmaLogo from "../assets/figma_logo.svg";
import FramerLogo from "../assets/framer_logo.svg";
import FramerLogoDark from "../assets/framer_dark.svg";
import MongoLogo from "../assets/mongo_logo.svg";
import NodeLogo from "../assets/nodejs_logo.svg";
import ReactLogo from "../assets/react_logo.svg";
import ReactRouterLogo from "../assets/reactrouter_logo.svg";
import TailwindLogo from "../assets/tailwind_logo.svg";
import VercelLogo from "../assets/vercel_logo.svg";
import VercelLogoDark from "../assets/vercel_dark.svg";
import ViteLogo from "../assets/vite_logo.svg";

import {
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ProjectAbout() {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState(
    "supplements-and-vitamins"
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="container mt-28">
      {/* Left Navigation */}
      <div className="hidden lg:flex fixed right-4">
        <ul className="space-y-4">
          <li className="group">
            <a
              href="#supplements-and-vitamins"
              className={`${
                activeSection === "supplements-and-vitamins" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              Supplements & Vitamins
            </a>
            <div
              className={`${
                activeSection === "supplements-and-vitamins" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>

          <li className="group">
            <a
              href="#tech-stack"
              className={`${
                activeSection === "tech-stack" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              Teknolojiler ve Araçlar
            </a>
            <div
              className={`${
                activeSection === "tech-stack" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>

          <li className="group">
            <a
              href="#repos"
              className={`${
                activeSection === "repos" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              Proje Repoları
            </a>
            <div
              className={`${
                activeSection === "repos" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>

          <li className="group">
            <a
              href="#contribution"
              className={`${
                activeSection === "contribution" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              Projelere Katkı
            </a>
            <div
              className={`${
                activeSection === "contribution" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>

          <li className="group">
            <a
              href="#contact"
              className={`${
                activeSection === "contact" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              İletişim
            </a>
            <div
              className={`${
                activeSection === "contact" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>

          <li className="group">
            <a
              href="#sources-and-references"
              className={`${
                activeSection === "sources-and-references" && "translate-x-14"
              } text-light group-hover:text-mid flex translate-x-20 group-hover:translate-x-0 transition-transform duration-700 delay-75`}
            >
              Kaynak & Referanslar
            </a>
            <div
              className={`${
                activeSection === "sources-and-references" && "translate-x-14"
              } h-1 w-full translate-x-20 bg-brand group-hover:translate-x-0 transition-transform duration-500`}
            ></div>
          </li>
        </ul>
      </div>
      {/* Left Navigation End */}

      {/* Main Informations */}
      <section id="supplements-and-vitamins">
        <Title size="lg">Vitamins & Supplements</Title>
        <Text className="mt-4">
          Supplement & Vitamins, takviye gıda kullanımıyla ilgili Türkçe
          kaynakların kısıtlı olması nedeniyle bir ihtiyacı karşılamak üzere
          ortaya çıktı. Kaynak & Referanslar bölümünde belirtilen videodaki
          değerli bilgileri ve tasarım ile zenginleştirilmiş infografikleri,
          insanların kolayca erişebileceği bir web sitesine dönüştürme fikriyle
          hareket edildi.
        </Text>
        <Text className="mt-4">
          Proje, takviye gıda kullanımına ihtiyaç duyan her bireyin bilgiye
          kolayca ulaşabilmesini amaçlıyor. Özellikle de yeni başlayan
          sporcuların, sıklıkla kendi ihtiyacı olmayan takviye gıdalarını
          kullanmalarını veya pazarlama kampanyaları sonucu gereksiz takviyeleri
          gerekliymiş gibi kullanmalarını gözlemledim. Ancak bu ek takviyeler
          sizin durumunuz için gerçekten faydalı mı? İşte tam bu noktada, sizin
          için ihtiyacınız olabilecek supplementleri, birbirini tekrar eden
          kopya içerikli “pazarlama içerikleri”nden, kâr amacı ile takviyeyi
          öven içeriklerden uzak bir şekilde kendiniz keşfetmenize olanak
          tanıyoruz
        </Text>
        <Text className="mt-6">
          Bu projeyi geliştirmek; React ile useEffect, React optimizasyonları
          (React.memo, useMemo, useCallback), Context API ile state yönetimi ve
          RESTful API’lerle çalışma konularında deneyim kazanmama yardımcı oldu.
          Ayrıca bu deneyim, react-router ile Multi-Page Application ve Framer
          Motion ile animasyon ve Tailwindcss gibi konuları da içermektedir.
          Back-end kısmında RESTful API yazma becerileri edindim. Bunun yanında
          front-end tarafında veriyi alırken nasıl işlemlerden geçtiğini anlama
          gibi faydası da oldu. Dolayısıyla, proje geliştirme sürecinde hem
          front-end hem de back-end işlerine dair kapsamlı bir bakış açısı
          edindiğimi söyleyebilirim.
        </Text>

        <div className="mt-6">
          <h6 className="font-medium dark:text-light">Başlıca Özellikler:</h6>
          <List
            listElements={[
              "Vitamin ve Supplementler arasında sekme geçişi",
              "Context API kullanarak dark-light tema değişimi",
              "Vitamin ve Supplementleri kategoriye göre filtreleyebilme",
              "RESTful API ile servisten gelen bilgiler ile dinamik içerik",
              "Animasyonlar ile desteklenen sade arayüz",
              "Backend servisi için temel CRUD (Create, Read, Update, Delete) işlemleri.",
            ]}
          ></List>
        </div>
      </section>
      {/* Main Informations End */}

      {/* Tech Stack  */}
      <section className="mt-14" id="tech-stack">
        <Title size="lg">Teknoloji ve Araçlar</Title>
        <Text className="mt-4" type="subtext">
          Proje genelinde kullandığım tüm teknoloji ve araçlar setini aşağıda
          bulabilirsiniz.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mt-6">
          <div>
            <Title className="text-center">Front-end</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={ReactLogo}
                alt="react.js logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={ReactRouterLogo}
                alt="reactrouter logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={ViteLogo}
                alt="vite.js logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={theme === "light" ? FramerLogo : FramerLogoDark}
                alt="framer logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={TailwindLogo}
                alt="tailwindcss logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />
            </PreviewCard>
          </div>

          <div>
            <Title className="text-center">Back-end</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={NodeLogo}
                alt="node.js logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={theme === "light" ? ExpressLogo : ExpressLogoDark}
                alt="express.js logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />

              <img
                src={MongoLogo}
                alt="mongodb logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />
            </PreviewCard>
          </div>

          <div>
            <Title className="text-center">Hosting</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={theme === "light" ? VercelLogo : VercelLogoDark}
                alt="vercel logo"
                className="cursor-pointer hover:scale-105 duration-700 h-14"
              />
            </PreviewCard>
          </div>

          <div>
            <Title className="text-center">Design</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={FigmaLogo}
                alt="Figma logo"
                className="cursor-pointer hover:scale-105 duration-700"
              />
            </PreviewCard>
          </div>
        </div>
      </section>
      {/* Tech Stack  End*/}

      {/* Github Repos */}
      <section className="mt-14" id="repos">
        <Title size="lg">Proje Repoları</Title>
        <Text className="mt-4">
          Projenin her iki tarafı için de katkılarınıza açığım, lütfen katkıda
          bulunmaktan çekinmeyin. Projede kullanmak üzere geliştirdiğim apiye
          ulaşmak ve katkı sağlamak isterseniz aşağıdaki beckend projesinin
          github linkine de ulaşabilirsiniz. Lütfen geliştirme ile ilgili fikir
          ve önerileriniz varsa bana iletin.
        </Text>

        <div className="flex gap-5 mt-6">
          <Link
            href="https://github.com/sonatipek/vitamins-and-supplements-frontend"
            target="blank"
            icon={<GithubIcon />}
          >
            Front-end Reposu
          </Link>
          <Link
            href="https://github.com/sonatipek/vitamins-and-supplements-api"
            target="blank"
            icon={<GithubIcon />}
          >
            Back-end Reposu
          </Link>
        </div>
      </section>
      {/* Github Repos End*/}

      {/* Contribution  */}
      <section className="mt-14" id="contribution">
        <Title size="lg">Projelere Katkı</Title>
        <Text className="mt-4">
          Github üzerinden kodları inceleyip, proje repoları başlığında bulunan
          linkler üzerinden katkıda bulunabilirsiniz. Bulduğunuz hataları
          bildirmek, tasarım veya kod iyileştirmelerinden bahsederek, kendimi
          geliştirmeme de katkıda bulunabilirsiniz.
        </Text>
      </section>
      {/* Contribution End */}

      {/* Contact */}
      <section className="mt-28" id="contact">
        <Title size="lg">İletişim</Title>
        <Text className="mt-4">
          Lütfen proje hakkında geri bildirmlerinizi bildirmekten çekinmeyin.
          Tsaarımsal, yazılımsal her türlü geri bildiriminiz kendimi geliştirmem
          için çok değerli. Lütfen eleştirmekten çekinmeyin. aşağdaki iletişim
          kanallarımdan kendinizi rahat hissedeceğiniz herhangi biriyle benimle
          iletişime geçebilirisniz.
        </Text>

        <div className="flex gap-3 mt-6">
          <Link
            href="https://linkedin.com/in/sonatipek"
            target="_blank"
            icon={<LinkedinIcon />}
          ></Link>
          <Link
            href="https://twitter.com/sonatipek"
            target="_blank"
            icon={<TwitterIcon />}
          ></Link>
          <Link
            href="https://github.com/sonatipek"
            target="_blank"
            icon={<GithubIcon />}
          ></Link>
          <Link
            href="https://sonatipek.com"
            target="_blank"
            icon={<GlobeIcon />}
          ></Link>
          <Link
            href="mailto:sonatsayginipek@gmail.com"
            target="_blank"
            icon={<MailIcon />}
          ></Link>
        </div>
      </section>
      {/* Contact End */}

      {/* Sources and References */}
      <section className="mt-14" id="sources-and-references">
        <Title size="lg">Kaynak & Referanslar</Title>

        <ul className="list-disc ml-6 mt-4 space-y-3">
          <li className="dark:text-light">
            <Link
              href="https://www.youtube.com/watch?v=z3LFfY3AhVQ"
              target="_blank"
            >
              Kaynak Video Linki:
            </Link>{" "}
            Projede bana ilham kaynağı olan ve bilgileri, öneri ve
            puanlandırmayı, modal tasarımını referans aldığım video içeriğine
            aşağıdaki linkten veya yandaki kısımdan ulaşabilirsiniz.
          </li>
          <li className="dark:text-light">
            <Link href="https://undraw.co/illustrations" target="_blank">
              Undraw:
            </Link>{" "}
            Çeşitli illüstrasyonlar bulabileceğiniz web sitesi. Projede bulunan
            illüstrasyonu buradan edindim.
          </li>
          <li className="dark:text-light">
            <Link href="https://www.svghub.app/" target="_blank">
              SVG Hub:
            </Link>{" "}
            Hareketli, hareketsiz SVG çizimler bulabileceğniz web sitesi. Hero
            alanında bulunan SVG çizimleri buradan edindim.
          </li>
          <li className="dark:text-light">
            <Link href="https://svgl.vercel.app/" target="_blank">
              svgl:
            </Link>{" "}
            Çeşitli yazılımların, araçların, frameworklerin veya programlama
            dillerinin logolarının SVG olarak bulunduğu site.
          </li>
          <li className="dark:text-light">
            <Link href="https://lucide.dev/" target="_blank">
              Lucide:
            </Link>{" "}
            Özelleştirilebilir ve sade ikon kütüphanesi.
          </li>
        </ul>
      </section>
      {/* Sources and References End */}
    </main>
  );
}

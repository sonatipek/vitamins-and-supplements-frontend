/* eslint-disable react/no-unescaped-entities */
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

// UI Components
import Title from "../components/ui/Title";
import Text from "../components/ui/Text";
import List from "../components/ui/List";
import Link from "../components/ui/Link";
import PreviewCard from "../components/ui/PreviewCard";

// Assets
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

import { MailIcon } from "lucide-react";

// Contexts
import { ThemeContext } from "../contexts/ThemeContext";
import { ExternalLinksContext } from "../contexts/ExternalLinksContext";

// Framer Options
const framerContainer = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const framerItem = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function ProjectAbout() {
  // useContexts
  const { theme } = useContext(ThemeContext);
  const { externalLinks } = useContext(ExternalLinksContext);

  // useStates
  const [activeSection, setActiveSection] = useState(
    "supplements-and-vitamins",
  );

  // Datas
  const { contactLinks } = externalLinks;
  const { relatedProjects } = externalLinks;

  // useEffects for scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.main
      className="container mt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Left Navigation */}
      <div className="fixed right-4 hidden lg:flex">
        <ul className="space-y-4">
          <li className="group">
            <a
              href="#supplements-and-vitamins"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "supplements-and-vitamins" &&
                  "translate-x-14",
              )}
            >
              Supplements & Vitamins
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "supplements-and-vitamins" &&
                  "translate-x-14",
              )}
            ></div>
          </li>

          <li className="group">
            <a
              href="#tech-stack"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "tech-stack" && "translate-x-14",
              )}
            >
              Teknolojiler ve Araçlar
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "tech-stack" && "translate-x-14",
              )}
            ></div>
          </li>

          <li className="group">
            <a
              href="#repos"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "repos" && "translate-x-14",
              )}
            >
              Proje Repoları
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "repos" && "translate-x-14",
              )}
            ></div>
          </li>

          <li className="group">
            <a
              href="#contribution"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "contribution" && "translate-x-14",
              )}
            >
              Projelere Katkı
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "contribution" && "translate-x-14",
              )}
            ></div>
          </li>

          <li className="group">
            <a
              href="#contact"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "contact" && "translate-x-14",
              )}
            >
              İletişim
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "contact" && "translate-x-14",
              )}
            ></div>
          </li>

          <li className="group">
            <a
              href="#sources-and-references"
              className={twMerge(
                "flex translate-x-20 text-light transition-transform delay-75 duration-700 group-hover:translate-x-0 group-hover:text-mid",
                activeSection === "sources-and-references" && "translate-x-14",
              )}
            >
              Kaynak & Referanslar
            </a>
            <div
              className={twMerge(
                "h-1 w-full translate-x-20 bg-brand transition-transform duration-500 group-hover:translate-x-0",
                activeSection === "sources-and-references" && "translate-x-14",
              )}
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
          bazı durumlara özel olabilir ve sizin durumunuz için gerçekten fayda
          sağlamayabilir. İşte bu noktada, sizin için ihtiyacınız olabilecek
          supplementleri, birbirini tekrar eden kopya içerikli “pazarlama
          içerikleri”nden ve kâr amacı ile takviyeyi öven içeriklerden uzak bir
          şekilde bir araya getirdik. Ardınan ihtiyacınıza uygun takviye gıdayı
          kendiniz keşfetmenize olanak tanımak için bu projeyi hayata geçirdik.
        </Text>
        <Text className="mt-6">
          Bu projeyi geliştirmek, useEffect, React optimizasyonları (React.memo,
          useMemo, useCallback), Context API ile durum yönetimi ve RESTful
          API'lerle çalışma gibi React ile ilgili deneyim kazanmama yardımcı
          oldu. Bu deneyim aynı zamanda react-router ile çok sayfalı uygulama ve
          Framer Motion ve Tailwindcss ile animasyonu da içeriyor.
          <br />
          Bunun yanında Back-end tarafında RESTful API yazma konusunda beceri
          kazandım ve front-end tarafında verinin nasıl işlendiğini anlamak
          açısından da faydalı oldu. Dolayısıyla proje geliştirme sürecinde hem
          front-end hem de back-end çalışmalarında kapsamlı bir bakış açısı
          kazandığımı söyleyebilirim.
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
      <motion.section className="mt-14" id="tech-stack">
        <Title size="lg">Teknoloji ve Araçlar</Title>
        <Text className="mt-4" isSubtext>
          Proje genelinde kullandığım tüm teknoloji ve araçlar setini aşağıda
          bulabilirsiniz.
        </Text>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={framerContainer}
        >
          <motion.div variants={framerItem}>
            <Title className="text-center">Front-end</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={ReactLogo}
                alt="react.js logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={ReactRouterLogo}
                alt="reactrouter logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={ViteLogo}
                alt="vite.js logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={theme === "light" ? FramerLogo : FramerLogoDark}
                alt="framer logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={TailwindLogo}
                alt="tailwindcss logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />
            </PreviewCard>
          </motion.div>

          <motion.div variants={framerItem}>
            <Title className="text-center">Back-end</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={NodeLogo}
                alt="node.js logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={theme === "light" ? ExpressLogo : ExpressLogoDark}
                alt="express.js logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />

              <img
                src={MongoLogo}
                alt="mongodb logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />
            </PreviewCard>
          </motion.div>

          <motion.div variants={framerItem}>
            <Title className="text-center">Hosting</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={theme === "light" ? VercelLogo : VercelLogoDark}
                alt="vercel logo"
                className="h-14 cursor-pointer duration-700 hover:scale-105"
              />
            </PreviewCard>
          </motion.div>

          <motion.div variants={framerItem}>
            <Title className="text-center">Design</Title>
            <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
              <img
                src={FigmaLogo}
                alt="Figma logo"
                className="cursor-pointer duration-700 hover:scale-105"
              />
            </PreviewCard>
          </motion.div>
        </motion.div>
      </motion.section>
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

        <div className="mt-6 flex gap-5">
          {relatedProjects.map((value, index) => (
            <Link
              key={index}
              href={value.href}
              target="blank"
              icon={value.icon}
            >
              {value.title}
            </Link>
          ))}
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

        <div className="mt-6 flex gap-3">
          {contactLinks.map((value, index) => (
            <Link
              key={index}
              href={value.href}
              target="_blank"
              icon={value.icon}
            ></Link>
          ))}
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

        <ul className="ml-6 mt-4 list-disc space-y-3">
          <li className="dark:text-light">
            <Link
              href="https://www.youtube.com/watch?v=z3LFfY3AhVQ"
              target="_blank"
            >
              Kaynak Video Linki:
            </Link>{" "}
            Projede bana ilham kaynağı olan ve bilgileri, öneri ve
            puanlandırmayı kaynak olarak kullandığım video içeriğine başlıktaki
            linkten veya{" "}
            <Link
              href="https://www.youtube.com/watch?v=z3LFfY3AhVQ"
              target="_blank"
            >
              buradan
            </Link>{" "}
            ulaşabilirsiniz
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
    </motion.main>
  );
}

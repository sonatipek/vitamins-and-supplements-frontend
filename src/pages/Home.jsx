import {
  ChevronRight,
  DumbbellIcon,
  HeartPulseIcon,
  PillIcon,
  ShieldPlusIcon,
} from "lucide-react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Link from "../components/ui/Link";
import PreviewCard from "../components/ui/PreviewCard";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import TitleWithDesc from "../components/ui/TitleWithDesc";
import Card from "../components/ui/Card";

import { motion } from "framer-motion";

const previewCardContents = [
  {
    tag: "Öneririz",
    title: "D Vitamini",
    suggestion:
      "Eksikliği çok sık rastlandığı için özellikle kış aylarında her yetişkin bireyin vitamin D3 takviyesi almasını öneririz",
  },
  {
    tag: "Öncelikli Değil",
    title: "BCAA",
    suggestion: "2:1:1 oranına sahip ürünler tercih edilebilir",
  },
  {
    tag: "Özel Durumlarda Alınabilir",
    title: "Glutamin",
    suggestion:
      "Yanık, yaralanma veya ameliyat sonrası durumlarda kullanılması faydalıdır",
  },
];

const forWhomContents = [
  {
    icon: <DumbbellIcon />,
    title: "Sporcular",
    desc: "Performansını artırıp, yüksek ihtiyaçlarını karşılamak isteyen sporcular",
    //
  },
  {
    icon: <HeartPulseIcon />,
    title: "Sağlık Bilinci Yüksek Bireyler",
    desc: "İhtiyaçlarının farkında olup, en doğru takviyeyi araştıran bireyler",
    //
  },
  {
    icon: <PillIcon />,
    title: "Bilgi Edinmek İsteyenler",
    desc: "Vitamin ve Supplementler hakkında bilgi edinmek isteyen bireyler",
  },
  //
  {
    icon: <ShieldPlusIcon />,
    title: "Alışkanlık Kazanmak İsteyenler",
    desc: "Dengeli beslenme alışkanlıklarını geliştirmek isteyen bireyler",
    //
  },
];

const contributors = [
  {
    name: "Eren Kahveci",
    img: "https://mir-s3-cdn-cf.behance.net/user/115/f1d5ea1120701863.65c4c5225975f.jpg",
    url: "https://www.linkedin.com/in/erenkahveci/",
    role: "UI/UX Designer",
  },
  {
    name: "Sonat İpek",
    img: "https://avatars.githubusercontent.com/u/80075444?v=4",
    url: "https://www.linkedin.com/in/sonatipek/",
    role: "Full Stack Developer",
  },
];

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero />

      <div className="container text-center">
        <TitleWithDesc
          title="Vitamins & Supplements"
          desc="Beslenme programınızı en uygun şekilde destekleyin."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-start">
          {previewCardContents.map((value, index) => (
            <PreviewCard key={index}>
              <Text type="subtext" className="font-bold !text-brand">
                {value.tag}
              </Text>
              <Title className="font-semibold text-2xl">{value.title}</Title>

              <Text type="subtext" className="mt-2 line-clamp-2 !text-base">
                {value.suggestion}
              </Text>
            </PreviewCard>
          ))}
        </div>
        <Link
          classname="mt-10 !text-brand !no-underline !font-semibold"
          href="/supplements"
        >
          Tamamını Gör
          <ChevronRight
            size={16}
            className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="container text-center mt-32">
        <TitleWithDesc
          title="Kimlere Yönelik"
          desc="Başlıca aşağıdaki grubu içerse de tek seferlik takviye kullanmak zorunda kalan, bir probleme çözüm arayan herkese yöneliktir."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 mt-6 px-6 sm:px-12 md:px-0">
          {forWhomContents.map((value, index) => (
            <Card title={value.title} icon={value.icon} key={index}>
              {value.desc}
            </Card>
          ))}
        </div>
      </div>

      <Features />

      <div className="container mt-36 text-center">
        <TitleWithDesc
          title="Katkıda Bulunanlar"
          desc="Projede, büyük-küçük demeden herhangi bir şekilde emeği olanlar"
        />

        <div className="flex items-center justify-center gap-3 mt-6">
          {contributors.map((value, index) => (
            <a
              key={index}
              href={value.url}
              className="border p-2 rounded-lg group flex justify-start items-center gap-3"
            >
              <img
                className="rounded-full size-11 grayscale group-hover:grayscale-0 transition-all duration-500"
                src={value.img}
                alt={value.name}
              />
              <div className="text-start">
                <span className="text-lg text-mid font-medium group-hover:text-brand transition-colors duration-500">{value.name}</span>
                <Text type="subtext" className="text-mid">
                  {value.role}
                </Text>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

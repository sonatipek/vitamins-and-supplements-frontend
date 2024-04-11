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

        <div className="mt-6 grid grid-cols-1 gap-6 text-start md:grid-cols-2 lg:grid-cols-3">
          {previewCardContents.map((value, index) => (
            <PreviewCard key={index}>
              <Text isSubtext className="font-bold !text-brand">
                {value.tag}
              </Text>
              <Title className="text-2xl font-semibold">{value.title}</Title>

              <Text isSubtext className="mt-2 line-clamp-2 !text-base">
                {value.suggestion}
              </Text>
            </PreviewCard>
          ))}
        </div>
        <Link className="mt-10" href="/supplements" variant="primary-link">
          Tamamını Gör
          <ChevronRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="container mt-32 text-center">
        <TitleWithDesc
          title="Kimlere Yönelik"
          desc="Başlıca aşağıdaki grubu içerse de tek seferlik takviye kullanmak zorunda kalan, bir probleme çözüm arayan herkese yöneliktir."
        />
        <div className="mt-6 grid grid-cols-1 gap-0 px-6 sm:grid-cols-2 sm:px-12 md:gap-6 md:px-0 lg:grid-cols-4">
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
          desc="Projede, büyük-küçük demeden herhangi bir şekilde emeği geçenler"
        />

        <div className="mt-6 flex items-center justify-center gap-3">
          {contributors.map((value, index) => (
            <a
              key={index}
              href={value.url}
              className="group flex items-center justify-start gap-3 rounded-lg border p-2"
            >
              <img
                className="size-11 rounded-full grayscale transition-all duration-500 group-hover:grayscale-0"
                src={value.img}
                alt={value.name}
              />
              <div className="text-start">
                <span className="text-lg font-medium text-mid transition-colors duration-500 group-hover:text-brand">
                  {value.name}
                </span>
                <Text isSubtext className="text-mid">
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

import { Users, Info, ShieldCheck } from "lucide-react";

import Card from "./ui/Card";
import Link from "./ui/Link";
import Illustration from "../assets/feature_illustration.svg";

const featuresList = [
  {
    icon: <Users />,
    title: "Kullanıcı Dostu Arayüz",
    desc: "Küçük kartlar halinde listelenen vitamin ve supplementler arasında kolayca gezinerek, ihtiyacınıza uygun olanı bulabilirsiniz.",
  },
  {
    icon: <Info />,
    title: "Veri Odakalı",
    desc: "Her bir takviye hakkında öz bilgi sunuyoruz. Hangi takviyelerin ihtiyacınızı karşılayabileceğini öğrenmek için doğru adrestesiniz.",
  },
  {
    icon: <ShieldCheck />,
    title: "Tarafsız Bilgi",
    desc: "Kâr amacı gütmüyoruz bu nedenle güncel ve tarafsız bilgiler sunarak en doğru içeriği sağlıyoruz.",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-r from-brand to-darkBrand mt-6 relative pt-14 md:pt-28 pb-7 md:pb-14 overflow-hidden">
      <img
        src={Illustration}
        className="hidden xl:inline absolute right-0 xl:-right-10 2xl:right-0 bottom-0"
        alt="illustration of a man holding an apple"
      />

      <div className="container flex flex-col items-center">
        <div className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {featuresList.map((value, index) => (
            <Card title={value.title} icon={value.icon} key={index}>
              {value.desc}
            </Card>
          ))}
        </div>

        <Link
          type="button"
          href="/supplements"
          classname="!shadow-none !py-2 mt-7 md:mt-14 max-w-fit"
          color="white"
        >
          Hemen Keşfet
        </Link>
      </div>
    </section>
  );
}

import { Users, Info, ShieldCheck, ChevronRight } from "lucide-react";

// UI Components
import Card from "./ui/Card";
import Illustration from "../assets/feature_illustration.svg";
import Title from "./ui/Title";
import Text from "./ui/Text";
import Link from "./ui/Link";

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
    <section className="relative mt-24 overflow-hidden pb-7 pt-14 md:pb-14 md:pt-28">
      <img
        src={Illustration}
        className="absolute bottom-0 right-0 hidden xl:-right-10 xl:inline 2xl:right-0"
        alt="illustration of a man holding an apple"
      />

      <div className="container flex flex-col items-center text-center">
        <Title className="bg-gradient-to-r from-brand to-darkBrand bg-clip-text !font-bold text-transparent dark:text-transparent">
          Amacımız ne?
        </Title>
        <Title size="lg" className="!font-bold">
          Gerçekten İhtiyaç Mı?
        </Title>
        <Text className="mt-2 px-1 text-xl text-mid md:px-6 lg:px-12 xl:px-36">
          Bazen “Bu takviyeye gerçekten ihtiyacım var mı?” sorusunun cevabını
          ararken uzun kaynaklar arasında kaybolabilir, pazarlamacıların kurbanı
          olabiliriz veya tam olarak ihtiyacımız olan takviyeyi bulmak zor
          olabilir. Bu tür ihtiyaçlar sırasında gerekli araştırmanın zaman
          maliyetini düşürmek ve kullanıcıların sağlıklı yaşam alışkanlıklarını
          daha kolay oluşturmasını sağlamak amacıyla oluşturulmuştur.
        </Text>

        <Title className="mb-2 mt-14 bg-gradient-to-r from-brand to-darkBrand bg-clip-text !font-bold text-transparent dark:text-transparent">
          Takviyelere ne kadar ihtiyacınız var?
        </Title>
        <Text className="px-1 text-mid md:px-6 lg:px-12 xl:px-36">
          Günlük aktivitemize veya spor alışkanlıklarımıza göre takviye gıdalara
          ihtiyaç duyabiliriz. Ancak takviyeler sizin durumunuz için gerçekten
          faydalı mı? İşte tam bu noktada, sizin için ihtiyacınız olabilecek
          supplementleri, birbirini tekrar eden kopya içerikli “pazarlama
          içerikleri”nden, kâr amacı ile takviyeyi öven içeriklerden uzak bir
          şekilde kendiniz keşfetmenize olanak tanımak istiyoruz.
        </Text>
        <div className="grid gap-2 px-6 sm:px-24 md:grid-cols-3 md:gap-4 md:px-0 lg:gap-6 lg:px-12 xl:px-36">
          {featuresList.map((value, index) => (
            <Card title={value.title} icon={value.icon} key={index}>
              {value.desc}
            </Card>
          ))}
        </div>
        <Link className="mt-10" href="/supplements" variant="primary-link">
          Hemen Keşfet
          <ChevronRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

import { Users, Info, ShieldCheck } from "lucide-react";

import Card from "./ui/Card";
import Illustration from "../assets/feature_illustration.svg";
import Title from "./ui/Title";
import Text from "./ui/Text";

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
    <section className="relative pt-14 md:pt-28 pb-7 md:pb-14 overflow-hidden">
      <img
        src={Illustration}
        className="hidden xl:inline absolute right-0 xl:-right-10 2xl:right-0 bottom-0"
        alt="illustration of a man holding an apple"
      />

      <div className="container flex flex-col items-center text-center">
        <Title className="!font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-darkBrand">
          Amacımız ne?
        </Title>
        <Title size="lg" className="!font-bold !text-dark">
          Gerçekten İhtiyaç Mı?
        </Title>
        <Text className="text-mid text-xl mt-2 px-48">
          Bazen “Bu takviyeye gerçekten ihtiyacım var mı?” sorusunun cevabını
          ararken uzun kaynaklar arasında kaybolabilir, pazarlamacıların kurbanı
          olabiliriz veya tam olarak ihtiyacımız olan takviyeyi bulmak zor
          olabilir. Bu tür ihtiyaçlar sırasında gerekli araştırmanın zaman
          maliyetini düşürmek ve kullanıcıların sağlıklı yaşam alışkanlıklarını
          daha kolay oluşturmasını sağlamak amacıyla oluşturulmuştur.
        </Text>

        <Title className="!font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-darkBrand mt-14 mb-2">
          Takviyelere ne kadar ihtiyacınız var?
        </Title>
        <Text className="text-mid px-48">
          Günlük aktivitemize veya spor alışkanlıklarımıza göre takviye gıdalara
          ihtiyaç duyabiliriz. Ancak takviyeler sizin durumunuz için gerçekten
          faydalı mı? İşte tam bu noktada, sizin için ihtiyacınız olabilecek
          supplementleri, birbirini tekrar eden kopya içerikli “pazarlama
          içerikleri”nden, kâr amacı ile takviyeyi öven içeriklerden uzak bir
          şekilde kendiniz keşfetmenize olanak tanımak istiyoruz.
        </Text>
        <div className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 px-24">
          {featuresList.map((value, index) => (
            <Card title={value.title} icon={value.icon} key={index}>
              {value.desc}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

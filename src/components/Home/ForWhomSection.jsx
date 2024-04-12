// Icons
import {
  DumbbellIcon,
  HeartPulseIcon,
  PillIcon,
  ShieldPlusIcon,
} from "lucide-react";

// UI Components
import Card from "../ui/Card";
import TitleWithDesc from "../ui/TitleWithDesc";

// Data
const contents = [
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

export default function ForWhomSection() {
  return (
    <div className="container mt-32 text-center">
      <TitleWithDesc
        title="Kimlere Yönelik"
        desc="Başlıca aşağıdaki grubu içerse de tek seferlik takviye kullanmak zorunda kalan, bir probleme çözüm arayan herkese yöneliktir."
      />
      <div className="mt-6 grid grid-cols-1 gap-0 px-6 sm:grid-cols-2 sm:px-12 md:gap-6 md:px-0 lg:grid-cols-4">
        {contents.map((value, index) => (
          <Card title={value.title} icon={value.icon} key={index}>
            {value.desc}
          </Card>
        ))}
      </div>
    </div>
  );
}

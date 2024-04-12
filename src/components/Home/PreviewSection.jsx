// Icons
import { ChevronRight } from "lucide-react";

// UI Components
import Link from "../ui/Link";
import PreviewCard from "../ui/PreviewCard";
import Text from "../ui/Text";
import Title from "../ui/Title";
import TitleWithDesc from "../ui/TitleWithDesc";

// Data
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

export default function PreviewSection() {
  return (
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
  );
}

// UI Components
import Link from "../ui/Link";
import Title from "../ui/Title";

export default function SourceSection() {
  return (
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
          Projede bana ilham kaynağı olan ve bilgileri, öneri ve puanlandırmayı
          kaynak olarak kullandığım video içeriğine başlıktaki linkten veya{" "}
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
  );
}

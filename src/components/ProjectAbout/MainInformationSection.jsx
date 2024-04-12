/* eslint-disable react/no-unescaped-entities */

// UI Components
import List from "../ui/List";
import Text from "../ui/Text";
import Title from "../ui/Title";

// Data
const mainFeaturesContent = [
  "Vitamin ve Supplementler arasında sekme geçişi",
  "Context API kullanarak dark-light tema değişimi",
  "Vitamin ve Supplementleri kategoriye göre filtreleyebilme",
  "RESTful API ile servisten gelen bilgiler ile dinamik içerik",
  "Animasyonlar ile desteklenen sade arayüz",
  "Backend servisi için temel CRUD (Create, Read, Update, Delete) işlemleri.",
];

export default function MainInformationSection() {
  return (
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
        gerekliymiş gibi kullanmalarını gözlemledim. Ancak bu ek takviyeler bazı
        durumlara özel olabilir ve sizin durumunuz için gerçekten fayda
        sağlamayabilir. İşte bu noktada, sizin için ihtiyacınız olabilecek
        supplementleri, birbirini tekrar eden kopya içerikli “pazarlama
        içerikleri”nden ve kâr amacı ile takviyeyi öven içeriklerden uzak bir
        şekilde bir araya getirdik. Ardınan ihtiyacınıza uygun takviye gıdayı
        kendiniz keşfetmenize olanak tanımak için bu projeyi hayata geçirdik.
      </Text>
      <Text className="mt-6">
        Bu projeyi geliştirmek, useEffect, React optimizasyonları (React.memo,
        useMemo, useCallback), Context API ile durum yönetimi ve RESTful
        API'lerle çalışma gibi React ile ilgili deneyim kazanmama yardımcı oldu.
        Bu deneyim aynı zamanda react-router ile çok sayfalı uygulama ve Framer
        Motion ve Tailwindcss ile animasyonu da içeriyor.
        <br />
        Bunun yanında Back-end tarafında RESTful API yazma konusunda beceri
        kazandım ve front-end tarafında verinin nasıl işlendiğini anlamak
        açısından da faydalı oldu. Dolayısıyla proje geliştirme sürecinde hem
        front-end hem de back-end çalışmalarında kapsamlı bir bakış açısı
        kazandığımı söyleyebilirim.
      </Text>

      <div className="mt-6">
        <h6 className="font-medium dark:text-light">Başlıca Özellikler:</h6>
        <List listElements={mainFeaturesContent}></List>
      </div>
    </section>
  );
}

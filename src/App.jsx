import Features from "./components/Features";
import Hero from "./components/Hero";
import Paragraph from "./components/Paragraph";
import List from "./components/ui/List";

function App() {
  return (
    <>
      <Hero />

      <Paragraph
        title="Vitamins & Supplements"
        description="Bazen “Bu takviyeye gerçekten ihtiyacım var mı?” sorusunun cevabını ararken uzun kaynaklar arasında kaybolabilir, pazarlamacıların kurbanı olabiliriz veya tam olarak ihtiyacımız olan takviyeyi bulmak zor olabilir. Aynı zamanda ürünlerin zamanlaması ve dozajı konusunda da kafa karışıklığı yaşayabiliriz. Bu noktada, hap bilgiler sunan bir video içeriği sonrasında ortaya çıkan bu fikir; kullanıcı dostu bir arayüz ile buluşarak, bu sorunlara çözüm sunmayı hedefler. Sedanter bireyler günlük hayatın yoğunluğu içinde dengeli beslenme alışkanlıklarını ihmal edebilirler,  sporcular ise yüksek besin ihtiyaçlarını karşılamak gibi sebeplerle ek takviyelere ihtiyaç duyarlar. Bu tür ihtiyaçlar sırasında gerekli araştırmanın zaman maliyetini düşürmek ve kullanıcıların sağlıklı yaşam alışkanlıklarını daha kolay oluşturmasını sağlamak amacıyla oluşturulmuştur."
      />
      <Paragraph
        title="Neden Kullanmalısın ?"
        description="Sağlıklı bir yaşam tarzı sürdürmek ve zindelikten maksimum düzeyde faydalanmak için doğru beslenmemiz gerekir. Bunun için de günlük aktivitenize veya spor alışkanlıklarınıza göre ek takviyelere ihtiyaç duyabiliriz. Ancak bu ek takviyelere ne kadar ihtiyacınız var? Bu ek takviyeler sizin durumunuz için gerçekten faydalı mı? İşte tam bu noktada, sizin için ihtiyacınız olabilecek supplementleri, birbirini tekrar eden kopya içerikli “pazarlama içerikleri”nden, kâr amacı ile takviyeyi öven içeriklerden uzak bir şekilde kendiniz keşfetmenize olanak tanımak istiyoruz. "
      />

      <Features />

      <Paragraph
        title="Kimlere Yönelik"
        description="Başlıca aşağıdaki grubu içerse de tek seferlik takviye kullanmak zorunda kalan, bir probleme çözüm arayan herkese yöneliktir."
      />
      <List listElements={["Sporcular", "Beslenme ve takviyeler hakkında bilgi edinmek isteyenler", "Sağlık bilinci yüksek bireyler", "Dengeli beslenme alışkanlıklarını geliştirmek isteyenler"]}/>
    </>
  );
}

export default App;

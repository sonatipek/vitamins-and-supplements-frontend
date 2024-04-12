// UI Components
import Text from "../ui/Text";
import Title from "../ui/Title";

export default function ContributionSection() {
  return (
    <section className="mt-14" id="contribution">
      <Title size="lg">Projelere Katkı</Title>
      <Text className="mt-4">
        Github üzerinden kodları inceleyip, proje repoları başlığında bulunan
        linkler üzerinden katkıda bulunabilirsiniz. Bulduğunuz hataları
        bildirmek, tasarım veya kod iyileştirmelerinden bahsederek, kendimi
        geliştirmeme de katkıda bulunabilirsiniz.
      </Text>
    </section>
  );
}

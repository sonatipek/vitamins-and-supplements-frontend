import { useContext } from "react";

// UI Components
import Link from "../ui/Link";
import Text from "../ui/Text";
import Title from "../ui/Title";

// Contexts
import { ExternalLinksContext } from "../../contexts/ExternalLinksContext";

export default function RelatedProjectsSection() {
  const { externalLinks } = useContext(ExternalLinksContext);
  const { relatedProjects } = externalLinks;
  
  return (
    <section className="mt-14" id="repos">
      <Title size="lg">Proje Repoları</Title>
      <Text className="mt-4">
        Projenin her iki tarafı için de katkılarınıza açığım, lütfen katkıda
        bulunmaktan çekinmeyin. Projede kullanmak üzere geliştirdiğim apiye
        ulaşmak ve katkı sağlamak isterseniz aşağıdaki beckend projesinin github
        linkine de ulaşabilirsiniz. Lütfen geliştirme ile ilgili fikir ve
        önerileriniz varsa bana iletin.
      </Text>

      <div className="mt-6 flex gap-5">
        {relatedProjects.map((value, index) => (
          <Link key={index} href={value.href} target="blank" icon={value.icon}>
            {value.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

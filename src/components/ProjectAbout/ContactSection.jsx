import { useContext } from "react";

// UI Components
import Link from "../ui/Link";
import Text from "../ui/Text";
import Title from "../ui/Title";

// Icons
import { MailIcon } from "lucide-react";

// Contexts
import { ExternalLinksContext } from "../../contexts/ExternalLinksContext";

export default function ContactSection() {
  const { externalLinks } = useContext(ExternalLinksContext);
  const { contactLinks } = externalLinks;

  return (
    <section className="mt-28" id="contact">
      <Title size="lg">İletişim</Title>
      <Text className="mt-4">
        Lütfen proje hakkında geri bildirmlerinizi bildirmekten çekinmeyin.
        Tsaarımsal, yazılımsal her türlü geri bildiriminiz kendimi geliştirmem
        için çok değerli. Lütfen eleştirmekten çekinmeyin. aşağdaki iletişim
        kanallarımdan kendinizi rahat hissedeceğiniz herhangi biriyle benimle
        iletişime geçebilirisniz.
      </Text>

      <div className="mt-6 flex gap-3">
        {contactLinks.map((value, index) => (
          <Link
            key={index}
            href={value.href}
            target="_blank"
            icon={value.icon}
          ></Link>
        ))}
        <Link
          href="mailto:sonatsayginipek@gmail.com"
          target="_blank"
          icon={<MailIcon />}
        ></Link>
      </div>
    </section>
  );
}

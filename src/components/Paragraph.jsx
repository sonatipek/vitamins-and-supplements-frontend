import Text from "./ui/Text"
import Title from "./ui/Title"
export default function Paragraph({title, description}) {
  return (
    <section className="container px-6 lg:px-28 mt-14">
        <Title size="lg" className="text-center">{title}</Title>
        <Text className="text-justify">{description}</Text>
    </section>
  )
}

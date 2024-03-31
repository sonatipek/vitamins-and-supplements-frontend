import Text from "./Text";
import Title from "./Title";

export default function TitleWithDesc({ title, desc }) {
  return (
    <div>
      <Title size="lg" className="font-semibold !text-brand !text-4xl">
        {title}
      </Title>
      <Text className="text-xl !text-mid">{desc}</Text>
    </div>
  );
}

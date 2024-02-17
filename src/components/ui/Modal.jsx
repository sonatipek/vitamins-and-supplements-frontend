import { XIcon, PillIcon, Clock10Icon } from "lucide-react";
import Badge from "./Badge";
import Title from "./Title";
import Text from "./Text";
import Rating from "./Rating";

export default function Modal({
  supplement,
  onClick,
}) {
  return (
    <div className="fixed top-0 pt-[15svh] left-0 flex justify-center mx-auto w-screen h-screen z-50 backdrop-blur-sm backdrop-brightness-50 px-10 sm:px-24 md:px-48 lg:px-64 bg-transparent">
      <div className="p-6 shadow-lg rounded-xl z-50 bg-white w-full mx-auto xl:w-1/3 h-fit">
        {/* head */}
        <div className="flex justify-between items-start mb-4">
          <Title size="lg">{supplement.name}</Title>
          <button onClick={onClick}>
            <XIcon />
          </button>
        </div>
        {/* head end */}

        <Rating className="mb-3" rate={supplement.rating} />

        <Badge>{supplement.recommendation}</Badge>

        <ul className="w-full bg-light rounded-md p-2 mt-3">
          {supplement.tags.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        <div className="w-full flex mt-3">
          <div className="w-full bg-brand p-2 text-white">
            <h5 className="text-white">Faydaları</h5>
            <ul>
              {supplement.benefits.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="w-full bg-light p-2">
            <h5 className="">Kim Kullanmalı?</h5>
            <ul>
              {supplement.whoShouldUse.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-3 md:gap-12">
          <div className="py-2 px-4 shadow flex items-center gap-2 w-full">
            <PillIcon />
            <div>
              <Title>Doz</Title>
              <Text type="subtext">{supplement.dose}</Text>
            </div>
          </div>
          <div className="py-2 px-4 shadow flex items-center gap-2">
            <Clock10Icon />
            <div>
              <Title>Zamanlama</Title>
              <Text type="subtext">{supplement.timing}</Text>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="border-t mt-10 pt-3">
          <h6>Öneriler</h6>
          <ul className="list-disc">
            {supplement.suggestions.map((value, index) => (
              <li key={index} className="ml-6">
                {value}
              </li>
            ))}
          </ul>
        </div>
        {/* footer end */}
      </div>
    </div>
  );
}

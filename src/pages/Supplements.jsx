import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { PillIcon, GlassWaterIcon, ListIcon } from "lucide-react";

// Components
import Title from "../components/ui/Title.jsx";
import Text from "../components/ui/Text";
import Badge from "../components/ui/Badge.jsx";
import Rating from "../components/ui/Rating.jsx";
import PreviewCard from "../components/ui/PreviewCard.jsx";
import Modal from "../components/ui/Modal.jsx";

const tabs = [
  { icon: <ListIcon strokeWidth={1.5} />, text: "Tümü" },
  { icon: <GlassWaterIcon strokeWidth={1.5} />, text: "Supplements" },
  { icon: <PillIcon strokeWidth={1.5} />, text: "Vitamins" },
];

export function Supplements() {
  const supplements = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="container">
      <form action="#" className="flex items-center justify-center mb-14 mt-28">
        <input
          type="text"
          className="border rounded-l-md border-darkest dark:border-white px-6 py-3 w-full bg-transparent text-darkest dark:text-white placeholder:text-mid focus:ring-0 focus:outline-none"
          placeholder="Supplement Ara"
        />
        <button type="submit" className="border rounded-r-md border-darkest bg-white dark:border-white px-6 py-3 bg-transparent text-dark font-medium">Ara</button>
      </form>
      <Tab.Group>
        <Tab.List className="border-b border-light dark:border-dark flex gap-5 overflow-x-auto">
          {tabs.map((value, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex justify-center items-center gap-2 px-1 py-2 ${
                    selected
                      ? "text-brand font-medium border-b-2 border-brand"
                      : "text-mid hover:text-dark dark:hover:text-light"
                  }`}
                >
                  {value.icon} {value.text}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Title size="md" className="mt-6">
          Kategoriler
        </Title>
        <ul className="mt-3">
          <Badge>category</Badge>
        </ul>

        <Tab.Panels className="mt-14">
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplements.map((value, index) => (
              <PreviewCard
                key={index}
                className="flex items-center justify-between"
              >
                <div>
                  <Title size="md">{value.name}</Title>
                  <Text type="subtext">Vitamin/ Supplement</Text>
                  <button onClick={() => setIsModalOpen(true)} className="mt-3 text-xs text-mid hover:underline underline-offset-2 decoration-brand">
                    Detay Göster
                  </button>
                </div>

                <div className="flex flex-col items-end">
                  <Title size="sm">{value.recommendation}</Title>
                  <Rating rate={value.rating} />
                </div>

                {isModalOpen && (
                  <Modal
                    supplement={value}
                    onClick={() => setIsModalOpen((prev) => !prev)}
                  />
                )}
              </PreviewCard>
            ))}
          </Tab.Panel>
          <Tab.Panel>
            <Text>Content 2</Text>
          </Tab.Panel>
          <Tab.Panel>
            <Text>Content 3</Text>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}

export async function SupplementsLoader() {
  const supplements = await axios.get(
    "https://vitamins-and-supplements.vercel.app/api/supplement",
    {
      headers: {
        "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
      },
    }
  );
  const vitamins = await axios.get(
    "https://vitamins-and-supplements.vercel.app/api/vitamin",
    {
      headers: {
        "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
      },
    }
  );

  return [...vitamins.data, ...supplements.data];
}

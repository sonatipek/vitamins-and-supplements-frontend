import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { PillIcon, GlassWaterIcon, ListIcon } from "lucide-react";
import NoData from "../assets/no_data_illustration.svg";

// Components
import Title from "../components/ui/Title.jsx";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [vitamins, setVitamins] = useState([]);
  const [supplements, setSupplements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch(
      "https://vitamins-and-supplements.vercel.app/api/category/supplements",
      {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      }
    )
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  useEffect(() => {
    fetch(
      selectedCategory
        ? "https://vitamins-and-supplements.vercel.app/api/vitamin/" +
            selectedCategory
        : "https://vitamins-and-supplements.vercel.app/api/vitamin",
      {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      }
    )
      .then((response) => response.json())
      .then((json) =>
        json.success == false ? setVitamins([]) : setVitamins(json)
      );
  }, [selectedCategory]);

  useEffect(() => {
    fetch(
      selectedCategory
        ? "https://vitamins-and-supplements.vercel.app/api/supplement/" +
            selectedCategory
        : "https://vitamins-and-supplements.vercel.app/api/supplement",
      {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      }
    )
      .then((response) => response.json())
      .then((json) => setSupplements(json));
  }, [selectedCategory]);

  return (
    <section className="container">
      <form action="#" className="flex items-center justify-center mb-14 mt-28">
        <input
          type="text"
          className="border rounded-l-md border-darkest dark:border-white px-6 py-3 w-full bg-transparent text-darkest dark:text-white placeholder:text-mid focus:ring-0 focus:outline-none"
          placeholder="Supplement Ara"
        />
        <button
          type="submit"
          className="border rounded-r-md border-darkest bg-white dark:border-white px-6 py-3 bg-transparent text-dark font-medium"
        >
          Ara
        </button>
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
          {categories.map((item) => (
            <Badge
              key={item}
              onClick={(e) => setSelectedCategory(e.target.innerHTML)}
              className={selectedCategory === item && "bg-red-200"}
            >
              {item}
            </Badge>
          ))}
        </ul>

        <Tab.Panels className="mt-14">
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vitamins &&
              vitamins.map((value, index) => (
                <PreviewCard
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>
                    <Title size="md">{value.name}</Title>
                    <button
                      onClick={(e) => setIsModalOpen(e.target.id)}
                      className="mt-3 text-sm text-mid hover:underline underline-offset-2 decoration-brand"
                      id={value.name}
                    >
                      Detay Göster
                    </button>
                  </div>

                  <div className="flex flex-col items-end">
                    <Title size="sm">{value.recommendation}</Title>
                    <Rating rate={value.rating} />
                  </div>
                  <Modal
                    key={index}
                    supplement={value}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                  />
                </PreviewCard>
              ))}

            {supplements &&
              supplements.map((value, index) => (
                <PreviewCard
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>
                    <Title size="md">{value.name}</Title>
                    <button
                      onClick={(e) => setIsModalOpen(e.target.id)}
                      className="mt-3 text-sm text-mid hover:underline underline-offset-2 decoration-brand"
                      id={value.name}
                    >
                      Detay Göster
                    </button>
                  </div>

                  <div className="flex flex-col items-end">
                    <Title size="sm">{value.recommendation}</Title>
                    <Rating rate={value.rating} />
                  </div>
                  <Modal
                    key={index}
                    supplement={value}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                  />
                </PreviewCard>
              ))}

            {vitamins.length === 0 && supplements.length === 0 && (
              <div className="col-span-3">
                <Title size="sm" className="text-center mb-12">
                  {selectedCategory} kategorisi için bir takviye bulunmuyor.
                </Title>
                <img
                  src={NoData}
                  alt="no data illustration"
                  className="w-1/4 mx-auto"
                />
              </div>
            )}
          </Tab.Panel>

          {/* Supplements Tab */}
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplements &&
              supplements.map((value, index) => (
                <PreviewCard
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>
                    <Title size="md">{value.name}</Title>
                    <button
                      onClick={(e) => setIsModalOpen(e.target.id)}
                      className="mt-3 text-sm text-mid hover:underline underline-offset-2 decoration-brand"
                      id={value.name}
                    >
                      Detay Göster
                    </button>
                  </div>

                  <div className="flex flex-col items-end">
                    <Title size="sm">{value.recommendation}</Title>
                    <Rating rate={value.rating} />
                  </div>
                  <Modal
                    key={index}
                    supplement={value}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                  />
                </PreviewCard>
              ))}

            {supplements.length === 0 && (
              <div className="col-span-3">
                <Title size="sm" className="text-center mb-12">
                  {selectedCategory} kategorisi için bir supplement bulunmuyor.
                </Title>
                <img
                  src={NoData}
                  alt="no data illustration"
                  className="w-1/4 mx-auto"
                />
              </div>
            )}
          </Tab.Panel>
          {/* Supplements Tab End */}

          {/* Vitamins Tab */}
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vitamins &&
              vitamins.map((value, index) => (
                <PreviewCard
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>
                    <Title size="md">{value.name}</Title>
                    <button
                      onClick={(e) => setIsModalOpen(e.target.id)}
                      className="mt-3 text-sm text-mid hover:underline underline-offset-2 decoration-brand"
                      id={value.name}
                    >
                      Detay Göster
                    </button>
                  </div>

                  <div className="flex flex-col items-end">
                    <Title size="sm">{value.recommendation}</Title>
                    <Rating rate={value.rating} />
                  </div>
                  <Modal
                    key={index}
                    supplement={value}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                  />
                </PreviewCard>
              ))}
            {vitamins.length === 0 && (
              <div className="col-span-3">
                <Title size="sm" className="text-center mb-12">
                  {selectedCategory} kategorisi için bir vitamin bulunmuyor.
                </Title>
                <img
                  src={NoData}
                  alt="no data illustration"
                  className="w-1/4 mx-auto"
                />
              </div>
            )}
          </Tab.Panel>
          {/* Vitamins Tab End */}
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

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { PillIcon, GlassWaterIcon, ListIcon, ChevronRight } from "lucide-react";

// Assets
import EmptyFilter from "../assets/empty_illustration.svg";
import NoData from "../assets/no_data_illustration.svg";

// Components
import Title from "../components/ui/Title.jsx";
import Badge from "../components/ui/Badge.jsx";
import PreviewCard from "../components/ui/PreviewCard.jsx";
import Modal from "../components/ui/Modal.jsx";
import Text from "../components/ui/Text.jsx";
import TitleWithDesc from "../components/ui/TitleWithDesc.jsx";

const tabs = [
  { icon: <ListIcon strokeWidth={1.5} />, text: "Tümü" },
  { icon: <GlassWaterIcon strokeWidth={1.5} />, text: "Supplements" },
  { icon: <PillIcon strokeWidth={1.5} />, text: "Vitamins" },
];

const framerContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const framerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      },
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
      },
    )
      .then((response) => response.json())
      .then((json) =>
        json.success == false ? setVitamins([]) : setVitamins(json),
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
      },
    )
      .then((response) => response.json())
      .then((json) => setSupplements(json));
  }, [selectedCategory]);

  function searchTrigger(e) {
    e.preventDefault();

    fetch(
      e.target.children[0].value !== ""
        ? "https://vitamins-and-supplements.vercel.app/api/search/vitamin?name=" +
            e.target.children[0].value
        : "https://vitamins-and-supplements.vercel.app/api/vitamin",
      {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      },
    )
      .then((response) => response.json())
      .then((json) =>
        json.success == false ? setVitamins([]) : setVitamins(json),
      );

    fetch(
      e.target.children[0].value !== ""
        ? "https://vitamins-and-supplements.vercel.app/api/search/supplement?name=" +
            e.target.children[0].value
        : "https://vitamins-and-supplements.vercel.app/api/supplement",
      {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      },
    )
      .then((response) => response.json())
      .then((json) =>
        json.success == false ? setSupplements([]) : setSupplements(json),
      );
  }

  function searchKeyUpTrigger(e) {
    if (e.target.value === "") {
      fetch("https://vitamins-and-supplements.vercel.app/api/supplement", {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      })
        .then((response) => response.json())
        .then((json) =>
          json.success == false ? setSupplements([]) : setSupplements(json),
        );

      fetch("https://vitamins-and-supplements.vercel.app/api/vitamin", {
        headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
      })
        .then((response) => response.json())
        .then((json) =>
          json.success == false ? setVitamins([]) : setVitamins(json),
        );
    }
  }

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form
        action="#"
        className="mb-14 mt-28 flex items-center justify-center px-6 lg:px-56"
        onSubmit={(e) => searchTrigger(e)}
      >
        <input
          type="text"
          className="w-full rounded-l-md border border-darkest bg-transparent px-3 py-2 text-darkest placeholder:text-mid focus:outline-none focus:ring-0 dark:border-white dark:text-white"
          placeholder="Supplement Ara"
          onKeyUp={(e) => searchKeyUpTrigger(e)}
        />
        <button
          type="submit"
          className="rounded-r-md border border-darkest bg-transparent bg-white px-3 py-2 font-medium text-dark dark:border-white"
        >
          Ara
        </button>
      </form>
      <Tab.Group>
        <Tab.List className="flex gap-5 overflow-x-auto border-b border-light dark:border-dark">
          {tabs.map((value, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex items-center justify-center gap-2 px-1 py-2 ${
                    selected
                      ? "border-b-2 border-brand font-medium text-brand"
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
              isSelected={selectedCategory === item}
            >
              {item}
            </Badge>
          ))}
          <button
            className="ml-6 text-brand hover:text-brand/80"
            onClick={() => setSelectedCategory()}
          >
            Filtreyi Temizle
          </button>
        </ul>

        <Tab.Panels className="mt-14">
          {/* General Tab */}
          <Tab.Panel>
            {(vitamins.length !== 0 || supplements.length !== 0) && (
              <div>
                <TitleWithDesc
                  title="Öneririz"
                  desc="Öncelikli olarak tavsiye edilen takviyeler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (value.recommendation === "Öneririz") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let supplementSuggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation === "Öneririz",
                        );
                        let vitaminSuggestions = vitamins.filter(
                          (vitamin) => vitamin.recommendation === "Öneririz",
                        );

                        if (
                          supplementSuggestions.length === 0 &&
                          vitaminSuggestions.length === 0 &&
                          index === 0
                        ) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride öncelikli olarak tavsiye edilen
                                bir takviye bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                  {supplements &&
                    supplements.map((value, index) => {
                      if (value.recommendation === "Öneririz") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Öncelikli Değil"
                  desc="Öncelikli olmayan takviyeler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {supplements &&
                    supplements.map((value, index) => {
                      if (value.recommendation === "Öncelikli Değil") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let supplementSuggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation === "Öncelikli Değil",
                        );
                        let vitaminSuggestions = vitamins.filter(
                          (vitamin) =>
                            vitamin.recommendation === "Öncelikli Değil",
                        );

                        if (
                          supplementSuggestions.length === 0 &&
                          vitaminSuggestions.length === 0 &&
                          index === 0
                        ) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride önceliksiz olarak tavsiye edilen
                                bir takviye bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (value.recommendation === "Öncelikli Değil") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Özel Durumlarda Alınabilir"
                  desc="Öncelikli olarak tavsiye edilmeyen, özel durumlara bağlı alınması tavsiye edilen takviyeler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {supplements &&
                    supplements.map((value, index) => {
                      if (
                        value.recommendation === "Özel Durumlarda Alınabilir"
                      ) {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let supplementSuggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation ===
                            "Özel Durumlarda Alınabilir",
                        );
                        let vitaminSuggestions = vitamins.filter(
                          (vitamin) =>
                            vitamin.recommendation ===
                            "Özel Durumlarda Alınabilir",
                        );

                        if (
                          supplementSuggestions.length === 0 &&
                          vitaminSuggestions.length === 0 &&
                          index === 0
                        ) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride yalnızca öncelikli durumlarda
                                tavsiye edilen bir takviye bulunmuyor
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (
                        value.recommendation === "Özel Durumlarda Alınabilir"
                      ) {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      }
                    })}
                </motion.div>
              </div>
            )}
          </Tab.Panel>
          {/* General Tab End */}

          {/* Supplements Tab */}
          <Tab.Panel>
            {supplements.length === 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="col-span-3"
              >
                <Title size="sm" className="mb-12 text-center">
                  Aradığınız kriterler için bir supplement bulunmuyor.
                </Title>
                <img
                  src={NoData}
                  alt="no data illustration"
                  className="mx-auto w-1/4"
                />
              </motion.div>
            )}

            {supplements.length !== 0 && (
              <div>
                <TitleWithDesc
                  title="Öneririz"
                  desc="Öncelikli olarak tavsiye edilen supplementler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {supplements &&
                    supplements.map((value, index) => {
                      if (value.recommendation === "Öneririz") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation === "Öneririz",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride öncelikli olarak tavsiye edilen
                                bir supplement bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Öncelikli Değil"
                  desc="Öncelikli olmayan supplementler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {supplements &&
                    supplements.map((value, index) => {
                      if (value.recommendation === "Öncelikli Değil") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation === "Öncelikli Değil",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride önceliksiz olarak tavsiye edilen
                                bir supplement bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Özel Durumlarda Alınabilir"
                  desc="Öncelikli olarak tavsiye edilmeyen, özel durumlara bağlı alınması tavsiye edilen supplementler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {supplements &&
                    supplements.map((value, index) => {
                      if (
                        value.recommendation === "Özel Durumlarda Alınabilir"
                      ) {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = supplements.filter(
                          (supplement) =>
                            supplement.recommendation ===
                            "Özel Durumlarda Alınabilir",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride yalnızca öncelikli durumlarda
                                tavsiye edilen bir supplement bulunmuyor
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>
              </div>
            )}
          </Tab.Panel>
          {/* Supplements Tab End */}

          {/* Vitamins Tab */}
          <Tab.Panel>
            {vitamins.length === 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="col-span-3"
              >
                <Title size="sm" className="mb-12 text-center">
                  Aradığınız kriterler için bir vitamin bulunmuyor.
                </Title>
                <img
                  src={NoData}
                  alt="no data illustration"
                  className="mx-auto w-1/4"
                />
              </motion.div>
            )}
            {vitamins.length !== 0 && (
              <div>
                <TitleWithDesc
                  title="Öneririz"
                  desc="Öncelikli olarak tavsiye edilen vitaminler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (value.recommendation === "Öneririz") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = vitamins.filter(
                          (vitamin) => vitamin.recommendation === "Öneririz",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride öncelikli olarak tavsiye edilen
                                bir vitamin bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Öncelikli Değil"
                  desc="Öncelikli olmayan vitaminler"
                />
                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (value.recommendation === "Öncelikli Değil") {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = vitamins.filter(
                          (vitamin) =>
                            vitamin.recommendation === "Öncelikli Değil",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride önceliksiz olarak tavsiye edilen
                                bir vitamin bulunmuyor.
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>

                <TitleWithDesc
                  title="Özel Durumlarda Alınabilir"
                  desc="Öncelikli olarak tavsiye edilmeyen, özel durumlara bağlı alınması tavsiye edilen vitaminler"
                />

                <motion.div
                  variants={framerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {vitamins &&
                    vitamins.map((value, index) => {
                      if (
                        value.recommendation === "Özel Durumlarda Alınabilir"
                      ) {
                        return (
                          <PreviewCard
                            variants={framerItem}
                            key={index}
                            className="flex flex-col items-start justify-between"
                          >
                            <div>
                              <Text isSubtext className="font-bold !text-brand">
                                {value.recommendation}
                              </Text>
                              <Title className="text-2xl font-semibold">
                                {value.name}
                              </Title>
                              <Text
                                isSubtext
                                className="mt-2 line-clamp-2 !text-base"
                              >
                                {value.suggestions[0]}
                              </Text>
                            </div>

                            <button
                              onClick={(e) => setIsModalOpen(e.target.id)}
                              className="group mt-4 flex items-center justify-center font-semibold !text-brand"
                              id={value.name}
                            >
                              Detayları Gör
                              <ChevronRight
                                size={16}
                                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>

                            <Modal
                              key={index}
                              supplement={value}
                              isOpen={isModalOpen}
                              setIsOpen={setIsModalOpen}
                            />
                          </PreviewCard>
                        );
                      } else {
                        let suggestions = vitamins.filter(
                          (vitamin) =>
                            vitamin.recommendation ===
                            "Özel Durumlarda Alınabilir",
                        );

                        if (suggestions.length === 0 && index === 0) {
                          return (
                            <motion.div
                              key={index}
                              className="col-span-1 mt-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <img
                                src={EmptyFilter}
                                alt="Empty filter illustration"
                                width={160}
                                className="mx-auto"
                              />
                              <Text className="mt-2 font-semibold text-mid">
                                Bu katergoride yalnızca öncelikli durumlarda
                                tavsiye edilen bir vitamin bulunmuyor
                              </Text>
                            </motion.div>
                          );
                        }
                      }
                    })}
                </motion.div>
              </div>
            )}
          </Tab.Panel>
          {/* Vitamins Tab End */}
        </Tab.Panels>
      </Tab.Group>
    </motion.section>
  );
}

export async function SupplementsLoader() {
  const supplements = await axios.get(
    "https://vitamins-and-supplements.vercel.app/api/supplement",
    {
      headers: {
        "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
      },
    },
  );
  const vitamins = await axios.get(
    "https://vitamins-and-supplements.vercel.app/api/vitamin",
    {
      headers: {
        "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
      },
    },
  );

  return [...vitamins.data, ...supplements.data];
}

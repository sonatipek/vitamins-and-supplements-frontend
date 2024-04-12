import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { PillIcon, GlassWaterIcon, ListIcon } from "lucide-react";

// Assets
import NoData from "../assets/no_data_illustration.svg";

// Components
import Title from "../components/ui/Title.jsx";
import Badge from "../components/ui/Badge.jsx";
import SupplementList from "../components/Supplements/SupplementList.jsx";

// Data
const tabs = [
  { icon: <ListIcon strokeWidth={1.5} />, text: "Tümü" },
  { icon: <GlassWaterIcon strokeWidth={1.5} />, text: "Supplements" },
  { icon: <PillIcon strokeWidth={1.5} />, text: "Vitamins" },
];

export function Supplements() {
  const [categories, setCategories] = useState([]);
  const [vitamins, setVitamins] = useState([]);
  const [supplements, setSupplements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  // fetch Categories
  useEffect(() => {
    fetch("https://vitamins-and-supplements.vercel.app/api/category", {
      headers: { "X-Auth-Token": import.meta.env.VITE_API_TOKEN },
    })
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  // fetch Vitamins by Selected Category
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

  // fetch Supplements by Selected Category
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

  // Event Functions
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

        {/* Categories */}
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
        {/* End Categories */}


        <Tab.Panels className="mt-14">
          {/* General Tab */}
          <Tab.Panel>
            {(vitamins.length !== 0 || supplements.length !== 0) && (
              <div>
                <SupplementList data={[supplements, vitamins]} isAllTab recommendation="Öneririz"/>
                <SupplementList data={[supplements, vitamins]} isAllTab recommendation="Öncelikli Değil"/>
                <SupplementList data={[supplements, vitamins]} isAllTab recommendation="Özel Durumlarda Alınabilir"/>
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
                <SupplementList data={supplements} recommendation="Öneririz" />
                <SupplementList
                  data={supplements}
                  recommendation="Öncelikli Değil"
                />
                <SupplementList
                  data={supplements}
                  recommendation="Özel Durumlarda Alınabilir"
                />
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
                <SupplementList data={vitamins} recommendation="Öneririz" />
                <SupplementList
                  data={vitamins}
                  recommendation="Öncelikli Değil"
                />
                <SupplementList
                  data={vitamins}
                  recommendation="Özel Durumlarda Alınabilir"
                />
              </div>
            )}
          </Tab.Panel>
          {/* Vitamins Tab End */}
        </Tab.Panels>
      </Tab.Group>
    </motion.section>
  );
}

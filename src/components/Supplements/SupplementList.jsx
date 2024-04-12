import { useState } from "react";
import { motion } from "framer-motion";

// Assets
import EmptyFilter from "../../assets/empty_illustration.svg";
// Icons
import { ChevronRight } from "lucide-react";

// UI Components
import PreviewCard from "../ui/PreviewCard";
import TitleWithDesc from "../ui/TitleWithDesc";
import Text from "../ui/Text";
import Title from "../ui/Title";
import Modal from "../ui/Modal";

// Framer Options
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

// Varien Options
const DESC_VARIANTS = {
  Öneririz: "Öncelikli olarak tavsiye edilen takviyeler",
  "Öncelikli Değil": "Öncelikli olmayan takviyeler",
  "Özel Durumlarda Alınabilir":
    "Öncelikli olarak tavsiye edilmeyen, özel durumlara bağlı alınması tavsiye edilen takviyeler",
};

const EMPTY_DESC_VARIANTS = {
  Öneririz:
    "Bu katergoride öncelikli olarak tavsiye edilen bir takviye bulunmuyor.",
  "Öncelikli Değil":
    "Bu katergoride önceliksiz olarak tavsiye edilen bir takviye bulunmuyor.",
  "Özel Durumlarda Alınabilir":
    "Bu katergoride yalnızca özel durumlarda tavsiye edilen bir takviye bulunmuyor.",
};

export default function SupplementList({ data, recommendation, isAllTab }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isAllTab) {
    return (
      <>
        <TitleWithDesc
          title={recommendation}
          desc={DESC_VARIANTS[recommendation]}
        />
        <motion.div
          variants={framerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {data[0] &&
            data[0].map((value, index) => {
              if (value.recommendation === recommendation) {
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
                      <Text isSubtext className="mt-2 line-clamp-2 !text-base">
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
                let supplementSuggestions = data[0].filter(
                    (supplement) => supplement.recommendation === recommendation,
                );

                let vitaminSuggestions = data[1].filter(
                  (vitamin) => vitamin.recommendation === recommendation,
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
                        {EMPTY_DESC_VARIANTS[recommendation]}
                      </Text>
                    </motion.div>
                  );
                }
              }
            })}
          {data[1] &&
            data[1].map((value, index) => {
              if (value.recommendation === recommendation) {
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
                      <Text isSubtext className="mt-2 line-clamp-2 !text-base">
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
      </>
    );
  } else {
    return (
      <>
        <TitleWithDesc
          title={recommendation}
          desc={DESC_VARIANTS[recommendation]}
        />
        <motion.div
          variants={framerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {data &&
            data.map((value, index) => {
              if (value.recommendation === recommendation) {
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
                      <Text isSubtext className="mt-2 line-clamp-2 !text-base">
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
                let suggestions = data.filter(
                  (vitamin) => vitamin.recommendation === recommendation,
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
                        {EMPTY_DESC_VARIANTS[recommendation]}
                      </Text>
                    </motion.div>
                  );
                }
              }
            })}
        </motion.div>
      </>
    );
  }
}

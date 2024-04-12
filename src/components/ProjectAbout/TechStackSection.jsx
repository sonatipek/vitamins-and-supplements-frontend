import { useContext } from "react";
import { motion } from "framer-motion";

// UI Components
import Title from "../ui/Title";
import Text from "../ui/Text";
import PreviewCard from "../ui/PreviewCard";

// Assets
import ExpressLogo from "../../assets/express_logo.svg";
import ExpressLogoDark from "../../assets/expressjs_dark.svg";
import FigmaLogo from "../../assets/figma_logo.svg";
import FramerLogo from "../../assets/framer_logo.svg";
import FramerLogoDark from "../../assets/framer_dark.svg";
import MongoLogo from "../../assets/mongo_logo.svg";
import NodeLogo from "../../assets/nodejs_logo.svg";
import ReactLogo from "../../assets/react_logo.svg";
import ReactRouterLogo from "../../assets/reactrouter_logo.svg";
import TailwindLogo from "../../assets/tailwind_logo.svg";
import VercelLogo from "../../assets/vercel_logo.svg";
import VercelLogoDark from "../../assets/vercel_dark.svg";
import ViteLogo from "../../assets/vite_logo.svg";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

// Framer Options
const framerContainer = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const framerItem = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function TechStackSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section className="mt-14" id="tech-stack">
      <Title size="lg">Teknoloji ve Araçlar</Title>
      <Text className="mt-4" isSubtext>
        Proje genelinde kullandığım tüm teknoloji ve araçlar setini aşağıda
        bulabilirsiniz.
      </Text>

      <motion.div
        className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={framerContainer}
      >
        <motion.div variants={framerItem}>
          <Title className="text-center">Front-end</Title>
          <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
            <img
              src={ReactLogo}
              alt="react.js logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={ReactRouterLogo}
              alt="reactrouter logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={ViteLogo}
              alt="vite.js logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={theme === "light" ? FramerLogo : FramerLogoDark}
              alt="framer logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={TailwindLogo}
              alt="tailwindcss logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />
          </PreviewCard>
        </motion.div>

        <motion.div variants={framerItem}>
          <Title className="text-center">Back-end</Title>
          <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
            <img
              src={NodeLogo}
              alt="node.js logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={theme === "light" ? ExpressLogo : ExpressLogoDark}
              alt="express.js logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />

            <img
              src={MongoLogo}
              alt="mongodb logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />
          </PreviewCard>
        </motion.div>

        <motion.div variants={framerItem}>
          <Title className="text-center">Hosting</Title>
          <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
            <img
              src={theme === "light" ? VercelLogo : VercelLogoDark}
              alt="vercel logo"
              className="h-14 cursor-pointer duration-700 hover:scale-105"
            />
          </PreviewCard>
        </motion.div>

        <motion.div variants={framerItem}>
          <Title className="text-center">Design</Title>
          <PreviewCard className="grid grid-cols-5 items-center justify-center gap-6">
            <img
              src={FigmaLogo}
              alt="Figma logo"
              className="cursor-pointer duration-700 hover:scale-105"
            />
          </PreviewCard>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

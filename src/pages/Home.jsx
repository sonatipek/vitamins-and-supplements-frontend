import { motion } from "framer-motion";

// Components
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import PreviewSection from "../components/Home/PreviewSection";
import ForWhomSection from "../components/Home/ForWhomSection";
import ContributorsSection from "../components/Home/ContributorsSection";

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero />
      <PreviewSection />
      <ForWhomSection />
      <Features />
      <ContributorsSection />
    </motion.div>
  );
}

export default Home;

import { motion } from "framer-motion";

// Components
import RightNavigation from "../components/ProjectAbout/RightNavigation";
import MainInformationSection from "../components/ProjectAbout/MainInformationSection";
import TechStackSection from "../components/ProjectAbout/TechStackSection";
import RelatedProjectsSection from "../components/ProjectAbout/RelatedProjectsSection";
import ContributionSection from "../components/ProjectAbout/ContributionSection";
import SourceSection from "../components/ProjectAbout/SourceSection";
import ContactSection from "../components/ProjectAbout/ContactSection";

export default function ProjectAbout() {
  return (
    <motion.main
      className="container mt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <RightNavigation />
      <MainInformationSection />
      <TechStackSection />
      <RelatedProjectsSection />
      <ContributionSection />
      <ContactSection />
      <SourceSection />
    </motion.main>
  );
}

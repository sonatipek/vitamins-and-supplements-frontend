import { motion } from "framer-motion";

export default function PreviewCard({ children, className, variants }) {
  return (
    <motion.div
    variants={variants}
      className={`p-6 border border-[#DEDEE9] dark:border-mid rounded-lg shadow-sm dark:shadow-darkest ${className}`}
    >
      {children}
    </motion.div>
  );
}

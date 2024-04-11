import { motion } from "framer-motion";

export default function PreviewCard({ children, className, variants }) {
  return (
    <motion.div
      variants={variants}
      className={`rounded-lg border border-[#DEDEE9] p-6 shadow-sm dark:border-mid dark:shadow-darkest ${className}`}
    >
      {children}
    </motion.div>
  );
}

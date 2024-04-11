import { twMerge } from "tailwind-merge";

export default function Title({ children, size = "sm", className }) {
  const TITLE_VARIANTS = {
    lg: "text-3xl leading-relaxed md:text-4xl",
    md: "text-2xl leading-normal md:text-3xl",
    sm: "text-lg leading-snug md:text-xl",
  };
  return (
    <h1
      className={twMerge(
        "mb-2 font-light text-darkest dark:text-white",
        TITLE_VARIANTS[size],
        className
      )}
    >
      {children}
    </h1>
  );
}

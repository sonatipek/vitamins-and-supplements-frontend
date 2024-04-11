import { twMerge } from "tailwind-merge";

export default function Text({ children, isSubtext, className }) {
  return (
    <p
      className={twMerge(
        "text-base leading-5 text-dark dark:text-light",
        isSubtext && "text-xs leading-normal text-mid dark:text-light",
        className,
      )}
    >
      {children}
    </p>
  );
}

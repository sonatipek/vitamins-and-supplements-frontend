import { twMerge } from "tailwind-merge";

export default function Link({
  children,
  className,
  icon,
  variant = "secondary-link",
  ...restProps
}) {
  const LINK_VARIANTS = {
    "primary-button":
      "flex items-center justify-center rounded-full border border-brand bg-brand px-14 py-3.5 font-medium text-white shadow-lg transition-colors duration-300 hover:bg-transparent hover:text-darkest dark:hover:text-white",
    "secondary-button":
      "flex items-center justify-center rounded-full border border-mid bg-mid px-14 py-3.5 font-medium text-lightest shadow-lg transition-colors duration-300 hover:bg-transparent hover:text-darkest dark:hover:text-white",
    "primary-link": "font-semibold text-brand no-underline",
    "secondary-link":
      "text-mid underline underline-offset-4 hover:text-dark dark:hover:text-light",
  };
  return (
    <a
      className={twMerge(
        "group inline-flex items-center justify-center",
        LINK_VARIANTS[variant],
        className,
      )}
      {...restProps}
    >
      {!icon ? (
        <></>
      ) : (
        <span className="mr-1 transition-transform duration-200 group-hover:-translate-y-1">
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}

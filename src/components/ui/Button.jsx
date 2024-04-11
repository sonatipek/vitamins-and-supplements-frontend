import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  icon,
  variant = "primary",
  ...restProps
}) {
  const BUTTON_VARIANTS = {
    primary:
      "bg-brand border-brand text-white hover:text-darkest dark:hover:text-white",
    secondary:
      "bg-mid border-mid text-lightest hover:text-darkest dark:hover:text-white",
    "primary-link": "text-brand font-semibold flex items-center justify-center",
  };

  return (
    <button
      className={twMerge(
        "group flex items-center justify-center rounded-full border px-14 py-2.5 font-medium shadow-lg transition-colors duration-300 hover:bg-transparent",
        BUTTON_VARIANTS[variant],
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
    </button>
  );
}

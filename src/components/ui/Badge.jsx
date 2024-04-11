import { twMerge } from "tailwind-merge";

export default function Badge({
  children,
  className,
  isSelected = false,
  ...restProps
}) {
  return (
    <li
      className={twMerge(
        "mx-1 my-1 inline-flex cursor-pointer rounded-full border border-gray-500/30 px-4 py-0.5 font-normal text-gray-500 transition duration-300 hover:border-brand hover:bg-brand hover:text-white",
        isSelected && "border-brand bg-brand font-medium text-white",
        className,
      )}
      {...restProps}
    >
      {children}
    </li>
  );
}

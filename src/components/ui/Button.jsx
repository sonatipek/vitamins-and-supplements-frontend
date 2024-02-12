export default function Button({
  children,
  className,
  onClick,
  icon,
  color = "brand",
}) {
  return (
    <button
      className={`bg-${color} border border-${color} hover:bg-transparent ${
        color === "brand"
          ? "text-white hover:text-darkest hover:dark:text-white"
          : "text-darkest hover:text-white hover:dark:text-white"
      } transition-colors duration-300 px-14 py-2.5 rounded-full flex items-center justify-center font-medium shadow-lg group ${className}`}
      onClick={onClick}
    >
      {!icon ? (
        <></>
      ) : (
        <span className="mr-1 group-hover:-translate-y-1 transition-transform duration-200">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

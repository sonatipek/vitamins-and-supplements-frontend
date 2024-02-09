export default function Text({ children, type, className }) {
    return (
      <p
        className={` ${
          type === "subtext"
            ? "text-sm text-mid dark:text-mid"
            : "text-base text-dark dark:text-light"
        } ${className}`}
      >
        {children}
      </p>
    );
  }
  
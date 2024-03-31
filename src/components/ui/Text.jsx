export default function Text({ children, type, className }) {
    return (
      <p
        className={`leading-5 ${
          type === "subtext"
            ? "text-xs text-mid dark:text-light leading-normal"
            : "text-base text-dark dark:text-light"
        } ${className}`}
      >
        {children}
      </p>
    );
  }
  
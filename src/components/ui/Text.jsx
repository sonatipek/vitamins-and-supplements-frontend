export default function Text({ children, type, className }) {
    return (
      <p
        className={`line-he ${
          type === "subtext"
            ? "text-sm text-mid dark:text-mid leading-normal"
            : "text-base text-dark dark:text-light leading-relaxed"
        } ${className}`}
      >
        {children}
      </p>
    );
  }
  
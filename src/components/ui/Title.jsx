export default function Title({ children, size, className }) {
    return (
      <h1
        className={`font-light ${
          size === "lg" ? "text-5xl" : size === "md" ? "text-3xl" : "text-xl"
        }  text-darkest dark:text-white ${className}`}
      >
        {children}
      </h1>
    );
  }
  
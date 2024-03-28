export default function Title({ children, size, className }) {
    return (
      <h1
        className={`font-light mb-2 ${
          size === "lg" ? "text-4xl md:text-5xl leading-relaxed" : size === "md" ? "text-2xl md:text-3xl leading-normal" : "text-lg md:text-xl leading-snug"
        }  text-darkest dark:text-white ${className}`}
      >
        {children}
      </h1>
    );
  }
  
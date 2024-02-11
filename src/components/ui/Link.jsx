export default function Link({ children, href, classname, icon, type, target }) {
    return (
      <a
        href={href}
        target={!target ? "_self" : target}
        className={`inline-flex justify-center items-center group ${
          type === "button"
            ? "bg-brand border border-brand hover:bg-transparent hover:text-darkest hover:dark:text-white transition-colors duration-300 px-14 py-3.5 rounded-full flex items-center justify-center text-white font-medium shadow-lg"
            : "text-mid underline underline-offset-4 hover:text-dark dark:hover:text-light"
        } ${classname} ${!icon ? "mr-0" : "mr-1"}`}
      >
        {!icon ? <></> : <span className="mr-1 group-hover:-translate-y-1 transition-transform duration-200">{icon}</span>}
        {children}
      </a>
    );
  }
  
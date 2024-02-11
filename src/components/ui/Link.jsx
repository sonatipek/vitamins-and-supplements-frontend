export default function Link({ children, href, classname, icon, type, target }) {
    return (
      <a
        href={href}
        target={!target ? "_self" : target}
        className={`inline-flex justify-center items-center ${
          type === "button"
            ? "bg-brand px-14 py-3.5 rounded-full flex items-center justify-center text-white"
            : "text-mid underline underline-offset-2 hover:text-dark dark:hover:text-light"
        } ${classname} ${!icon ? "mr-0" : "mr-1"}`}
      >
        {!icon ? <></> : <span className="mr-1">{icon}</span>}
        {children}
      </a>
    );
  }
  
export default function Button({ children, className, onClick, icon }) {
  return (
    <button
      className={`bg-brand border border-brand hover:bg-transparent hover:text-darkest hover:dark:text-white transition-colors duration-300 px-14 py-2.5 rounded-full inline-flex items-center justify-center text-white font-medium group ${className}`}
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

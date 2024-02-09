export default function Button({
    children,
    className,
    onClick,
    icon,
  }) {
    return (
      <button
        className={`bg-brand px-14 py-3.5 rounded-full inline-flex items-center justify-center text-white ${className}`}
        onClick={onClick}
      >
        {!icon ? <></> : <span className="mr-1">{icon}</span>}
        {children}
      </button>
    );
  }
  
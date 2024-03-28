export default function Badge({ children, onClick, className }) {
  return (
    <li
      onClick={onClick}
      className={`inline-flex rounded-full border border-gray-500/30 text-gray-500 font-normal hover:bg-brand hover:border-brand hover:text-white px-4 my-1 mx-1 py-0.5 cursor-pointer transition duration-300 ${className}`}
    >
      {children}
    </li>
  );
}

export default function Badge({ children, onClick, className }) {
  return <li onClick={onClick} className={`inline-flex rounded-lg border border-brand text-brand font-semibold bg-red-50 hover:bg-red-100 px-4 mx-1 py-0.5 cursor-pointer transition duration-300 ${className}`}>{children}</li>;
}

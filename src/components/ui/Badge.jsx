export default function Badge({ children }) {
  return <li className="inline-flex rounded-lg border border-brand text-brand font-semibold bg-red-50 hover:bg-red-100 px-4 mx-1 py-0.5 cursor-pointer">{children}</li>;
}

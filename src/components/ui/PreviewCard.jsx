export default function PreviewCard({ children, className }) {
  return <div className={`p-6 border border-[#DEDEE9] dark:border-mid rounded-lg shadow-sm dark:shadow-darkest ${className}`}>{children}</div>;
}

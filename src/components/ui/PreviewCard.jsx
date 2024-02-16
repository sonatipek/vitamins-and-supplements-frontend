export default function PreviewCard({ children, className }) {
  return <div className={`p-6 border dark:border-mid rounded-md shadow-md dark:shadow-darkest ${className}`}>{children}</div>;
}

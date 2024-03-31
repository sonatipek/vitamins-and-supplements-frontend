export default function Card({ icon, title, children }) {
  return (
    <div className="py-3 px-6 flex flex-col items-center justify-center mt-12">
      <span className="text-brand">{icon}</span>
      <div className="flex gap-3 mt-4">
        <h3 className="font-semibold text-base text-brand ">{title}</h3>
      </div>
      <p className="text-mid mt-1 text-sm">{children}</p>
    </div>
  );
}

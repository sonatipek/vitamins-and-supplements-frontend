export default function Card({ icon, title, children }) {
  return (
    <div className="mt-12 flex flex-col items-center justify-center px-6 py-3">
      <span className="text-brand">{icon}</span>
      <div className="mt-4 flex gap-3">
        <h3 className="text-base font-semibold text-brand ">{title}</h3>
      </div>
      <p className="mt-1 text-sm text-mid">{children}</p>
    </div>
  );
}

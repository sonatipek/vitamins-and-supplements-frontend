export default function Card({ icon, title, children }) {
  return (
    <div className="border-2 rounded-md text-white py-3 px-6">
      <div className="flex gap-3">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default function List({ listElements }) {
  return (
    <ul className="container lg:px-28 mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-3">
      {listElements.map((value, index) => (
        <li key={index} className="flex items-center justify-start text-darkest">
          <span className="size-4 bg-brand rounded-full mr-3"></span>
          {value}
        </li>
      ))}
    </ul>
  );
}

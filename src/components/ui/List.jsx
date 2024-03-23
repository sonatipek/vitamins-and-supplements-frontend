export default function List({ listElements }) {
  return (
    <ul className=" mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-3">
      {listElements.map((value, index) => (
        <li key={index} className="flex items-center justify-start text-darkest dark:text-lightest">
          <span className="size-4 bg-brand rounded-full mr-3"></span>
          {value}
        </li>
      ))}
    </ul>
  );
}

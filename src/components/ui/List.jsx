export default function List({ listElements }) {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-y-3 md:grid-cols-2">
      {listElements.map((value, index) => (
        <li
          key={index}
          className="flex items-center justify-start text-darkest dark:text-lightest"
        >
          <span className="mr-3 size-4 rounded-full bg-brand"></span>
          {value}
        </li>
      ))}
    </ul>
  );
}

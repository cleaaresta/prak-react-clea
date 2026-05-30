export default function List({ items = [], renderItem, className = "" }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li
          key={item.id ?? index}
          className="bg-white border border-gray-200 rounded-2xl p-4"
        >
          {renderItem ? renderItem(item) : item}
        </li>
      ))}
    </ul>
  );
}

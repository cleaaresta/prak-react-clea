export default function Tooltip({ label, children }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-lg bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
        {label}
      </span>
    </span>
  );
}

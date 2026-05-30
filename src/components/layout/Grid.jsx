export default function Grid({ columns = 2, className = "", children }) {
  const gridColumns =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";
  return (
    <div className={`grid gap-6 ${gridColumns} ${className}`}>{children}</div>
  );
}

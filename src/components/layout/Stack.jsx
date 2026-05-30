export default function Stack({ vertical = true, className = "", children }) {
  return (
    <div
      className={`${vertical ? "space-y-4" : "space-x-4 flex"} ${className}`}
    >
      {children}
    </div>
  );
}

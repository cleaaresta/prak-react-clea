export default function Table({ children, className = "" }) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white text-left border-collapse">
        {children}
      </table>
    </div>
  );
}

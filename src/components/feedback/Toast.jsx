export default function Toast({ message, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-gray-900 px-4 py-3 text-sm text-white shadow-lg ${className}`}
    >
      {message}
    </div>
  );
}

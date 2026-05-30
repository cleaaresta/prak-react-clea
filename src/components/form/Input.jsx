export default function Input({ label, className = "", ...props }) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label && <span className="mb-2 block">{label}</span>}
      <input
        className={`w-full border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 ${className}`}
        {...props}
      />
    </label>
  );
}

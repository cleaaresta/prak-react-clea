export default function Checkbox({ label, className = "", ...props }) {
  return (
    <label className="inline-flex items-center text-sm text-gray-700">
      <input
        type="checkbox"
        className={`mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}

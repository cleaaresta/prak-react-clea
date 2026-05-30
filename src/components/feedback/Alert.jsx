export default function Alert({ type = "info", message, className = "" }) {
  const styles = {
    info: "bg-blue-50 text-blue-700 border-blue-100",
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-100",
    danger: "bg-red-50 text-red-700 border-red-100",
  };

  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${styles[type] ?? styles.info} ${className}`}
    >
      <p>{message}</p>
    </div>
  );
}

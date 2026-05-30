export default function Card({
  title,
  description,
  footer,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-3xl shadow-sm p-6 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      )}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {children}
      {footer && <div className="mt-4 text-sm text-gray-500">{footer}</div>}
    </div>
  );
}

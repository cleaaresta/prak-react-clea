export default function Icon({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center ${className}`}>{children}</span>
  );
}

export default function Text({ variant = "base", className = "", children }) {
  const styles = {
    base: "text-base text-gray-700",
    title: "text-2xl font-semibold text-gray-900",
    subtitle: "text-lg text-gray-600",
    small: "text-sm text-gray-500",
  };
  return (
    <p className={`${styles[variant] ?? styles.base} ${className}`}>
      {children}
    </p>
  );
}

export default function Image({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block max-w-full rounded-xl ${className}`}
      {...props}
    />
  );
}

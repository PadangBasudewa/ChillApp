export default function Poster({ src, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover block ${className}`}
    />
  );
}

export default function Avatar({ src, onClick }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-8 h-8 rounded-full object-cover"
      onClick={onClick}
    />
  );
}

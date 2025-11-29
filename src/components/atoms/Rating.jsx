import { FaStar } from "react-icons/fa";

export default function Rating({ value, className = "" }) {
  return (
    <div
      className={`flex items-center gap-1 text-xs text-gray-100 ${className}`}
    >
      <FaStar className="text-white" size={12} />
      <span>{value}</span>
    </div>
  );
}

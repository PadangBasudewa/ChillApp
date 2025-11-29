import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ChevronButton({ direction = "left", onClick }) {
  const Icon = direction === "left" ? FaChevronLeft : FaChevronRight;

  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2
                 bg-black/40 hover:bg-black/60
                 p-3 rounded-full z-10
                 hidden md:flex"
      style={direction === "left" ? { left: "-20px" } : { right: "-20px" }}
    >
      <Icon className="text-white w-4 h-4" />
    </button>
  );
}

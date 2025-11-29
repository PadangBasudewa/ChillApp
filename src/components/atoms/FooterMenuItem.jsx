import { IoChevronForward } from "react-icons/io5";

export default function FooterMenuItem({ label }) {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <span className="text-[15px]">{label}</span>
      <IoChevronForward size={16} />
    </div>
  );
}

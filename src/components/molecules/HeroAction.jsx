// import { FaVolumeMute } from "react-icons/fa";
import info from "../../assets/images/info.png";

export default function HeroAction() {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      {/* Button Mulai */}
      <button className="bg-[#0F1E93] text-white text-sm px-4 py-1 rounded-2xl md:text-lg md:px-6 md:py-2 md:rounded-4xl">
        Mulai
      </button>

      {/* Selengkapnya */}
      <button className="flex gap-2 justify-center items-center text-sm text-white bg-[#22282A] py-1 px-4 rounded-2xl md:text-lg md:px-6 md:py-2 md:rounded-4xl">
        <img src={info} alt="" />
        Selengkapnya
      </button>

      {/* Tag 18+ */}
      <div className="bg-transparent text-white text-[10px] px-2 py-1 rounded-2xl border border-white md:text-lg md:px-3 md:py-2 md:rounded-4xl">
        18+
      </div>
    </div>
  );
}

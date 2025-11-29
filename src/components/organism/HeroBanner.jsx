import { FaVolumeMute } from "react-icons/fa";
import banner from "../../assets/images/duty-mobile.png";
import HeroAction from "../molecules/HeroAction";
import HeroInfo from "../molecules/HeroInfo";
import imageDekstop from "../../assets/images/desktop-img.png";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-64 md:h-[587px]">
      {/* Background Image Mobile */}
      <img
        src={banner}
        alt="Duty After School"
        className="w-full h-full object-cover md:hidden"
      />
      {/* Background Image Desktop */}
      <img
        src={imageDekstop}
        alt="Duty After School"
        className="hidden w-full h-full object-cover md:block"
      />

      {/* Overlay khusus desktop bagian bawah */}
      <div className="hidden md:block absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"></div>
      {/* MOBILE CONTENT (ONLY ON SMALL SCREEN) */}
      <div className="absolute bottom-15 left-4 right-4 md:hidden">
        <HeroInfo />
        <HeroAction />
      </div>

      {/* DESKTOP CONTENT (ONLY ON MD AND ABOVE) */}
      <div
        className="
          hidden md:block 
          absolute left-0 right-0 
          bottom-[18%]
          max-w-7xl
          mx-auto 
          px-5 
        "
      >
        <HeroInfo />
        <HeroAction />
      </div>

      {/* Mute Button */}
      <button
        className="
          absolute right-4 bottom-15  
          md:right-30 md:bottom-27 p-2 bg-transparent rounded-full 
          backdrop-blur-sm border border-white md:w-11 md:h-11 
        "
      >
        <FaVolumeMute className="w-3 h-3 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

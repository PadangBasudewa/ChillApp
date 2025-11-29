import { FaStar } from "react-icons/fa";
import dontLookUp from "../../assets/images/poster-dont.png";
import marvel from "../../assets/images/marvel.png";

export default function ContinueWatchingSection() {
  return (
    <div className="mt-6 px-4">
      {/* Section Title */}
      <h2 className="font-bold text-xl mb-3">Melanjutkan Tonton Film</h2>

      {/* Horizontal Scroll */}
      <div className="flex gap-5 pb-2">
        {/* CARD 1 */}
        <div className="min-w-[320px] h-[150px] relative rounded-xl overflow-hidden bg-[#222] shrink-0">
          <img
            src={dontLookUp}
            alt="Don't Look Up"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Text + Rating */}
          <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-sm">
            <span className="font-semibold">Don’t Look Up</span>

            <span className="flex items-center gap-1 text-xs">
              <FaStar size={10} className="text-white-400" />
              4.5/5
            </span>
          </div>
        </div>

        {/* CARD 2 — biar muncul sedikit di kanan */}
        <div className="min-w-[260px] h-[150px] relative rounded-xl overflow-hidden bg-[#222] shrink-0">
          <img
            src={marvel} // nanti ganti poster kedua
            alt="Another Movie"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-sm">
            <span className="font-semibold">Another Film</span>

            <span className="flex items-center gap-1 text-xs">
              <FaStar size={10} className="text-yellow-400" />
              4.7/5
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

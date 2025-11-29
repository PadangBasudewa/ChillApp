import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dontLookUp from "../../assets/images/poster-dont.png";
import thebatman from "../../assets/images/thebatman.png";
import bluelock from "../../assets/images/bluelock.png";
import otto from "../../assets/images/otto.png";

export default function ContinueWatchingSection() {
  const posters = [
    { image: dontLookUp, title: "Don’t Look Up", rating: "4.5/5" },
    { image: thebatman, title: "The Batman", rating: "4.2/5" },
    { image: bluelock, title: "Blue Lock", rating: "4.6/5" },
    { image: otto, title: "A Man Called Otto", rating: "4.4/5" },
  ];

  return (
    <section className="mt-6 px-4 md:px-0 md:pb-5">
      {/* Title */}
      <h2 className="font-bold text-xl mb-3 md:max-w-7xl md:mx-auto md:p-4 md:text-3xl">
        Melanjutkan Tonton Film
      </h2>

      {/* ========================= MOBILE VERSION ========================= */}
      <div className="flex gap-5 pb-2 md:hidden">
        {/* CARD 1 */}
        <div className="min-w-[320px] h-[150px] relative rounded-xl overflow-hidden bg-[#222] shrink-0">
          <img
            src={dontLookUp}
            alt="Don't Look Up"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-sm">
            <span className="font-semibold">Don’t Look Up</span>

            <span className="flex items-center gap-1 text-xs">
              <FaStar size={10} /> 4.5/5
            </span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="min-w-[260px] h-[150px] relative rounded-xl overflow-hidden bg-[#222] shrink-0">
          <img
            src={thebatman}
            alt="Another Movie"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
      </div>

      {/* ========================= DESKTOP VERSION ========================= */}
      <div className="hidden md:block relative">
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* CHEVRON BUTTON LEFT */}
          <button
            className="
            absolute left-0 top-1/2 -translate-y-1/2
            bg-black/90 hover:bg-black/60 p-3 rounded-full z-10 border border-[#E7E3FC3B]
          "
          >
            <FaChevronLeft className="text-white w-4 h-4" />
          </button>

          {/* CHEVRON BUTTON RIGHT */}
          <button
            className="
            absolute right-0 top-1/2 -translate-y-1/2
            bg-black/90 border border-[#E7E3FC3B] hover:bg-black/60 p-3 rounded-full z-10
          "
          >
            <FaChevronRight className="text-white w-4 h-4" />
          </button>

          {/* GRID POSTER */}
          <div className="flex gap-4 px-5">
            {posters.map((item, index) => (
              <div
                key={index}
                className={`relative w-[300px] h-[170px] rounded-xl overflow-hidden bg-[#222] ${
                  index === posters.length - 1
                    ? "translate-x-6 md:translate-x-0"
                    : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center">
                  <span className="font-semibold text-sm">{item.title}</span>

                  <span className="flex items-center gap-1 text-xs text-white">
                    <FaStar size={10} /> {item.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

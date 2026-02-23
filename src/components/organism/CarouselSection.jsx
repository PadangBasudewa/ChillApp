import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MediaCard from "../molecules/MediaCard";

export default function CarouselSection({ title, items = [] }) {
  return (
    <section className="my-6 px-4 md:px-0 md:pb-5">
      {/* TITLE */}
      <h2 className="text-[20px] font-bold mb-3 md:max-w-7xl md:mx-auto md:p-4 md:text-3xl">
        {title}
      </h2>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map((item, i) => (
          <div key={i} className="min-w-[140px] shrink-0">
            <MediaCard
              id={item.id}
              image={item.image}
              badge={item.badge}
              variant={item.variant}
              title={item.title}
              rating={item.rating}
            />
          </div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative">
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* LEFT BUTTON */}
          <button
            className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-black/80 hover:bg-black/60
            border border-white/20
            p-3 rounded-full backdrop-blur-sm
          "
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-black/80 hover:bg-black/60
            border border-white/20
            p-3 rounded-full backdrop-blur-sm
          "
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* GRID 4 ITEMS (full visible) */}
          <div className="grid grid-cols-5 gap-4 px-4">
            {items.map((item, i) => (
              <MediaCard
                key={i}
                id={item.id}
                image={item.image}
                badge={item.badge}
                variant={item.variant}
                title={item.title}
                rating={item.rating}
                continuedesktop="continueDesktop"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

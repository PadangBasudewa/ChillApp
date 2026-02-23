import { useNavigate } from "react-router-dom";
import Badge from "../atoms/Badge";
import { FaStar } from "react-icons/fa";
export default function MediaCard({
  image,
  badge,
  variant,
  continuedesktop,
  title,
  rating,
  id,
}) {
  const navigate = useNavigate();

  const sizeClass =
    continuedesktop === "continueDesktop"
      ? "md:min-w-[200px] aspect-[2/3]"
      : "min-w-[140px] aspect-[2/3]";

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className={`relative rounded-xl overflow-hidden ${sizeClass} group cursor-pointer`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover duration-300 group-hover:scale-105"
      />
      {badge && <Badge label={badge} variant={variant} />}

      <div
        className="
          absolute inset-0
          bg-black/0
          group-hover:bg-black/80
          transition-all duration-300
        "
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h3
            className="
            text-white text-sm md:text-lg font-bold text-center px-2
            opacity-0 group-hover:opacity-100
            transition duration-300 hover:underline hover:cursor-pointer
          "
          >
            {title}
          </h3>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
          <FaStar className="text-yellow-400 w-5 h-5" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
}

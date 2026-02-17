import Badge from "../atoms/Badge";
export default function MediaCard({ image, badge, variant, continuedesktop }) {
  const sizeClass =
    continuedesktop === "continueDesktop"
      ? "md:min-w-[200px] aspect-[2/3]"
      : "min-w-[140px] aspect-[2/3]";

  return (
    <div className={`relative rounded-xl overflow-hidden ${sizeClass}`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {badge && <Badge label={badge} variant={variant} />}
    </div>
  );
}

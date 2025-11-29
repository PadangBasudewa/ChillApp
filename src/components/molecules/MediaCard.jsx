import Badge from "../atoms/Badge";

export default function MediaCard({ image, badge, variant, continuedesktop }) {
  const sizeClass =
    continuedesktop === "continueDesktop"
      ? "md:h-[350px] md:min-w-[200px]" // DESKTOP VERSION (besar)
      : "h-[180px] min-w-[100px]"; // MOBILE VERSION

  return (
    <div
      className={`
        relative rounded-lg overflow-hidden bg-gray-900
        ${sizeClass}
      `}
    >
      <img src={image} alt="" className="w-full h-full object-cover" />

      {badge && <Badge label={badge} variant={variant} />}
    </div>
  );
}

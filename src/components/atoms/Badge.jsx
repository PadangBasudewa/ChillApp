export default function Badge({ label, variant = "episode" }) {
  const baseStyle =
    "text-[8px] text-white flex items-center justify-center md:text-[14px]";

  if (variant === "episode") {
    return (
      <div
        className={`${baseStyle} bg-[#0F1E93] px-1 py-0.5 rounded-2xl absolute top-3 left-2 md:py-1 md:px-2.5 `}
      >
        {label}
      </div>
    );
  }

  if (variant === "top10") {
    return (
      <div
        className={`${baseStyle} bg-[#B21C1C] 
        w-[15px] h-[22px] absolute top-0 right-2
        rounded-tr-sm rounded-bl-sm font-light
        text-[8px] flex items-center justify-center md:p-2 md:text-[14px] md:top-0 md:right-8 md:w-[31px] md:h-12`}
      >
        {label}
      </div>
    );
  }

  return null;
}

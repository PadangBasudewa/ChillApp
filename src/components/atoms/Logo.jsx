import chillLogo from "../../assets/images/Logo.png";
import chillLogoLarge from "../../assets/images/Logo_Large.png";

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-4">
      {/* Logo Mobile (HP) */}
      <img
        src={chillLogo}
        alt="Chill Logo Mobile"
        className="block md:hidden"
      />

      {/* Logo Desktop (Laptop) */}
      <img
        src={chillLogoLarge}
        alt="Chill Logo Desktop"
        className="hidden md:block"
      />
    </div>
  );
}

import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import navLogo from "../../assets/images/vector-mobile-navbar.png";
import logoDesktop from "../../assets/images/logo-desktop.png";
import ProfileDropdown from "./ProfileDropdown";

export default function NavbarMobile() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-25 md:py-6 bg-[#181A1C] md:fixed md:top-0 md:left-0 md:w-full md:z-100 ">
      {/* Left menu */}
      <div className="flex gap-4 text-xs text-white md:gap-12 md:text-lg">
        <img src={navLogo} alt="Logo Mobile" className="w-6 h-6 md:hidden" />

        <img
          src={logoDesktop}
          alt="Logo Desktop"
          className="hidden md:block w-24"
        />

        <button>Series</button>
        <button>Film</button>
        <button>Daftar Saya</button>
      </div>

      {/* Profile Dropdown */}
      <ProfileDropdown />
    </nav>
  );
}

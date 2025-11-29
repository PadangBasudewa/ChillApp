import { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaStar,
  FaSignOutAlt,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setOpen(!open);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar + Arrow */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FaUserCircle className="w-5 h-5 md:w-10 md:h-10" />
        <FaChevronDown className="text-white text-xs md:text-sm w-3 h-3 md:w-6 md:h-6" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 
            w-40 md:w-48 
            bg-[#0F0F0F] shadow-lg rounded-md
            py-2 border border-gray-700
            animate-fadeIn z-50
          "
        >
          <button className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 w-full text-sm md:text-base hover:text-blue-600 ">
            <FaUser /> Profil Saya
          </button>

          <button className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 w-full text-sm md:text-base hover:text-blue-600">
            <FaStar /> Ubah Premium
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-800 w-full text-sm md:text-base hover:text-blue-600"
          >
            <FaSignOutAlt /> Keluar
          </button>
        </div>
      )}
    </div>
  );
}

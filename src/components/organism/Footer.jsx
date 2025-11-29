import { IoChevronForward } from "react-icons/io5";
import FooterCopyright from "../atoms/FooterCopyright";
import FooterDivider from "../atoms/FooterDivider";
import FooterBrand from "../molecules/FooterBrand";

export default function Footer() {
  return (
    <footer className="mt-10 pb-10 md:mt-20">
      <FooterDivider />

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex justify-between px-4 md:px-20 h-[164px]">
        {/* LEFT (Logo + Copyright) */}
        <div className="flex flex-col justify-center items-start ">
          <FooterBrand />
          <FooterCopyright />
        </div>

        {/* MIDDLE - GENRE */}
        <div className="flex flex-col justify-center">
          <h4 className="text-white font-semibold mb-4 pt-8">Genre</h4>
          <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm text-[#C1C2C4]">
            {[
              "Aksi",
              "Drama",
              "Komedi",
              "Anak-anak",
              "Fantasi Ilmiah & Fantasi",
              "Petualangan",
              "Anime",
              "Kejahatan",
              "Perang",
              "Britania",
              "KDrama",
              "Romantis",
              "Sains & Alam",
              "Thriller",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {/* RIGHT - BANTUAN */}
        <div className="flex flex-col justify-center">
          <h4 className="text-white font-semibold mb-4">Bantuan</h4>
          <div className="flex flex-col gap-2 text-sm text-[#C1C2C4]">
            {["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
        </div>
      </div>

      {/* MOBILE (TIDAK DIUBAH) */}
      <div className="md:hidden">
        <FooterBrand />
        <FooterCopyright />

        <div className="mt-6">
          <MenuItemMobile label="Genre" />
          <MenuItemMobile label="Bantuan" />
        </div>
      </div>
    </footer>
  );
}

function MenuItemMobile({ label }) {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <span className="text-[15px]">{label}</span>
      <IoChevronForward size={16} />
    </div>
  );
}

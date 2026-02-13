import NavbarMobile from "../components/molecules/NavbarMobile";
import Feature from "../components/organism/Feature";
import Footer from "../components/organism/Footer";
import {
  FaDownload,
  FaFilm,
  FaTv,
  FaClosedCaptioning,
  FaHSquare,
  FaFileVideo,
} from "react-icons/fa";
import PricingCard from "../components/organism/PricingCard";

function Subscription() {
  const plans = [
    {
      id: "individu",
      name: "Individual",
      price: 49990,
      label: "Rp49.990/bulan",
      accounts: "1 Akun",
      quality: "720p",
    },
    {
      id: "berdua",
      name: "Berdua",
      price: 79990,
      label: "Rp79.990/bulan",
      accounts: "2 Akun",
      quality: "1080p",
    },
    {
      id: "keluarga",
      name: "Keluarga",
      price: 159990,
      label: "Rp159.990/bulan",
      accounts: "5-7 Akun",
      quality: "4K",
    },
  ];

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />

      <main className="px-4 md:px-24 py-10">
        {/* ================= HERO SECTION ================= */}
        <section className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            Kenapa Harus Berlangganan?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Feature
              icon={<FaDownload size={28} />}
              title="Download Konten Pilihan"
            />
            <Feature icon={<FaFileVideo size={28} />} title="Tidak Ada Iklan" />
            <Feature icon={<FaFilm size={28} />} title="Tonton Semua Konten" />
            <Feature
              icon={<FaHSquare size={28} />}
              title="Kualitas Terbaik sampai dengan 4K"
            />
            <Feature
              icon={<FaTv size={28} />}
              title="Tonton di TV, Tablet, Mobile, dan Laptop"
            />
            <Feature
              icon={<FaClosedCaptioning size={28} />}
              title="Subtitle Untuk Konten Pilihan"
            />
          </div>
        </section>

        {/* ================= PRICING SECTION ================= */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-3xl font-bold">Pilih Paketmu</h3>
            <p className="text-gray-400 mt-2">
              Temukan paket sesuai kebutuhanmu!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch ">
            <PricingCard
              title="Individu"
              price="Rp49.990/bulan"
              quality="720p"
              plans={plans[0]}
            />

            <PricingCard
              title="Berdua"
              price="Rp79.990/bulan"
              quality="1080p"
              plans={plans[1]}
            />

            <PricingCard
              title="Keluarga"
              price="Rp159.990/bulan"
              quality="4K"
              plans={plans[2]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Subscription;

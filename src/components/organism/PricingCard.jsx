import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

function PricingCard({ title, price, quality, plans: plan }) {
  const navigate = useNavigate();
  const setSelectedPlan = useUserStore((s) => s.setSelectedPlan);

  return (
    <div
      className={`w-full transform hover:bg-blue-700 transition duration-500 hover:scale-105 md:w-80 rounded-2xl px-6 py-8 flex flex-col justify-between min-h-[440px] bg-linear-to-r from-blue-500 to-blue-800`}
    >
      {/* TOP CONTENT */}
      <div className="">
        {/* Badge Title */}
        <div className="mb-6">
          <span className="bg-[#2F3640] text-white px-6 py-3 rounded-full text-sm mb-5">
            {title}
          </span>
        </div>

        <p className="text-sm text-gray-200 mb-1">
          Mulai dari <span className="font-semibold">{price}</span>
        </p>

        <p className="text-sm text-gray-200 mb-6">
          {title === "Individu"
            ? "1 Akun"
            : title === "Berdua"
              ? "2 Akun"
              : "5-7 Akun"}
        </p>

        <ul className="space-y-3 text-sm text-gray-100">
          <li>✓ Tidak ada iklan</li>
          <li>✓ Kualitas {quality}</li>
          <li>✓ Download konten pilihan</li>
        </ul>
      </div>

      {/* BOTTOM SECTION */}
      <div>
        {/* Divider */}
        <div className="border-t border-white/30 my-8"></div>

        <button
          onClick={() => {
            setSelectedPlan(plan);
            navigate("/payment");
          }}
          className="w-full bg-white text-blue-700 font-semibold py-2 rounded-full hover:opacity-90 transition cursor-pointer"
        >
          Langganan
        </button>

        <p className="text-xs text-gray-200 text-center mt-3">
          Syarat dan Ketentuan Berlaku
        </p>
      </div>
    </div>
  );
}

export default PricingCard;

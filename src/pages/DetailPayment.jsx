import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import toast from "react-hot-toast";

function DetailPayment() {
  const navigate = useNavigate();

  const selectedPlan = useUserStore((s) => s.selectedPlan);
  const selectedPaymentMethod = useUserStore((s) => s.selectedPaymentMethod);

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!selectedPlan || !selectedPaymentMethod) {
    return <Navigate to="/subscription" />;
  }

  console.log("PLAN:", selectedPlan);
  console.log("PAYMENT:", selectedPaymentMethod);

  const adminFee = 3000;
  const total = selectedPlan.price + adminFee;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")} : ${s
      .toString()
      .padStart(2, "0")}`;
  };

  const paymentInfo =
    selectedPaymentMethod === "bca"
      ? {
          title: "BCA Virtual Account",
          description:
            "Transfer ke nomor Virtual Account berikut melalui BCA Mobile atau Internet Banking.",
          code: "8808123456789012",
          steps: [
            "Buka aplikasi BCA Mobile / Internet Banking.",
            "Pilih menu m-Transfer.",
            "Pilih BCA Virtual Account.",
            "Masukkan nomor Virtual Account.",
            "Konfirmasi dan selesaikan pembayaran.",
          ],
        }
      : {
          title: "Kartu Debit/Kredit",
          description:
            "Masukkan detail kartu Anda untuk menyelesaikan pembayaran.",
          code: "**** **** **** 1234",
          steps: [
            "Masukkan nomor kartu.",
            "Masukkan tanggal kadaluarsa.",
            "Masukkan CVV.",
            "Konfirmasi pembayaran.",
          ],
        };

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />

      <main className="px-4 md:px-24 py-2">
        <div className="max-w-7xl mx-auto">
          {/* COUNTDOWN */}
          <div className="bg-linear-to-r from-[#23272A] to-[#1c1f22] rounded-2xl p-4 mb-10 text-center">
            <p className="text-sm text-white font-semibold mb-4">
              Lakukan Pembayaran Sebelum
            </p>

            <div className="flex justify-center items-center gap-3 text-white">
              {/* JAM */}
              <div className="bg-[#2F3334] px-4 py-2 rounded-lg min-w-[70px]">
                <div className="text-lg font-semibold">
                  {Math.floor(timeLeft / 3600)
                    .toString()
                    .padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Jam</div>
              </div>

              <span className="text-gray-500">:</span>

              {/* MENIT */}
              <div className="bg-[#2F3334] px-4 py-2 rounded-lg min-w-[70px]">
                <div className="text-lg font-semibold">
                  {Math.floor((timeLeft % 3600) / 60)
                    .toString()
                    .padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Menit</div>
              </div>

              <span className="text-gray-500">:</span>

              {/* DETIK */}
              <div className="bg-[#2F3334] px-4 py-2 rounded-lg min-w-[70px]">
                <div className="text-lg font-semibold">
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Detik</div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Ringkasan Pembayaran
          </h1>
          <button
            onClick={() => navigate("/payment")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mt-2 mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>{" "}
            Kembali ke Paket
          </button>

          <div className="flex flex-col md:flex-row gap-10">
            {/* ================= LEFT - PLAN CARD ================= */}
            <div className="md:w-1/3">
              <div className="rounded-2xl p-6 bg-linear-to-r from-blue-500 to-blue-800 flex flex-col justify-between h-[420px]">
                <div>
                  <span className="bg-[#2F3640] px-4 py-2 rounded-full text-sm">
                    {selectedPlan.name}
                  </span>

                  <p className="mt-6 text-sm text-gray-200">
                    {selectedPlan.label}
                  </p>
                  <p className="text-sm text-gray-200 mb-6">
                    {selectedPlan.accounts}
                  </p>

                  <ul className="space-y-2 text-sm">
                    <li>✓ Tidak ada iklan</li>
                    <li>✓ Kualitas {selectedPlan.quality}</li>
                    <li>✓ Download konten pilihan</li>
                  </ul>
                </div>
                <div className="border-t border-white/30 pt-6 text-center">
                  <div className="mt-6 bg-white text-blue-700 py-2 rounded-full font-semibold mx-auto w-full">
                    Langganan
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT - PAYMENT DETAIL ================= */}
            <div className="md:w-2/3 space-y-6">
              {/* METODE */}
              <div className="bg-[#23272A] p-6 rounded-xl space-y-4">
                <h2 className="font-semibold text-lg">Metode Pembayaran</h2>

                <div className="border border-gray-600 rounded-lg p-4">
                  {paymentInfo.title}
                </div>

                <div>
                  <p className="text-sm text-gray-400">Kode Pembayaran</p>
                  <p className="text-lg font-semibold tracking-widest">
                    {paymentInfo.code}
                  </p>
                </div>

                <p className="text-sm text-gray-400">
                  {paymentInfo.description}
                </p>
              </div>

              {/* RINGKASAN TRANSAKSI */}
              <div className="bg-[#23272A] p-6 rounded-xl space-y-3">
                <h2 className="font-semibold text-lg">Ringkasan Transaksi</h2>

                <div className="flex justify-between text-sm text-gray-300">
                  <span>{selectedPlan.name}</span>
                  <span>Rp{selectedPlan.price.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-300">
                  <span>Biaya Admin</span>
                  <span>Rp3.000</span>
                </div>

                <div className="border-t border-gray-600 pt-3 flex justify-between font-bold text-lg">
                  <span>Total Pembayaran</span>
                  <span>Rp{total.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* TATA CARA */}
              <div className="bg-[#23272A] p-6 rounded-xl">
                <h2 className="font-semibold text-lg mb-3">
                  Tata Cara Pembayaran
                </h2>

                <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
                  {paymentInfo.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DetailPayment;

import { Navigate, useNavigate } from "react-router-dom";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import { useUserStore } from "../store/useUserStore";
import bca from "../assets/bca.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Payment() {
  const selectedPlan = useUserStore((s) => s.selectedPlan);
  const navigate = useNavigate();
  const selectedPaymentMethod = useUserStore((s) => s.selectedPaymentMethod);
  const setSelectedPaymentMethod = useUserStore(
    (s) => s.setSelectedPaymentMethod,
  );

  if (!selectedPlan) {
    return <Navigate to="/subscription" />;
  }

  useEffect(() => {
    setSelectedPaymentMethod(null);
  }, []);

  const totalPayment = selectedPlan.price + 3000;

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />

      <main className="px-4 md:px-24 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">
            Ringkasan Pembayaran
          </h1>
          <button
            onClick={() => navigate("/subscription")}
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
            {/* ================= LEFT - PACKAGE SUMMARY ================= */}
            <div className="md:w-1/3">
              <div className="rounded-2xl p-6 bg-linear-to-r from-blue-500 to-blue-800 min-h-auto md:min-h-[480px] flex flex-col justify-between">
                <div>
                  <span className="bg-[#2F3640] px-5 py-3 rounded-full text-sm">
                    {selectedPlan?.name}
                  </span>

                  <p className="mt-6 text-sm text-gray-200">
                    Mulai dari {selectedPlan?.label}
                  </p>
                  <p className="text-sm text-gray-200 mb-6">
                    {" "}
                    {selectedPlan?.accounts}
                  </p>

                  <ul className="space-y-3 text-sm">
                    <li>✓ Tidak ada iklan</li>
                    <li>✓ Kualitas {selectedPlan?.quality}</li>
                    <li>✓ Download konten pilihan</li>
                  </ul>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <button className="w-full bg-white text-blue-700 font-semibold py-2 rounded-full">
                    Langganan
                  </button>
                  <p className="text-xs text-center mt-3">
                    Syarat dan Ketentuan Berlaku
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT - PAYMENT FORM ================= */}
            <div className="md:w-2/3 space-y-6">
              {/* PAYMENT METHOD */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Metode Pembayaran
                </h2>

                <div className="space-y-3">
                  <div className="border border-gray-600 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-white transition">
                    <input
                      onChange={() => setSelectedPaymentMethod("card")}
                      type="radio"
                      name="payment"
                    />
                    <img src={visa} alt="Visa" className="w-10 h-6 bg-white" />
                    <img
                      src={mastercard}
                      alt="Mastercard"
                      className="w-10 h-6 bg-white"
                    />
                    <span>Kartu Debit/Kredit</span>
                  </div>

                  <div className="border border-gray-600 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-white transition">
                    <input
                      onChange={() => setSelectedPaymentMethod("bca")}
                      type="radio"
                      name="payment"
                    />
                    <img src={bca} alt="BCA" className="w-10 h-6 bg-white" />
                    <span>BCA Virtual Account</span>
                  </div>
                </div>
              </div>

              {/* VOUCHER */}
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Kode Voucher (Jika ada)
                </h2>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Masukkan kode voucher"
                    className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
                  />
                  <button className="bg-[#2F3334] px-5 rounded-lg hover:bg-gray-600 transition cursor-pointer">
                    Gunakan
                  </button>
                </div>
              </div>

              {/* TRANSACTION SUMMARY */}
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Ringkasan Transaksi
                </h2>

                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Harga Paket Premium</span>
                    <span>
                      Rp
                      {selectedPlan?.price.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Biaya Admin</span>
                    <span>Rp3.000</span>
                  </div>

                  <div className="flex justify-between font-bold text-white text-lg">
                    <span>Total Pembayaran</span>
                    <span>Rp{totalPayment.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!selectedPaymentMethod) {
                      toast.error("Pilih metode pembayaran dulu");
                      return;
                    }
                    navigate("/detailpayment");
                  }}
                  className="mt-6 bg-[#09147A] hover:bg-blue-700 transition px-8 py-2 rounded-full font-semibold cursor-pointer"
                >
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

export default Payment;

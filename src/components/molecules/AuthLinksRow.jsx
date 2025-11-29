import { Link } from "react-router-dom";

export default function AuthLinksRow({ hideForgot, isRegister }) {
  return (
    <div className="flex justify-between text-xs md:text-sm lg:text-base text-gray-300 mb-5">
      {isRegister ? (
        // Jika sedang REGISTER → tampilkan link ke LOGIN
        <Link to={"/login"} className="text-[#C1C2C4]">
          Sudah punya akun?{" "}
          <span className="text-white hover:cursor-pointer">Masuk</span>
        </Link>
      ) : (
        // Jika sedang LOGIN → tampilkan link ke REGISTER
        <Link to={"/register"} className="text-[#C1C2C4]">
          Belum punya akun?{" "}
          <span className="text-white hover:cursor-pointer">Daftar</span>
        </Link>
      )}

      {!hideForgot && (
        <a href="#" className="text-white">
          Lupa kata sandi?
        </a>
      )}
    </div>
  );
}

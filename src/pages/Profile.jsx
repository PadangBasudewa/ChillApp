import { FaEye, FaPencil, FaEyeSlash } from "react-icons/fa6";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import horn from "../assets/images/horn.png";
import { useState, useEffect, use } from "react";
import { useFilmStore } from "../store/useFilmStore";
import { useUserStore } from "../store/useUserStore";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const films = useFilmStore((state) => state.films);

  const currentUser = useUserStore((state) => state.currentUser);
  const updateUser = useUserStore((state) => state.updateUser);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setForm({
        username: currentUser.username,
        password: currentUser.password,
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const schema = z.object({
      username: z.string().min(3, "Username minimal 3 karakter"),
      password: z.string().min(6, "Password minimal 6 karakter"),
    });

    const result = schema.safeParse(form);

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    const response = updateUser(form);

    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success("Profile berhasil diperbarui 🔥");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      updateUser({
        username: form.username,
        password: form.password,
        avatar: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }

    toast.success("Foto profile diperbarui 🔥");
  };

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />
      <main className="px-4 md:px-24 py-8">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">Profil Saya</h1>

          {/* SECTION PROFILE + SUBSCRIPTION */}
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gray-500">
                  {currentUser?.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-gray-400" />
                  )}
                </div>
                <div>
                  <label className="bg-[#09147A] hover:bg-blue-700 transition px-4 py-2 rounded-full text-sm cursor-pointer">
                    Ubah Foto
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-3">Maksimal 2MB</p>
                </div>
              </div>
              {/* Input Nama */}
              <div className="relative">
                <label className="text-sm text-gray-400">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full mt-2 bg-[#23272A] border border-gray-600 rounded-lg px-4 py-3 pr-10"
                />
                <FaPencil
                  size={16}
                  className="absolute right-3 top-[46px] text-gray-400 cursor-pointer"
                />
              </div>
              {/* Input Password */}
              <div className="relative">
                <label className="text-sm text-gray-400">Kata Sandi</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                  className="w-full mt-2 bg-[#23272A] border border-gray-600 rounded-lg px-4 py-3 pr-10"
                />
                {showPassword ? (
                  <FaEyeSlash
                    size={16}
                    onClick={() => setShowPassword(false)}
                    className="absolute right-3 top-[46px] text-gray-400 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    size={16}
                    onClick={() => setShowPassword(true)}
                    className="absolute right-3 top-[46px] text-gray-400 cursor-pointer"
                  />
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="bg-[#09147A] hover:bg-blue-700 transition px-6 py-2 rounded-full"
              >
                Simpan
              </button>
            </div>
            {/* RIGHT - SUBSCRIPTION CARD */}
            <div className="md:w-[500px]">
              <div className="bg-[#3D4142] p-6 rounded-xl shadow-lg">
                {/* Content */}
                <div className="flex items-start gap-4">
                  <img
                    src={horn}
                    className="w-18 md:w-25 shrink-0"
                    alt="Horn Icon"
                  />

                  <div>
                    <h2 className="text-base md:text-lg font-semibold leading-snug">
                      Saat ini anda belum berlangganan
                    </h2>
                    <p className="text-sm md:text-sm text-gray-400 mt-2">
                      Dapatkan akses tak terbatas ke ribuan film dan series
                      kesukaan kamu!
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => navigate("/subscription")}
                    className="bg-[#2F3334] hover:bg-gray-600 transition px-5 py-2 rounded-full text-sm"
                  >
                    Mulai Berlangganan
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* DAFTAR SAYA */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold">Daftar Saya</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                Lihat Semua
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {films.map((film) => (
                <>
                  <div
                    key={film.id}
                    className="bg-[#202225] rounded-xl overflow-hidden"
                  >
                    <div className="relative aspect-3/4 md:aspect-3/4">
                      <img
                        src={film.poster}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs rounded">
                        ⭐ {film.rating}
                      </span>
                    </div>

                    <div className="p-3">
                      <h3 className="font-semibold text-xs md:text-sm line-clamp-1">
                        {film.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-gray-400 line-clamp-1">
                        {film.genre.join(", ")}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Profile;

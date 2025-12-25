import { useState, useEffect } from "react";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import FilmFormModal from "../components/organism/FilmFormModal";
import toast from "react-hot-toast";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function DashboardFilm() {
  const [openModal, setOpenModal] = useState(false);
  const [films, setFilms] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem("films") || "[]");
    setFilms(storedFilms);
  }, []);

  const handleAddFilm = (filmData, editIndex) => {
    let updatedFilms = [...films];

    if (editIndex !== null) {
      // ✏️ EDIT
      updatedFilms[editIndex] = filmData;
      toast.success("Film berhasil diperbarui!");
    } else {
      // ➕ ADD
      updatedFilms.push(filmData);
      toast.success("Film berhasil ditambahkan!");
    }

    setFilms(updatedFilms);
    localStorage.setItem("films", JSON.stringify(updatedFilms));
  };

  const handleEditFilm = (index) => {
    setEditingIndex(index);
    setOpenModal(true);
  };

  const handleDeleteFilm = (index) => {
    const updatedFilms = films.filter((_, i) => i !== index);
    setFilms(updatedFilms);
    localStorage.setItem("films", JSON.stringify(updatedFilms));
    toast.success("Film berhasil dihapus");
  };

  return (
    <div
      className={`bg-[#181A1C] min-h-screen text-white md:pt-24 flex flex-col`}
    >
      <NavbarMobile />
      <div
        className={`${openModal ? "blur-sm" : ""} transition-all duration-300`}
      >
        <main className="px-4 md:px-24 py-8 flex-1">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold md:text-4xl">
                  Dashboard Film
                </h1>
                <p className="text-gray-300 mb-6 mt-2">Kelola data film</p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-600 hover:bg-blue-800 text-white py-3 md:px-7 px-3 rounded-md mb-8 font-semibold"
              >
                Tambahkan Film
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {films.map((film, index) => (
                <div
                  key={index}
                  className="bg-[#202225] rounded-lg overflow-hidden relative group"
                >
                  <div className="relative">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="h-48 md:h-64 w-full object-cover"
                    />

                    {/* RATING */}
                    <span className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs rounded">
                      ⭐ {film.rating}
                    </span>
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold text-xs md:text-base line-clamp-1">
                      {film.title}
                    </h3>

                    <p className="text-[10px] md:text-xs text-gray-400 line-clamp-1">
                      {film.genre.join(", ")}
                    </p>
                    <div className="md:absolute md:bottom-2 md:right-2 flex gap-3 pt-1.5">
                      <button
                        onClick={() => handleEditFilm(index)}
                        className="bg-black/60 hover:bg-blue-600 p-1.5 md:p-2 rounded-full text-xs md:text-sm transition"
                        title="Edit"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        onClick={() => handleDeleteFilm(index)}
                        className="bg-black/60 hover:bg-red-600 p-1.5 md:p-2 rounded-full text-xs md:text-sm transition"
                        title="Hapus"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {openModal && (
        <FilmFormModal
          onClose={() => {
            setOpenModal(false);
            setEditingIndex(null);
          }}
          onSubmited={handleAddFilm}
          initialData={editingIndex !== null ? films[editingIndex] : null}
          editIndex={editingIndex}
        />
      )}

      {films.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg">Belum ada film</p>
          <p className="text-sm">Klik "Tambahkan Film" untuk mulai</p>
        </div>
      )}
    </div>
  );
}

export default DashboardFilm;

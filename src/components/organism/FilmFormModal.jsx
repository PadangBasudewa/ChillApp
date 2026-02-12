/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Fantasy",
];

function FilmFormModal({ onClose, onSubmited, initialData, editId }) {
  const [modalRoot, setModalRoot] = useState(null);
  const [form, setForm] = useState({
    title: "",
    genre: [],
    rating: "",
    poster: "",
  });

  // 🔥 pastikan modal-root sudah ada di DOM
  useEffect(() => {
    setModalRoot(document.getElementById("modal-root"));
  }, []);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        genre: initialData.genre,
        rating: initialData.rating,
        poster: initialData.poster,
      });
    }
  }, [initialData]);

  const toggleGenre = (genre) => {
    setForm((prev) => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter((g) => g !== genre)
        : [...prev.genre, genre],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      form.genre.length === 0 ||
      !form.rating ||
      !form.poster.trim()
    ) {
      toast.error("Semua field wajib diisi!");
      return;
    }

    const filmData = {
      title: form.title,
      genre: form.genre,
      rating: Number(form.rating),
      poster: form.poster,
    };

    onSubmited(filmData, editId);
    onClose();
  };

  if (!modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 text-white"
      onClick={onClose}
    >
      <div
        className=" bg-[#202225] w-[90%] max-w-md rounded-lg p-4 md:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition hover:cursor-pointer"
        >
          <FiX className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Film" : "Tambah Film"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Contoh: Inception"
            className="w-full px-3 py-2 rounded bg-[#2f3136]"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <div>
            <p className="text-sm mb-2">Genre</p>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  type="button"
                  onClick={() => toggleGenre(genre)}
                  className={`px-3 py-1 rounded-full text-sm border hover:bg-blue-800 hover:cursor-pointer
                    ${
                      form.genre.includes(genre)
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-500"
                    }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="Rating (9.0)"
            className="w-full px-3 py-2 rounded bg-[#2f3136]"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            required
          />

          <input
            type="url"
            placeholder="Https://examplefree.com/image.jpg"
            className="w-full px-3 py-2 rounded bg-[#2f3136]"
            value={form.poster}
            onChange={(e) => setForm({ ...form, poster: e.target.value })}
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-300 hover:underline hover:cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-800 hover:cursor-pointer"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot,
  );
}

export default FilmFormModal;

import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useFilmStore } from "../store/useFilmStore";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import { useEffect } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const films = useFilmStore((state) => state.films);
  const fetchFilms = useFilmStore((state) => state.fetchFilms);

  const navigate = useNavigate();

  useEffect(() => {
    if (films.length === 0) {
      fetchFilms();
    }
  }, [films, fetchFilms]);

  const movie = films.find((film) => film.id === id);

  if (!movie) return <p className="text-white p-6">Loading...</p>;

  const ratingValue = Number(movie.rating);
  const fullStar = Math.floor(ratingValue);
  const hasHalfStar = ratingValue - fullStar >= 0.5;

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-20">
      <NavbarMobile />
      <main className="px-4 md:px-24 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Detail Film </h1>
        <button
          onClick={() => navigate("/home")}
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
          Kembali
        </button>
        <div className="max-w-6xl">
          {/* MOBILE LAYOUT */}
          <div className="md:hidden space-y-4">
            <img
              src={movie.image}
              alt={movie.title}
              className="md:w-full rounded-xl h-auto object-cover"
            />
            <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">{movie.rating}</span>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-4">
              {movie.genre?.map((g, i) => (
                <span
                  key={i}
                  className="border border-gray-600 px-3 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:flex gap-8">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-[300px] rounded-xl"
            />

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-semibold">{movie.rating}</span>
                <div className="flex gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < fullStar
                          ? "text-blue-500"
                          : hasHalfStar && i === fullStar
                            ? "text-blue-500"
                            : "text-gray-500"
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-gray-300 mb-6 bg-white/10 w-max px-4 py-2 rounded-full">
                {movie.genre?.map((g, i) => (
                  <span key={i}>{g}</span>
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {movie.synopsis}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

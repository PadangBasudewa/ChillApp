import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { useFilmStore } from "../store/useFilmStore";
import NavbarMobile from "../components/molecules/NavbarMobile";
import Footer from "../components/organism/Footer";
import { useEffect, useRef, useState } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const films = useFilmStore((state) => state.films);
  const fetchFilms = useFilmStore((state) => state.fetchFilms);
  const [showTrailer, setShowTrailer] = useState(false);
  const iframeRef = useRef(null);

  const handlePlay = () => {
    setShowTrailer(true);

    setTimeout(() => {
      if (iframeRef.current?.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }, 100);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (films.length === 0) {
      fetchFilms();
    }
  }, []);

  const movie = films.find((film) => film.id === id);
  if (!movie) {
    return (
      <div className="bg-[#181A1C] min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }
  const ratingValue = Number(movie.rating);
  const roundedRating = Math.round(ratingValue * 2) / 2;

  const getYoutubeId = (url) => {
    const regExp = /v=([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  };
  const getEmbedUrl = (url) => {
    if (!url) return null;

    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  };

  // const thumbnail = `https://img.youtube.com/vi/${getYoutubeId(movie.trailer)}/maxresdefault.jpg`;
  const hasTrailer = movie.trailer && movie.trailer.trim() !== "";

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-20">
      <NavbarMobile />
      <main className="px-4 md:px-24 md:py-10 py-5">
        <h1 className="text-2xl md:text-3xl font-bold">Detail Film </h1>
        <button
          onClick={() => navigate("/home")}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mt-2 mb-10 hover:cursor-pointer"
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
            <div className="w-full aspect-9/10 overflow-hidden rounded-xl">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
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
            <div className="w-[280px] aspect-3/4 overflow-hidden rounded-xl ">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl font-semibold">{movie.rating}</span>
                <div className="flex gap-2">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const starNumber = i + 1;

                    if (roundedRating >= starNumber) {
                      return <FaStar key={i} className="text-yellow-400" />;
                    } else if (roundedRating === starNumber - 0.5) {
                      return (
                        <FaStarHalfAlt key={i} className="text-yellow-400" />
                      );
                    } else {
                      return <FaStar key={i} className="text-gray-400" />;
                    }
                  })}
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
        <hr className="border-white/10 my-10" />
      </main>
      <div className="px-4 md:px-24">
        <section>
          <h2 className="text-2xl font-bold mb-6">Trailer</h2>

          {!hasTrailer ? (
            <div className="aspect-video w-full rounded-xl border border-dashed border-gray-500 flex items-center justify-center bg-gray-900/40">
              <div className="text-center space-y-2">
                <p className="text-gray-300 text-lg font-medium">
                  Trailer belum tersedia
                </p>
                <p className="text-gray-400 text-sm">
                  Silakan tambahkan link YouTube trailer pada data movie.
                </p>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video w-full rounded-xl overflow-hidden group cursor-pointer">
              {!showTrailer ? (
                <div onClick={handlePlay} className="w-full h-full relative">
                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeId(movie.trailer)}/maxresdefault.jpg`}
                    alt="Trailer Thumbnail"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <span className="text-white text-3xl">▶</span>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  className="w-full h-full"
                  src={getEmbedUrl(movie.trailer) + "&autoplay=1"}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

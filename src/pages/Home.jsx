import NavbarMobile from "../components/molecules/NavbarMobile";
import HeroBanner from "../components/organism/HeroBanner";
// import ContinueWatchingSection from "../components/organism/ContinueWatchingSection_backup";
import CarouselSection from "../components/organism/CarouselSection";
import Footer from "../components/organism/Footer";
import ContinueWatchingSection from "../components/organism/ContinueWatchingSection";
import { useFilmStore } from "../store/useFilmStore";
import { useEffect } from "react";

export default function Home() {
  const films = useFilmStore((state) => state.films);
  const fetchFilms = useFilmStore((state) => state.fetchFilms);

  useEffect(() => {
    fetchFilms();
  }, []);

  const topRating = films
    .filter((film) => film.category === "TOP_RATING")
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5)
    .map((film) => ({
      image: film.poster,
      badge: "Top 10",
      variant: "top10",
    }));

  const filmTrending = films
    .filter((film) => film.category === "TRENDING")
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5)
    .map((film) => ({
      image: film.poster,
      badge: "Top 10",
      variant: "top10",
    }));

  const rilisBaru = films
    .filter((film) => film.category === "NEW_RELEASE")
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5)
    .map((film) => ({
      image: film.poster,
      badge: "Episode Baru",
      variant: "episode",
    }));

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />
      <HeroBanner />
      <ContinueWatchingSection />
      <CarouselSection
        title="Top Rating Film dan Series Hari ini"
        items={topRating}
      />
      <CarouselSection title="Film Trending" items={filmTrending} />
      <CarouselSection title="Rilis Baru" items={rilisBaru} />

      <Footer />
    </div>
  );
}

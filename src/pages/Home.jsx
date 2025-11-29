import NavbarMobile from "../components/molecules/NavbarMobile";
import HeroBanner from "../components/organism/HeroBanner";
// import ContinueWatchingSection from "../components/organism/ContinueWatchingSection_backup";
import CarouselSection from "../components/organism/CarouselSection";
import topR1 from "../assets/images/top-r1.png";
import topR2 from "../assets/images/top-r2.png";
import topR3 from "../assets/images/top-r3.png";
import topR4 from "../assets/images/top-r4.png";
import trend1 from "../assets/images/trend1.png";
import trend2 from "../assets/images/trend2.png";
import trend3 from "../assets/images/trend3.png";
import trend4 from "../assets/images/trend4.png";
import rb1 from "../assets/images/rb1.png";
import rb2 from "../assets/images/rb2.png";
import rb3 from "../assets/images/rb3.png";
import Footer from "../components/organism/Footer";
import ContinueWatchingSection from "../components/organism/ContinueWatchingSection";

export default function Home() {
  const topRating = [
    { image: topR1, badge: "Episode Baru", variant: "episode" },
    { image: topR2 },
    { image: topR3 },
    { image: topR4 },
    { image: rb3, badge: "Top 10", variant: "top10" },
  ];

  const filmTranding = [
    { image: trend1, badge: "Top 10", variant: "top10" },
    { image: trend2, badge: "Top 10", variant: "top10" },
    { image: trend3, badge: "Top 10", variant: "top10" },
    { image: trend4, badge: "Top 10", variant: "top10" },
    { image: rb1, badge: "Top 10", variant: "top10" },
  ];

  const rilisBaru = [
    { image: rb1, badge: "Top 10", variant: "top10" },
    { image: rb2, badge: "Episode Baru", variant: "episode" },
    { image: rb3, badge: "Top 10", variant: "top10" },
    { image: topR3 },
    { image: topR2 },
  ];

  return (
    <div className="bg-[#181A1C] min-h-screen text-white pb-10 md:pt-24">
      <NavbarMobile />
      <HeroBanner />
      <ContinueWatchingSection />
      <CarouselSection
        title="Top Rating Film dan Series Hari ini"
        items={topRating}
      />
      <CarouselSection title="Film Trending" items={filmTranding} />
      <CarouselSection title="Rilis Baru" items={rilisBaru} />

      <Footer />
    </div>
  );
}

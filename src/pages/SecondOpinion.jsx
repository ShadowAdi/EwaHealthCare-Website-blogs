import HeroSection from "../components/secondOpinion/HeroSection";
import Footer from "../components/Footer";
import First from "../components/secondOpinion/First";
import Second from "../components/secondOpinion/Second";
import Third from "../components/secondOpinion/Third";
import Fourth from "../components/secondOpinion/Fourth";
import Fifth from "../components/secondOpinion/Fifth";
import Sixth from "../components/secondOpinion/Sixth";
import Seventh from "../components/secondOpinion/Seventh";
import Eighth from "../components/secondOpinion/Eighth";
import Header from "../components/Header";
import Features6 from "../components/secondOpinion/Features6";

export default function SecondOpinion() {
  return (
    <>
      {/* Fixed Header */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Push content below header */}
      <main className="pt-16 sm:pt-20 w-full">
        <HeroSection />
        <First />
        <Second />
        <Third />
        <Fourth />
        {/* <Features6/> */}
        <Fifth />
        <Sixth />
        <Seventh />
        {/* <Eighth /> */}
        <Footer />
      </main>
    </>
  );
}

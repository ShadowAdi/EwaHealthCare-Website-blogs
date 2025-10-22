import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

const BentoGrid = lazy(() => import("../components/BentoGrid"));
const BlogsSection = lazy(() => import("../components/BlogsSection"));
const BrandCarousel = lazy(() => import("../components/BrandCarousel"));
const Coverage = lazy(() => import("../components/Coverage"));
const FAQ = lazy(() => import("../components/FAQ"));
const FloatingButtons = lazy(() => import("../components/FloatingButtons"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));
const HealthPlanSection = lazy(() => import("../components/HealthPlanSection"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const OurImpact = lazy(() => import("../components/OurImpact"));
const PlanSection = lazy(() => import("../components/PlanSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const ScreenshotGallery = lazy(() => import("../components/photo"));
const VideoPlayer = lazy(() => import("../components/vid"));



// import BentoGrid from "../components/BentoGrid";
// import BlogsSection from "../components/BlogsSection";
// import BrandCarousel from "../components/BrandCarousel";
// import Coverage from "../components/Coverage";
// import FAQ from "../components/FAQ";
// import FloatingButtons from "../components/FloatingButtons";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import HealthPlanSection from "../components/HealthPlanSection";
// import HeroSection from "../components/HeroSection";
// import OurImpact from "../components/OurImpact";
// import PlanSection from "../components/PlanSection";
// import TestimonialsSection from "../components/TestimonialsSection";
// import ScreenshotGallery from "../components/photo";
// import VideoPlayer from "../components/vid";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title> Second Medical Opinion Online | Surgical Reviews – MyEwacare</title>
        <meta
          name="description"
          content="Get trusted second medical opinions for surgeries from top specialists. Fast, reliable surgical reviews and virtual consultations – only at MyEwacare "
        />
        <link rel="canonical" href="https://myewacare.com/" />
      </Helmet>
      <Suspense >
        <Header />
        <HeroSection />
        <BrandCarousel />
        <Coverage />
        <VideoPlayer />
        <PlanSection />
        <BentoGrid />
        <ScreenshotGallery />
        <OurImpact />
        <HealthPlanSection />
        <TestimonialsSection />
        <FAQ />
        <BlogsSection />
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;

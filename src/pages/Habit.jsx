import React, { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const FloatingButtons = lazy(() => import("../components/FloatingButtons"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));
const HeroHeader = lazy(() => import("../components/HeroHeader"));

const HabitPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <HeroHeader />
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  );
};

export default HabitPage;

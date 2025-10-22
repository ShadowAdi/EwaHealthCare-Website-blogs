import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroService3 from "../components/SurgeryConsultation/HeroService3";
import Features3Service3 from "../components/SurgeryConsultation/Features3Service3";
import Feature2Servivce3 from "../components/SurgeryConsultation/Feature2Service3";
import Feature5Service3 from "../components/SurgeryConsultation/Feature5Service3";
import Feature4Service3 from "../components/SurgeryConsultation/Feature4Service3";
import Features7 from "../components/SurgeryConsultation/Features7";
import Feature8 from "../components/SurgeryConsultation/Feature8";

const SurgeryConsultation = () => {
  return (
    <>
      <Header className="fixed top-0 left-0 w-full z-50" />
      <main className="w-full h-full flex flex-col items-center min-h-screen bg-[#fff] text-black pt-[90px] sm:pt-[100px] lg:pt-[110px]">
        <HeroService3 />
        <Feature2Servivce3 />
        <Features3Service3 />
        <Feature4Service3 />
        <Feature5Service3 />
        <Features7 />
        <Feature8 />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default SurgeryConsultation;

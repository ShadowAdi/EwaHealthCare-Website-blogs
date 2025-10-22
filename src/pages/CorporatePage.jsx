import React from "react";
import Features from "../components/corporatePage/Features";
import Feature3 from "../components/corporatePage/Feature3";
import Features4 from "../components/corporatePage/Features4";
import Features5 from "../components/corporatePage/Features5";
import Features6 from "../components/corporatePage/Features6";
import Features7 from "../components/corporatePage/Features7";
import Feature8 from "../components/corporatePage/Feature8";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/corporatePage/Hero";

const CorporatePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black overflow-x-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content with offset */}
      <main className="flex-1 w-full pt-[80px]">
        <Hero />
        <Features />
        <Feature3 />
        <Features4 />
        <Features6 />
        <Features5 />
        <Features7 />
        <Feature8 />
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default CorporatePage;

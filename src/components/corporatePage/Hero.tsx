import React, { useState } from "react";
import { motion } from "framer-motion";
import ScheduleDemoModal from "../ScheduleDemoModal"; // import the modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);

  return (
    <>
      <section
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row py-8 lg:py-10 overflow-x-hidden lg:items-center justify-between flex-1 space-x-6"
        style={{ background: "linear-gradient(to right, #ffffff, #CCF8FA)" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col flex-1 items-center md:items-start w-full justify-center space-y-4 lg:space-y-6 sm:w-1/2"
        >
          <div className="flex flex-col items-start space-y-0"></div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold font-poppins text-center md:text-left">
            Corporate <br />
            <span className="text-[#02989D]">Wellness Programs</span>
          </h1>

          <p className="text-base md:text-lg xl:text-xl text-center md:text-left text-[#0C1F30]">
            Empower your workforce with holistic, personalized wellness programs
            designed to boost employee health, engagement, and productivity — all
            supported by expert guidance and technology-driven solutions.
          </p>

          {/* 🔥 Modal Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#02989D] hover:bg-[#038f93] cursor-pointer text-white text-md font-medium lg:text-base xl:text-xl px-6 py-3 rounded-full shadow-md transition-colors duration-300 font-poppins"
          >
            Book a Corporate Consultation
          </button>
        </motion.div>

        <div className="flex-1 w-full items-center justify-center flex">
          <img
            src="/images/corporatePage/HeroImage.svg"
            alt="Hero"
            className="object-contain h-[400px] w-[500px]"
          />
        </div>
      </section>

      {/* 🔥 Reusable Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        animateCloseButton={animateCloseButton}
        setAnimateCloseButton={setAnimateCloseButton}
      />
    </>
  );
};

export default Hero;

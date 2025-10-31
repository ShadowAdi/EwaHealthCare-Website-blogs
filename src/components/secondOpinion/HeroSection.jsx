import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../../public/images/secondOpinion/heroImg.png";
import ScheduleDemoModal from "../ScheduleDemoModal"; // make sure path is correct

const HeroSection = () => {
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
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-center md:text-left leading-snug sm:leading-[55px] md:leading-[65px] text-black">
            Get Expert Medical
            <br />
            <span className="font-bold text-[#02989D] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-snug sm:leading-[60px] md:leading-[70px]">
              Second Opinion Services
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-[#0C1F30] font-medium leading-relaxed sm:leading-7 md:leading-[28px] max-w-2xl">
            Access verified specialists to review your diagnosis, explore
            treatment options, and make confident healthcare decisions — all
            online.
          </p>

          {/* 🔥 Modal Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#02989D] hover:bg-[#027b80] cursor-pointer text-white text-sm font-medium lg:text-base px-6 py-3 rounded-full shadow-md transition-colors duration-300 font-poppins"
          >
            Start Your Free Consultation
          </button>
        </motion.div>

        <div className="flex-1 w-full items-center justify-center flex mt-8 lg:mt-0">
          <img
            src={heroImg}
            alt="Doctor Consultation"
            className="object-contain h-[350px] w-[450px]"
          />
        </div>
      </section>
      <div className="-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-row py-3 overflow-x-hidden lg:items-center justify-between flex-1 space-x-6 bg-[#02989D]  items-center ">
        <p className="text-lg text-white">
          Exclusive at MyEwacare: Get your{" "}
          <span className="font-semibold italic">
            {" "}
            medical reports reviewed <br /> for free{" "}
          </span>{" "}
          before your second opinion consultation.
        </p>
        <button className="px-6 py-4 rounded-full bg-white">
          <span className="text-sm font-semibold text-[#242424]">
            Request Your Second Opinion
          </span>
        </button>
      </div>

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

export default HeroSection;

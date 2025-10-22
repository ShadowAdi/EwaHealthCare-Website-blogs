import React, { useState } from "react";
import { motion } from "framer-motion";
import ScheduleDemoModal from "../ScheduleDemoModal";

const HeroService3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-gradient-to-r from-white to-[#CCF8FA] py-8 sm:py-10 lg:py-12 overflow-x-hidden max-w-[1440px] mx-auto"
    >
      {/* Content Wrapper */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col flex-1 items-center lg:items-start w-full justify-center space-y-4 sm:space-y-6 sm:w-1/2"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center lg:text-left leading-snug">
            Expert Multispeciality <br className="block" />
            <span className="text-[#02989D]">Surgery Consultations</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-center lg:text-left text-[#0C1F30] w-full sm:w-[95%] lg:w-[90%] leading-relaxed">
            At MyEwacare, we offer expert multispeciality surgery consultations
            with patient-centric care across India. Our surgeons provide guidance
            in orthopedics, cardiac, bariatric, cosmetic, and more.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#02989D] hover:bg-[#038f93] cursor-pointer text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full shadow-md transition-colors duration-300 font-poppins w-max"
          >
            Book Consultation
          </button>

          {/* Schedule Modal */}
          <ScheduleDemoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </motion.div>

        {/* Image Section */}
        <div className="flex-1 w-full flex items-center justify-center mt-6 lg:mt-0 sm:w-1/2">
          <img
            src="/images/SurgeryConsultation/HeroService3.png"
            alt="Hero"
            className="object-contain h-[350px] w-[400px] sm:h-[300px] sm:w-[260px] md:h-[350px] md:w-[300px] lg:h-[380px] lg:w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroService3;

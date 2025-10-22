import React from "react";
import { motion } from "framer-motion";

const Feature3ServiceCard = ({ imagePath, cardHeadingText, cardSubtitleText, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-between border-2 border-[#DEDEDE1A]/10 rounded-lg space-y-2 sm:space-y-3 relative py-3 sm:py-4 lg:py-6 px-2 sm:px-3 lg:px-4 overflow-hidden w-full h-44 sm:h-48 md:h-52 lg:h-56"
      style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.21)" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/image/SurgeryConsultation/FeatureCardBg.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.08,
        }}
      />

      <div className="flex-shrink-0 mt-1">
        <img
          className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] object-contain relative z-10 mx-auto"
          height={80}
          width={80}
          alt="Logo"
          src={imagePath}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2 flex-grow">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#02989D] relative z-10 line-clamp-2 leading-tight">
          {cardHeadingText}
        </h1>
        <span className="text-xs sm:text-xs md:text-sm font-normal text-[#404040] relative line-clamp-2 sm:line-clamp-3 leading-tight">
          {cardSubtitleText}
        </span>
      </div>
    </motion.div>
  );
};

export default Feature3ServiceCard;

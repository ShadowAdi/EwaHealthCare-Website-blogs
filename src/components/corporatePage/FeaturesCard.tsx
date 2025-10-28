import React from "react";
import { motion } from "framer-motion";

const FeaturesCard = ({ imagePath, cardText, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center   /* ← added */
                  border-2 border-[#DEDEDE1A]/10 rounded-lg 
                  space-y-4 sm:space-y-6 relative 
                  py-4 sm:py-5 px-3 sm:px-4 overflow-hidden 
                  min-h-[180px] sm:min-h-[200px] 
                  h-[240px] sm:h-[260px]               /* ← fixed height */
                  w-full                               /* ← full column width */ 
                  "
      style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.21)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/FeatureCardBg.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.08,
        }}
      />

      {/* Image */}
      <img
        src={imagePath}
        alt={cardText}
        className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain relative z-10"
      />

      {/* Text */}
      <span className="text-sm sm:text-base text-center font-medium text-[#404040] relative z-10">
        {cardText}
      </span>
    </motion.div>
  );
};

export default FeaturesCard;
import React from "react";
import { motion } from "framer-motion";

type  Feature3Type= {
   feature3Path:string,
  feature3Title:string,
  feature3Text:string,
  index:number,
}

const Feature3Row = ({
  feature3Path,
  feature3Title,
  feature3Text,
  index = 0,
}:Feature3Type) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="group flex space-x-2 items-center w-full max-w-[400px] cursor-pointer justify-start rounded-lg px-3 sm:px-6 py-2 transition-all duration-300 border bg-white border-[#B7E3E5] hover:bg-[#02989D]"
    >
      {/* Icon */}
      <img
        alt="Feature3"
        src={feature3Path}
        className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] object-contain flex-shrink-0 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />

      {/* Text */}
      <div className="flex flex-col items-start transition-colors duration-300 group-hover:text-white">
        <h1 className="text-sm sm:text-base text-left font-semibold text-black group-hover:text-white">
          {feature3Title}
        </h1>
        <p className="text-xs sm:text-sm text-left font-normal text-gray-500 group-hover:text-white">
          {feature3Text}
        </p>
      </div>
    </motion.div>
  );
};

export default Feature3Row;

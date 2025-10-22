import React from "react";
import { motion } from "framer-motion";

const Features5 = () => {
  const listItems = [
    {
      title: "Stress Management Program:",
      text: "Mindfulness, meditation, and stress reduction workshops.",
    },
    {
      title: "Nutrition & Wellness Path:",
      text: "Personalized meal plans, workshops, and healthy lifestyle guidance.",
    },
    {
      title: "Fitness & Active Lifestyle Challenge:",
      text: "Virtual and onsite fitness sessions, team challenges.",
    },
    {
      title: "Preventive Health Screenings Package:",
      text: "Comprehensive checkups and risk assessments.",
    },
    {
      title: "Mental Wellbeing & Emotional Support:",
      text: "Counseling, workshops, and peer support groups.",
    },
    {
      title: "Employee Wellness Camps:",
      text: "Engaging onsite wellness camps with fitness, nutrition, and stress management activities.",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row py-8 lg:py-10 overflow-x-hidden lg:items-center justify-between flex-1 lg:space-x-6 space-y-6 lg:space-y-0">
      {/* Left side text section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col flex-1 items-center md:items-start w-full lg:w-[70%] justify-start space-y-4 lg:space-y-10"
      >
        <h1 className="text-xl sm:text-2xl text-center md:text-left font-bold text-[#02989D]">
          Corporate Wellness Journeys & Packages
        </h1>

        <div className="flex flex-col items-start space-y-2 justify-start w-full">
          {listItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-[#404040] text-sm sm:text-base md:text-lg font-normal flex items-start gap-2"
            >
              <img
                src="/images/corporatePage/ListArrow.svg"
                alt="Arrow"
                className="h-4 w-4 object-contain flex-shrink-0 mt-1"
              />
              <span>
                <span className="font-semibold">{item.title}</span> {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 w-full lg:w-[30%] items-center justify-center lg:justify-end flex"
      >
        <img
          src="/images/corporatePage/Feature5.png"
          alt="feature5"
          className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Features5;

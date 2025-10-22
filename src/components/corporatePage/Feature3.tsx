import React from "react";
import { motion } from "framer-motion";
import Feature3Row from "./Feature3Row";

const Feature3 = () => {
  const featureItems: {
    feature3Path: string;
    feature3Title: string;
    feature3Text: string;
    firstOne: boolean;
  }[] = [
    {
      feature3Path: "/images/corporatePage/feature3logo1.png",
      feature3Title: "Boost Employee Productivity",
      feature3Text: "Healthier employees perform better",
      firstOne: true,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo2.png",
      feature3Title: "Reduce Workplace Stress",
      feature3Text: "Stress management workshops and mindfulness programs",
      firstOne: false,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo3.png",
      feature3Title: "Improve Mental Health",
      feature3Text: "Counselling, peer support, and resilience coaching",
      firstOne: false,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo4.png",
      feature3Title: "Promote Healthy Lifestyle",
      feature3Text: "Nutrition planning and fitness challenges",
      firstOne: false,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo5.png",
      feature3Title: "Reduce Absenteeism",
      feature3Text: "Preventive health checkups and proactive care",
      firstOne: false,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo6.png",
      feature3Title: "Enhance Team Engagement",
      feature3Text: "Group challenges, workshops, and camps",
      firstOne: false,
    },
    {
      feature3Path: "/images/corporatePage/feature3logo7.png",
      feature3Title: "Track Impact",
      feature3Text: "Progress dashboards and program analytics",
      firstOne: false,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row py-8 lg:py-10 overflow-x-hidden lg:items-start justify-between flex-1 lg:space-x-6 space-y-6 lg:space-y-0 bg-[#02989D1A]">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col flex-1 items-center md:items-start w-full lg:w-[30%] justify-start space-y-4 lg:space-y-6"
      >
        <div className="flex flex-col items-start space-y-2 justify-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left font-bold text-[#02989D]">
            Benefits of Corporate <br className="hidden md:block" /> Wellness Programs
          </h1>
          <p className="text-[#313131] text-base sm:text-lg md:text-xl font-normal text-center md:text-left">
            Why organizations invest in wellness <br className="hidden md:block" /> programs:
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full h-full flex items-center justify-center"
        >
          <img
            src="/images/corporatePage/Feature3.svg"
            alt="Feature3"
            className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[370px] lg:w-[370px] object-fill"
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Feature Rows */}
      <div className="flex-1 w-full lg:w-[70%] items-center justify-between flex">
        <img
          src="/images/corporatePage/Line2.png"
          alt="line2"
          className="hidden lg:block h-[510px] w-[100px] object-contain"
        />
        <div className="flex h-full flex-1 flex-col items-start space-y-1.5 justify-center">
          {featureItems.map((feature, i) => (
            <Feature3Row
              feature3Path={feature.feature3Path}
              feature3Text={feature.feature3Text}
              feature3Title={feature.feature3Title}
              key={i}
              index={i}
              firstOne={feature.firstOne}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature3;

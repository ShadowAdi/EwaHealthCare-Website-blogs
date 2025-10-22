import React from "react";
import { motion } from "framer-motion";

const Features4 = () => {
  const features = [
    {
      number: "1",
      text: "Specialists in fitness, nutrition, mental health, and preventive care",
    },
    {
      number: "2",
      text: "Onsite and virtual wellness programs for scalable implementation",
    },
    {
      number: "3",
      text: "Data-driven insights to track employee progress and engagement",
    },
    {
      number: "4",
      text: "Personalized consultation and support for your organization",
    },
    {
      number: "5",
      text: "Proven results across industries and workforce sizes",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col py-14 items-center justify-between flex-1 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center w-full justify-center space-y-2 lg:space-y-3 max-w-2xl"
      >
        <h1 className="text-[#02989D] text-2xl sm:text-3xl font-semibold text-center">
          Why Choose MyEwacare?
        </h1>
        <p className="text-lg sm:text-xl text-center text-[#313131] px-4">
          We provide comprehensive, expert-driven corporate wellness solutions:
        </p>
      </motion.div>

      {/* Mobile View - Simple Grid */}
      <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3"
          >
            <span className="text-6xl sm:text-7xl font-bold text-gray-200 flex-shrink-0">
              {feature.number}
            </span>
            <p className="text-gray-700 text-sm sm:text-base pt-3">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Timeline */}
      <div className="hidden lg:flex flex-1 w-full items-center justify-center">
        <div className="w-full max-w-6xl relative flex flex-col space-y-12">
          {/* Top row (odd numbers) */}
          <div className="flex items-center justify-around w-full gap-8 lg:gap-12">
            <FeatureItem index={0} feature={features[0]} delay={0.1} />
            <FeatureItem index={2} feature={features[2]} delay={0.3} />
            <FeatureItem index={4} feature={features[4]} delay={0.5} extraClass="-mr-20" />
          </div>

          {/* Timeline */}
          <TimelineArrows />

          {/* Bottom row (even numbers) */}
          <div className="flex items-center justify-around gap-8 lg:gap-4">
            <FeatureItem index={1} feature={features[1]} delay={0.2} extraClass="ml-20" />
            <FeatureItem index={3} feature={features[3]} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ feature, delay, extraClass = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`flex items-start space-x-3 max-w-[250px] ${extraClass}`}
  >
    <span className="text-8xl font-bold text-gray-200">{feature.number}</span>
    <p className="text-gray-700 text-base">{feature.text}</p>
  </motion.div>
);

const TimelineArrows = () => (
  <div className="relative w-full h-1 bg-[#02989D]">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#02989D] rounded-full"></div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#02989D] rounded-full"></div>

    <div className="absolute left-[10%] -top-[350%] -translate-x-1/2">
      <ArrowUp />
    </div>
    <div className="absolute left-[30%] top-1/2 -translate-x-1/2">
      <ArrowDown />
    </div>
    <div className="absolute left-[50%] -top-[350%] -translate-x-1/2">
      <ArrowUp />
    </div>
    <div className="absolute left-[70%] top-1/2 -translate-x-1/2">
      <ArrowDown />
    </div>
    <div className="absolute left-[90%] -top-[350%] -translate-x-1/2">
      <ArrowUp />
    </div>
  </div>
);

const ArrowUp = () => (
  <div className="w-0 h-0 rotate-180 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-[#02989D]"></div>
);

const ArrowDown = () => (
  <div className="w-0 h-0 rotate-180 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-[#02989D]"></div>
);

export default Features4;

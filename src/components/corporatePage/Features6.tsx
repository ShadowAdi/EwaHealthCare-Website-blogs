import React from "react";
import { motion } from "framer-motion";

const Features6 = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col py-14 items-center justify-between flex-1 space-y-10 bg-[#02989D1A]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center w-full justify-center space-y-1 lg:space-y-1.5 max-w-2xl"
      >
        <h1 className="text-[#02989D] text-2xl sm:text-3xl font-semibold text-center">
          How Our Programs Work
        </h1>
        <p className="text-lg sm:text-xl text-center text-[#313131] px-4">
          Step-by-step, easy-to-implement process:
        </p>
      </motion.div>

      {/* Mobile View - Vertical Steps */}
      <div className="lg:hidden w-full flex flex-col space-y-6 px-4">
        {[
          {
            num: 1,
            title: "Assess Needs",
            text: "Evaluate your organization’s wellness goals and employee needs.",
          },
          {
            num: 2,
            title: "Customize Program",
            text: "Design tailored wellness journeys (fitness, nutrition, mental health, preventive care).",
          },
          {
            num: 3,
            title: "Implement Activities",
            text: "Onsite workshops, virtual sessions, wellness camps.",
          },
          {
            num: 4,
            title: "Track & Monitor",
            text: "Progress dashboards, participation reports, and engagement analytics.",
          },
          {
            num: 5,
            title: "Ongoing Support",
            text: "Follow-ups, expert advice, and program refinements.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#02989D] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
              {step.num}
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-base sm:text-lg font-bold text-[#404040]">
                {step.title}
              </span>
              <p className="text-[#404040] text-sm sm:text-base">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Timeline */}
      <div className="hidden lg:flex flex-1 w-full items-center justify-center">
        <div className="w-full max-w-6xl relative flex flex-col space-y-4">
          {/* Replace with <img> since Next/Image is not available */}
          <img
            alt="Numbers"
            width={1000}
            height={100}
            src="/images/corporatePage/Numbers.png"
            className="w-full flex-1 object-cover"
          />

          <div className="flex items-center justify-between space-x-6">
            {[
              {
                title: "Assess Needs",
                text: "Evaluate your organization’s wellness goals and employee needs.",
              },
              {
                title: "Customize Program",
                text: "Design tailored wellness journeys (fitness, nutrition, mental health, preventive care).",
              },
              {
                title: "Implement Activities",
                text: "Onsite workshops, virtual sessions, wellness camps.",
              },
              {
                title: "Track & Monitor",
                text: "Progress dashboards, participation reports, and engagement analytics.",
              },
              {
                title: "Ongoing Support",
                text: "Follow-ups, expert advice, and program refinements.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start space-y-2"
              >
                <span className="text-xl font-bold text-[#404040]">
                  {step.title}
                </span>
                <p className="text-[#404040] text-base">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features6;

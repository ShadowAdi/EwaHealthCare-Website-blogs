import React, { useState } from "react";
import fourth from "../../../public/images/secondOpinion/fourth.png";
import one from "../../../public/images/secondOpinion/four1.png";
import two from "../../../public/images/secondOpinion/four2.png";
import three from "../../../public/images/secondOpinion/four3.png";
import fourImg from "../../../public/images/secondOpinion/four4.png";
import five from "../../../public/images/secondOpinion/four5.png";
import ScheduleDemoModal from "../ScheduleDemoModal"; // adjust path if needed
import { motion } from "framer-motion";

const Features6 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);

  const steps = [
    {
      img: one,
      title: "Assess Needs",
      text: "Evaluate your organization’s wellness goals and employee needs.",
    },
    {
      img: two,
      title: "Customize Program",
      text: "Design tailored wellness journeys (fitness, nutrition, mental health, preventive care).",
    },
    {
      img: three,
      title: "Implement Activities",
      text: "Onsite workshops, virtual sessions, wellness camps.",
    },
    {
      img: fourImg,
      title: "Track & Monitor",
      text: "Progress dashboards, participation reports, and engagement analytics.",
    },
    {
      img: five,
      title: "Ongoing Support",
      text: "Follow-ups, expert advice, and program refinements.",
    },
  ];

  return (
    <>
      <section className="w-full  px-4 sm:px-10 flex flex-col py-14 items-center justify-between flex-1 space-y-10 bg-[#02989D1A] max-w-[1440px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col flex-1 items-center w-full justify-center space-y-1 lg:space-y-1.5 max-w-2xl text-center"
        >
          <h1 className="text-[#02989D] text-2xl sm:text-3xl font-semibold">
            How Our Second Opinion Process Works
          </h1>
          <p className="text-lg sm:text-xl text-[#313131] px-4">
            Getting a second opinion with Myewacare is simple, secure, and
            designed around your convenience.
            <br />
            Our streamlined second opinion online process ensures you receive
            expert guidance without hassle:
          </p>
        </motion.div>

        {/* Mobile View */}
        <div className="lg:hidden w-full flex flex-col space-y-6 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#02989D] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                {index + 1}
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-base sm:text-lg font-bold text-[#404040]">
                  {step.title}
                </span>
                <p className="text-[#404040] text-sm sm:text-base">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-1 w-full items-center justify-center">
          <div className="w-full max-w-6xl relative flex flex-col space-y-4">
            <img
              alt="Numbers"
              width={1000}
              height={100}
              src="/images/corporatePage/Numbers.png"
              className="w-full flex-1 object-cover"
            />

            <div className="flex items-center justify-between space-x-6">
              {steps.map((step, index) => (
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

        {/* Centered Button at Bottom */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#02998D] text-white px-6 py-3 rounded-full hover:bg-[#028177] transition-colors"
        >
          Request Your Second Opinion
        </button>
      </section>

      {/* Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        animateCloseButton={animateCloseButton}
        setAnimateCloseButton={setAnimateCloseButton}
      />
    </>
  );
};

export default Features6;

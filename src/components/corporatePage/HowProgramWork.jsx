import React, { useState } from "react";
import fourth from "../../../public/images/secondOpinion/fourth.png";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleDemoModal from "../ScheduleDemoModal"; // adjust path if needed

const faqData = [
  {
    id: 1,
    question: "Assess Needs:",
    answer: "Evaluate your organization’s wellness goals and employee needs",
  },
  {
    id: 2,
    question: "Customize Program:",
    answer: "Design tailored wellness journeys (fitness, nutrition, mental health, preventive care)",
  },
  {
    id: 3,
    question: "Implement Activities:",
    answer: "Onsite workshops, virtual sessions, wellness camps",
  },
  {
    id: 4,
    question: "Track & Monitor:",
    answer: "Progress dashboards, participation reports, and engagement analytics",
  },
  {
    id: 5,
    question: "Ongoing Support:",
    answer: "Follow-ups, expert advice, and program refinements",
  },
];

const HowProgramWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(id);
  };

  const hoverFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const unhoverFAQ = (id) => {
    if (openId === id) {
      setOpenId(null);
    }
  };

  return (
    <>
      <section
        className="py-16 px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto"
        style={{ backgroundColor: "rgba(2, 152, 157, 0.1)" }} // #02989D at 10% opacity
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-2xl font-bold text-[#02989D]">
              How Our Corporate Wellness Process Works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our{" "}
              <span className="font-semibold text-black">
                simple, step-by-step online process
              </span>{" "}
              <br />
              ensures convenience and clarity:
            </p>
            <img
              src={fourth}
              alt="Doctors consulting"
              className="w-full max-w-md mb-6 rounded-lg mx-auto lg:mx-0"
            />
            {/* 🔥 Modal Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#02998D] text-white px-6 py-3 rounded-full hover:bg-[#028177] transition-colors w-full lg:w-auto"
            >
              Request Your Corporate Wellness
            </button>
          </div>

          <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start space-y-2 sm:space-y-3">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="py-2 sm:py-3 flex flex-col items-start justify-center w-full"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  onMouseEnter={() => hoverFAQ(faq.id)}
                  onMouseLeave={() => unhoverFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 pr-2 sm:pr-4 w-full">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <span
                        className={`text-xl sm:text-2xl lg:text-3xl flex-shrink-0 leading-none relative ${
                          openId !== faq.id
                            ? "text-[#02989D80]"
                            : "text-[#02989D]"
                        }`}
                      >
                        {faq.id.toString().padStart(2, "0")}
                        <div
                          className={`w-[0.5px] absolute h-8 sm:h-10 lg:h-12 left-1/2 transition-colors duration-300 ${
                            openId === faq.id ? "bg-[#2E2F35] flex" : "hidden"
                          }`}
                        />
                      </span>
                    </div>

                    <div className="flex flex-col items-start space-y-2 sm:space-y-3 flex-1">
                      <span
                        className={`text-base sm:text-lg lg:text-xl font-semibold leading-tight ${
                          openId === faq.id
                            ? "text-[#02989D]"
                            : "text-[#2E2F3566]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <AnimatePresence initial={false}>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="overflow-hidden w-full"
                          >
                            <p className="text-[#58595D] text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default HowProgramWork;

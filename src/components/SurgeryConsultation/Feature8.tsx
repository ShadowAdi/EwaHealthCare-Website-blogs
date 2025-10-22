import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What is included in a wellness program?",
    answer: "Fitness, nutrition, mental health support, preventive care",
  },
  {
    id: 2,
    question: "Can programs be customized?",
    answer:
      "Yes, our programs are fully customizable to meet your organization's specific needs and goals. We work closely with you to design a wellness program that fits your company culture and employee requirements.",
  },
  {
    id: 3,
    question: "Are programs online or onsite?",
    answer:
      "We offer both online and onsite options. You can choose virtual wellness sessions, in-person workshops, or a hybrid approach that combines both formats for maximum flexibility and engagement.",
  },
  {
    id: 4,
    question: "How do you track employee progress?",
    answer:
      "We provide comprehensive tracking tools including health assessments, progress dashboards, participation metrics, and regular reports to help you monitor employee engagement and wellness outcomes.",
  },
  {
    id: 5,
    question: "What is the cost of a program?",
    answer:
      "Program costs vary based on company size, services selected, and customization level. Contact us for a personalized quote tailored to your organization's needs and budget.",
  },
];

const Feature8 = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col lg:flex-row py-10 sm:py-20 items-center justify-between lg:space-x-10 space-y-8 lg:space-y-0">
      {/* Left side */}
      <div className="flex-1 space-y-8 flex flex-col w-full lg:w-1/2">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#0C1F30] text-center">
          Frequently Asked Questions
        </h2>

        <div className="bg-[#E8F5F6] rounded-2xl p-8 sm:p-10 flex flex-col items-center space-y-6">
          <div className="flex items-center -space-x-5">
            <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
                alt="Team member 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                alt="Team member 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60"
                alt="Team member 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-[#0C1F30]">
              Still have questions?
            </h3>
            <p className="text-[#404040] text-base max-w-sm">
              We’re here for you. Talk to us and let us know how we can help.
            </p>
          </div>

          <a href="https://wa.me/9686638384" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#02989D] hover:bg-[#027478] text-white font-semibold px-5 py-3 rounded-full transition-colors duration-300">
    Talk to us
  </button>
</a>

        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 w-full md:w-1/2">
        <div className="flex flex-col items-start w-full">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 py-6 flex flex-col items-start justify-center w-full"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
                aria-expanded={openId === faq.id}
              >
                <span className="text-base sm:text-lg font-medium text-[#1E1028] pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#404040] flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#79717F] text-sm sm:text-base mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature8;

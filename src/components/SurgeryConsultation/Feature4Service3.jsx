import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleDemoModal from "../ScheduleDemoModal";

const faqData = [
  {
    id: 1,
    question: "Select Your Specialty:",
    answer:
      "Choose your surgical specialty based on your health needs (Orthopedic, Cardiac, Bariatric, Oncology, etc.)",
  },
  {
    id: 2,
    question: "Upload Medical Reports:",
    answer:
      "Securely upload scans, lab reports, and other medical records for the surgeon’s review.",
  },
  {
    id: 3,
    question: "Share Personal & Health Details:",
    answer:
      "Fill in basic information and health history to help the surgeon understand your case",
  },
  {
    id: 4,
    question: "Schedule Consultation:",
    answer:
      "Pick a convenient date and time for your virtual or in-person consultation.",
  },
  {
    id: 5,
    question: "Receive Personalized Care Plan:",
    answer:
      "Get a detailed surgical advice report, including guidance on insurance, financing, and post-surgery care.",
  },
];

const Feature4Service3 = () => {
  const [openId, setOpenId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hoverFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const unhoverFAQ = (id) => {
    if (openId === id) {
      setOpenId(null);
    }
  };

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#02989D1A] py-8 sm:py-12 max-w-[1440px] mx-auto">
      {/* Content Wrapper */}
      <div className="w-full max-w-[1440px] px-4 sm:px-10 mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-10 space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="flex-1 space-y-4 flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col items-start space-y-1 w-full">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#02989D]">
              How to Book a Surgery Consultation
            </h2>
            <p className="text-sm sm:text-base w-full font-normal text-[#313131] leading-snug">
              Our{" "}
              <span className="font-semibold">
                simple, step-by-step online process
              </span>{" "}
              ensures <br /> convenience and clarity: 
            </p>
          </div>

          <div className="w-full h-[220px] sm:h-[250px] md:h-[280px] flex-1 relative">
            <img
              src="images/SurgeryConsultation/DoctorPatient.png"
              alt="Doctor Patient"
              className="object-contain w-full h-full rounded-md"
            />
          </div>

          {/* Button */}
          <div className="w-full flex justify-center lg:justify-start mt-2 lg:mt-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#02989D] px-10 py-2 sm:px-12 sm:py-3 rounded-full text-white font-semibold"
            >
              Book Your Consultation Now
            </button>
            <ScheduleDemoModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>

        {/* Right Section (FAQs) */}
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
  );
};

export default Feature4Service3;

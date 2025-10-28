import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { domainName } from "../App";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]); // Ref to store answer elements

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      setOpenIndex(0);
    }
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is a second medical opinion and why is it important?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            A second opinion is when a qualified specialist reviews your
            diagnosis or treatment plan. It helps confirm accuracy, explore
            alternatives, and boost confidence before major decisions—
            especially for surgery or serious conditions.
          </p>
        </div>
      ),
    },
    {
      question: "How do I get a second opinion online?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Simply upload your medical records through MyEwaCare’s secure
            platform. A board-certified expert will review your case and share a
            personalized report—usually within a few days.
          </p>
        </div>
      ),
    },
    {
      question: "Do I need my doctor's permission to seek a second opinion?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            No. Patients have the right to get a second opinion anytime. Most
            doctors support this as part of informed decision-making.
          </p>
        </div>
      ),
    },
    {
      question: "When should I get a second opinion for surgery?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Before any major or invasive surgery, getting a second opinion can
            confirm if the procedure is necessary— or suggest safer, less
            invasive alternatives.
          </p>
        </div>
      ),
    },
    {
      question: "What is included in a health and wellness program?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            MyEwaCare’s wellness programs are personalized to your goals. They
            may include fitness plans, nutrition guidance, stress management,
            and lifestyle coaching.
          </p>
        </div>
      ),
    },
    {
      question: "How do I join the wellness program?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Just sign up online, share your health goals, and get matched with a
            tailored plan created by experts— all accessible remotely.
          </p>
        </div>
      ),
    },
    {
      question: "Can I use MyEwaCare services from home?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Yes. All services, including consultations and wellness programs,
            are designed for remote access via mobile or desktop.
          </p>
        </div>
      ),
    },
    {
      question: "How much does a second opinion or wellness program cost?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Pricing depends on the service. Second opinions are typically
            one-time fees, while wellness plans may have monthly packages.
            Transparent pricing is available during signup.
          </p>
        </div>
      ),
    },
    {
      question: "How secure is my medical data on MyEwaCare?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Your data is fully encrypted and stored in compliance with privacy
            laws. We prioritize confidentiality and security across all
            services.
          </p>
        </div>
      ),
    },
    {
      question: "What types of conditions can be reviewed through MyEwaCare?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Our specialists can review a wide range of medical issues—especially
            complex, chronic, or surgical conditions— through secure virtual
            second opinions.
          </p>
        </div>
      ),
    },
  ];

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      marginTop: "10px",
      marginBottom: "10px",
    },
    closed: {
      opacity: 0,
      height: 0,
      marginTop: "0px",
      marginBottom: "0px",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="py-6 mt-8 md:py-12 font-[poppins]">
      <section className="container mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-xl md:text-4xl font-semibold text-center capitalize">
            Frequently Asked Questions
          </h2>
          <div className="bg-[#02989D]/10 flex flex-col gap-8 justify-center items-center p-8 rounded-3xl">
            <img
              alt="Ask Ewa support"
              loading="lazy"
              width="180"
              height="40"
              decoding="async"
              style={{ color: "transparent" }}
              src={`${domainName}/images/talktous.png`}
            />
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-lg md:text-xl font-semibold">
                Still have questions?
              </h3>
              <p
                className="text-md md:text-xl text-foreground/70 text-[#1e1028]"
                style={{ opacity: "70%" }}
              >
                We're here for you. Talk to us and let us know how we can help.
              </p>
            </div>
            <a
              target="_blank"
              className="inline-flex text-white items-center justify-center rounded-full text-sm md:text-base font-medium bg-[#02989D] text-primary-foreground hover:opacity-80 h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-full md:w-auto"
              href="https://wa.me/9686638384"
            >
              Talk to us
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b last:border-none">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-expanded={openIndex === index}
                    className="faq-question flex flex-1 justify-between text-left text-sm md:text-lg font-medium py-6 md:py-8"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 md:h-6 md:w-6 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M3.135 6.158a.5.5 0 0 1 .707-.02L7.5 9.565l3.658-3.427a.5.5 0 0 1 .707.708l-4 3.75a.5.5 0 0 1-.707 0l-4-3.75a.5.5 0 0 1-.02-.707z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </h3>
                <motion.div
                  ref={(el) => (answerRefs.current[index] = el)}
                  variants={dropdownVariants}
                  initial="closed"
                  animate={openIndex === index ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-sm md:text-lg text-foreground-light overflow-hidden text-[#79717f]"
                >
                  <div className="pb-6 md:pb-8">{item.answer}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

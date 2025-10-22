import React, { useState } from "react";
import { domainName } from "../App";
import ScheduleDemoModal from "./ScheduleDemoModal";

const HealthPlanSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);

  return (
    <>
      <div className="container mx-auto mt-15 md:mt-20 mb-12 md:mb-24 px-4 md:px-2">
        <section className="bg-[#D6F7F8] text-background sm:rounded-3xl flex flex-col md:flex-row justify-between relative overflow-hidden h-auto md:h-[30rem]">
          {/* Left Image */}
          <div className="w-full md:w-[50%] h-1/2 md:h-full">
            <img
              src={`${domainName}/images/healthPlanSection/healthplan.svg`}
              loading="lazy"
              className="w-full h-full object-contain rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none 2xl:mt-1 xl:-mt-6 lg:-mt-16 md:-mt-28"
              alt="Health Plan"
            />
          </div>

          {/* Text & Button Section */}
          <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-left px-6 md:pr-8 lg:pr-20 py-8 md:py-0 lg:-mt-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-[3.5rem] max-w-[32rem] capitalize text-[#02989D]">
              Build a Health Plan That Works for You
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-[#02989D] bg-[#D6F7F8] border border-[#02989D] font-medium transition-all hover:bg-[#02989D]/90 hover:text-white h-10 md:h-12 px-4 md:px-5 py-3 mt-6"
            >
              Get Started
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Decorative Image */}
          <div className="w-full flex justify-center md:w-[30%] md:absolute md:bottom-0 md:right-0">
            <img
              src={`${domainName}/images/healthPlanSection/image 25.svg`}
              loading="lazy"
              className="w-96 md:w-full h-auto object-contain"
              alt="Decorative"
            />
          </div>
        </section>
      </div>

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

export default HealthPlanSection;

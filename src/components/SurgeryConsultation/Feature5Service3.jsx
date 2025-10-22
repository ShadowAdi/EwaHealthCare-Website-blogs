import React, { useState } from "react";
import ScheduleDemoModal from "../ScheduleDemoModal";

const Feature5Service3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);

  return (
    <section className="w-full flex flex-col py-4 sm:py-6 lg:py-8 items-center justify-center flex-1">
      <div className="flex flex-col lg:flex-row items-center justify-between rounded-xl sm:rounded-2xl space-y-4 lg:space-y-0 bg-[#02989D] px-8 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-[1200px]">
        {/* Text Section */}
        <p className="text-sm sm:text-base lg:text-base xl:text-lg text-white font-normal w-full lg:w-2/3 text-center lg:text-left leading-snug">
          Experience expert{" "}
          <span className="font-semibold">
            multispeciality surgery services with Myewacare —
          </span>{" "}
          combining advanced surgical expertise, patient-focused care, and
          seamless support
        </p>

        {/* Button Section */}
        <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full flex items-center justify-center w-max"
          >
            <span className="text-sm sm:text-base lg:text-base font-semibold whitespace-nowrap">
              Book Consultation
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        animateCloseButton={animateCloseButton}
        setAnimateCloseButton={setAnimateCloseButton}
      />
    </section>
  );
};

export default Feature5Service3;

import React, { useState } from "react";
import fourth from '../../../public/images/secondOpinion/fourth.png';
import one from '../../../public/images/secondOpinion/four1.png';
import two from '../../../public/images/secondOpinion/four2.png';
import three from '../../../public/images/secondOpinion/four3.png';
import fourImg from '../../../public/images/secondOpinion/four4.png';
import five from '../../../public/images/secondOpinion/four5.png';
import ScheduleDemoModal from "../ScheduleDemoModal"; // adjust path if needed

const Fourth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);

  const steps = [
    { img: one, title: 'Submit Medical Info', desc: '' },
    { img: two, title: 'Specialist Review', desc: '' },
    { img: three, title: 'Receive Report', desc: 'Get a detailed second opinion report in 48-72 hours' },
    { img: fourImg, title: 'Virtual Consultation', desc: '' },
    { img: five, title: 'Ongoing Support', desc: '' },
  ];

  return (
    <>
      <section
        className="py-16 px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto"
        style={{ backgroundColor: 'rgba(2, 152, 157, 0.1)' }} // #02989D at 10% opacity
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-2xl font-bold text-[#02989D]">
              How Our Second Opinion Process Works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our <span className="font-semibold text-black">simple, step-by-step online process</span> <br />
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
              Request Your Second Opinion
            </button>
          </div>

          {/* Right Side - List of Steps */}
          <div className="flex-1">
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 group transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:brightness-110 group-hover:scale-105">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-gray-400 group-hover:text-[#02989D] transition-colors duration-300">
                      {step.title}
                    </p>
                    {step.desc && (
                      <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-800 transition-colors duration-300">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
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

export default Fourth;

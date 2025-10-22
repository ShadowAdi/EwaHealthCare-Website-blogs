import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "How long does it take?",
    answer:
      "Most reports are ready within 48–72 hours, depending on case complexity.",
  },
  {
    id: 2,
    question: "Is my information confidential?",
    answer:
      "Yes, all your medical information is protected under strict privacy laws and handled with the utmost confidentiality by our licensed specialists.",
  },
  {
    id: 3,
    question: "Can I choose a specialist?",
    answer:
      "Absolutely, you can select a specialist from our network based on your specific needs, or we can recommend the best match for your case.",
  },
  {
    id: 4,
    question: "How much does a second opinion cost?",
    answer:
      "Our second opinion service starts at an affordable flat rate, with transparent pricing. No hidden fees—get a quote during your initial submission.",
  },
  {
    id: 5,
    question: "What if opinions differ?",
    answer:
      "If opinions differ, we provide a comprehensive comparison report and facilitate a discussion to help you make the most informed decision.",
  },
];

const Seventh = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row py-10 sm:py-20 items-center justify-between lg:space-x-10 space-y-8 lg:space-y-0">
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

export default Seventh;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import seven from "../../../public/images/secondOpinion/seventh.png";



// const Seventh = () => {
//   const [openId, setOpenId] = useState(1);

//   const toggleFAQ = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <section className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col lg:flex-row py-10 sm:py-20 items-center justify-between lg:space-x-10 space-y-8 lg:space-y-0">
//       {/* Left side */}
//       <div className="flex-1 space-y-8 flex flex-col w-full lg:w-1/2">
//         <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#0C1F30] text-center">
//           Frequently Asked Questions
//         </h2>

//         <div className="bg-[#E8F5F6] rounded-2xl p-8 sm:p-10 flex flex-col items-center space-y-6">
//           <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
//             <img
//               src={seven}
//               alt="Support"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="text-center space-y-3">
//             <h3 className="text-xl font-semibold text-[#0C1F30]">
//               Still have questions?
//             </h3>
//             <p className="text-[#404040] text-base max-w-sm">
//               We’re here for you. Talk to us and let us know how we can help.
//             </p>
//           </div>

//           <button className="bg-[#02989D] hover:bg-[#027478] text-white font-semibold px-5 py-3 rounded-full transition-colors duration-300">
//             Talk to us
//           </button>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="flex-1 w-full md:w-1/2">
//         <div className="flex flex-col items-start w-full">
//           {faqData.map((faq) => (
//             <div
//               key={faq.id}
//               className="border-b border-gray-200 py-6 flex flex-col items-start justify-center w-full"
//             >
//               <button
//                 onClick={() => toggleFAQ(faq.id)}
//                 className="w-full flex items-center justify-between text-left group cursor-pointer"
//                 aria-expanded={openId === faq.id}
//               >
//                 <span className="text-base sm:text-lg font-medium text-[#1E1028] pr-4">
//                   {faq.question}
//                 </span>
//                 <motion.svg
//                   animate={{ rotate: openId === faq.id ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-[#404040] flex-shrink-0"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                   />
//                 </motion.svg>
//               </button>

//               <AnimatePresence initial={false}>
//                 {openId === faq.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <p className="text-[#79717F] text-sm sm:text-base mt-3 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Seventh;

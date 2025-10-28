import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Shilpa B.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "Our family was in a critical situation when my father-in-law was diagnosed with a rare skull base infection. Doctors locally just didn’t have answers. The My Ewacare team, especially Arjun, stepped in right away—helping us find the right hospital and specialists and guiding us every step, even after treatment. That support was genuine and patient-focused and brought us peace during a tough time. We honestly feel like we got a second chance.",
  },
  {
    id: 2,
    name: "Tharun & Preethi Reddy",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "We are truly at a loss for words to express our gratitude for the guidance and support we received from MyEwaCare during our son’s second opinion and surgery. It has been two years since his surgery, and he is now completely independent and happily attending school. Seeing his happiness and energy reminds us every day of the invaluable assistance you provided. Thank you for being there for us during such a crucial time.",
  },
  {
    id: 3,
    name: "Deepa R.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "When my doctor recommended spine surgery, I was scared and confused. The MyEwaCare team spent time explaining the surgery and recovery in plain words. That made me feel comfortable and ready to proceed without fear.",
  },
  {
    id: 4,
    name: "Arun V.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I wasn’t sure about bariatric surgery, so I booked a consultation. The doctor listened patiently to all my concerns and gave me clear information on the risks and benefits. It felt like they cared about what was best for me, not just the procedure.",
  },
  {
    id: 5,
    name: "Nandini K.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "The team was so supportive when my mother had cancer surgery. They not only connected us with the right oncologists but also helped with insurance and post-op care advice. Their empathy made a tough time more bearable.",
  },
  {
    id: 6,
    name: "Girish M.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I was overwhelmed with different treatment options until My Ewa Care explained my orthopedic surgery clearly. Their clarity on physical therapy after surgery helped me mentally prepare for the whole process.",
  },
  {
    id: 7,
    name: "Pallavi R.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "The virtual consultation was a game changer for me. I live in a different city and couldn’t travel easily. Being able to talk to a top surgeon from home saved time and gave me confidence to plan the surgery right.",
  },
  {
    id: 8,
    name: "Rohini M.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "After my diagnosis, I felt lost about what to do next. The surgery consultation from My Ewa Care not only clarified my options but also helped me find the best hospital nearby. The whole process felt really supportive.",
  },
];

const Features7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const handleDotClick = (index: number): void => setCurrentIndex(index);

  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-10 items-center justify-center bg-white h-full flex py-8 lg:py-10">
      <div className="w-full lg:w-[90%] flex flex-col justify-center rounded-3xl bg-[#02989D1A] py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full justify-center space-y-10 z-30"
        >
          <h2 className="text-[#02989D] text-2xl sm:text-3xl font-semibold text-center">
            Patient Surgery Experiences
          </h2>

          <div className="relative w-full max-w-3xl mx-auto">
            <img
              src="/images/corporatePage/TestimonialRing.png"
              alt="Ring decoration"
              className="object-contain absolute -right-14 -top-14 w-40 h-40 opacity-70"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-[#02989D] rounded-2xl p-8 sm:p-12 shadow-lg relative z-10"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">

                  <div className="flex-1 space-y-10 text-center sm:text-left">
                    <div className="flex flex-col items-start space-y-2">
                      <h3 className="text-white text-xl font-semibold">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed">
                        {testimonials[currentIndex].testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 max-w-sm mx-auto">
              <button
                onClick={handlePrev}
                className="text-[#02989D] hover:text-[#027478] transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#02989D]"
                        : "bg-white hover:bg-[#02989D]/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="text-[#02989D] hover:text-[#027478] transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features7;

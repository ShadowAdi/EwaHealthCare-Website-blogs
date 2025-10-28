import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Francis & Family",
    quote:
      "Thanks to the second opinion from My Ewa Health Care, we got the right guidance at the right time. We were admitted to Vikram Aura Hospital and received prompt surgery. Within just four days, everything went smoothly and successfully. We are truly grateful for the care and support provided by the team.",
  },
  {
    id: 2,
    name: "Anita K.",
    quote:
      "I uploaded my reports to My Ewa Health Care for a free review, and the doctor explained everything clearly during the second opinion. It helped me avoid unnecessary tests and choose the right treatment. The whole process was quick, easy, and reassuring.",
  },
  {
    id: 3,
    name: "Nidhi V.",
    quote:
      "I was really stressed when I heard I might need surgery. Before deciding anything, I reached out to My Ewa Health Care for a second opinion. The doctor listened to everything I was worried about and explained my scan results in a way I could understand. He even suggested a less invasive approach that worked great for me. It felt good to finally be heard.",
  },
  {
    id: 4,
    name: "Ajay P.",
    quote:
      "My family was nervous after my dad’s diagnosis and unsure about the treatment plan. The second opinion from My Ewa Health Care was detailed and reassuring. They took their time to explain all the little things so we could make the right decision together. It gave us much-needed peace of mind.",
  },
  {
    id: 5,
    name: "Meera D.",
    quote:
      "I hadn’t really thought about getting a second opinion before, but I’m so glad I did. The process was simple, and I got answers that my first doctor didn’t provide. It completely changed how I felt about my health — I finally felt in control.",
  },
  {
    id: 6,
    name: "Vikas G.",
    quote:
      "I live far from the city, so I liked how quickly they connected me to a specialist. The response was fast, and I got through all my questions patiently. Having that extra expert opinion really made me feel confident about what to do next.",
  },
  {
    id: 7,
    name: "Ravi S.",
    quote:
      "I had many doubts about my test reports, and it’s not easy to understand everything on your own. I used My Ewa Care’s free report review service, and the doctor explained everything clearly. It gave me confidence and helped me see the right next steps for my health.",
  },
  {
    id: 8,
    name: "Pooja M.",
    quote:
      "Getting a second opinion for my scans was a big relief. They reviewed everything for free, which was so helpful. The doctor took time to explain my reports in a simple way, so I felt totally at ease about my treatment plan.",
  },
];

const Sixth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 items-center justify-center bg-white h-full flex py-8 lg:py-10">
      <div className="w-full lg:w-[90%] flex flex-col justify-center rounded-3xl bg-[#02989D1A] py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full justify-center space-y-10 z-30"
        >
          <h2 className="text-[#02989D] text-2xl sm:text-3xl font-semibold text-center">
            What Our Patients Say
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
                  {/* Text Content */}
                  <div className="flex-1 space-y-10 text-center sm:text-left">
                    <div className="flex flex-col items-start space-y-2">
                      <h3 className="text-white text-xl font-semibold">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed italic">
                        “{testimonials[currentIndex].quote}”
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
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

export default Sixth;

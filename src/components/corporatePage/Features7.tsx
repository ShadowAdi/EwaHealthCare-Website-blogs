import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "HR Lead",
    role: "Valtech",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "We really appreciate the effort your team put into organizing our health check camp at the Bengaluru office. Everything went smoothly, and the whole process was seamless. Looking forward to bringing these wellness activities to all our other locations.",
  },
  {
    id: 2,
    name: "Amit S.",
    role: "",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I never took time for health checkups before, but when the wellness camp happened at our office, it was so easy to get screened. I found out about a risk early and started making changes. It’s great to see my company care about things beyond work.",
  },
  {
    id: 3,
    name: "Neha G. (Employee’s spouse)",
    role: "",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "My husband joined the fitness and nutrition sessions through his company’s wellness plan. We started cooking healthier meals together, and I noticed how much more energy he has now. These programs really helped our whole family live better.",
  },
  {
    id: 4,
    name: "Vinod K.",
    role: "",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I used to feel stressed at work a lot, but after attending the mindfulness workshops, I learned some simple ideas to manage it. Even just a few minutes of breathing practice makes a difference. My mood at home and at work has really improved.",
  },
  {
    id: 5,
    name: "Priya M.",
    role: "",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I’m so glad our company runs these wellness camps because it’s hard to fit health into a busy schedule. The on-site screenings make it so convenient, and the advice from the experts actually makes sense for regular people like me.",
  },
  {
    id: 6,
    name: "Lavanya P.",
    role: "",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "After attending the group fitness challenge, I felt more energized and motivated than ever. It pushed me out of my comfort zone, and now a few coworkers and I go for a walk together daily. It’s become a highlight of my day.",
  },
  {
    id: 7,
    name: "Ritu B.",
    role: "",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "I was nervous about mental health support, but the seminars and peer group sessions made it easy to open up. I learned a few simple tricks to handle stress and actually started sleeping better. I feel like a better version of myself both at work and at home.",
  },
  {
    id: 8,
    name: "Deepak J. (Employee’s spouse)",
    role: "",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "My wife used to skip regular checkups because of her busy job. The wellness program brought a camp right to her office—no excuses or delays. She caught a vitamin deficiency early and we got diet tips together. The whole family benefits.",
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

  interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    testimonial: string;
  }

  const handleDotClick = (index: number): void => setCurrentIndex(index);

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
            Corporate Wellness Stories
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
                        {testimonials[currentIndex].role &&
                          `, ${testimonials[currentIndex].role}`}
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

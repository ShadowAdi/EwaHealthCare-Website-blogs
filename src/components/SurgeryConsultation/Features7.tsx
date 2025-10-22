import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Leader",
    company: "Financial Services Firm",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "Personalized fitness and nutrition coaching made our workforce healthier and more focused.",
    date: "May 8, 2025",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wellness Director",
    company: "Tech Solutions Inc",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "The stress management program transformed our company culture. Employee satisfaction increased by 40%.",
    date: "April 15, 2025",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Healthcare Partners",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "Our team's productivity soared after implementing the nutrition and wellness programs. Highly recommended!",
    date: "March 22, 2025",
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
    testimonial:
      "Best investment we've made in our people. The holistic approach to wellness has reduced sick days significantly.",
    date: "February 10, 2025",
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

  const handleDotClick = (index) => setCurrentIndex(index);

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
            What Our Patients Say
          </h2>

          <div className="relative w-full max-w-3xl mx-auto">
            {/* Background image (optional decorative ring) */}
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
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 space-y-10 text-center sm:text-left">
                    <div className="flex flex-col items-start space-y-2">
                      <h3 className="text-white text-xl font-semibold">
                        {testimonials[currentIndex].role},{" "}
                        {testimonials[currentIndex].company}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed">
                        {testimonials[currentIndex].testimonial}
                      </p>
                    </div>
                    <p className="text-white/70 text-xs">
                      {testimonials[currentIndex].date}
                    </p>
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

export default Features7;

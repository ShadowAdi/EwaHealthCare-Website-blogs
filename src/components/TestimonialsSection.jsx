import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { domainName } from "../App";

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
    const { name, role, image, linkedinUrl, content, images } = testimonial;
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-100px" });

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                duration: 0.3,
            },
        },
    };

    return (
      <motion.section
        ref={cardRef}
        className="flex-shrink-0 w-full px-6 mx-auto pt-5 pb-5"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <section className="w-full h-full flex flex-col bg-white rounded-xl p-6 
        md:p-6 outline outline-3 outline-offset-8 outline-white/50 ">
          <div className="flex justify-between items-start gap-2">
            <div className="flex items-start gap-3">
              <img
                alt={name}
                loading="lazy"
                width="48"
                height="48"
                className="rounded-full w-12 h-12 object-center"
                src={image}
              />
              <div>
                <p className="text-md font-semibold text-[#02989D]">{name}</p>
                {/* star section */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= testimonial.rating
                          ? "fill-yellow-400"
                          : "fill-gray-200"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-foreground-light mb-3">
            <pre className="whitespace-pre-wrap text-[#02989D] text-sm md:text-base font-sans">
              {content}
            </pre>
          </div>
          {images && (
            <div className="flex gap-4 overflow-x-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-40 h-40 relative overflow-hidden rounded-xl"
                >
                  <img
                    alt={name}
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src={img}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </motion.section>
    );
};

// Main Testimonials Section Component
const TestimonialsSection = () => {
   
    const testimonials = [
        {
            name: "Ramesh Iyer",
            image: `${domainName}/images/testimonial/men_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/ramesh-iyer",
            content: `I had been struggling with knee pain for years. Thanks to MyewaCare's consultation and surgery services, I finally found relief. The doctors were incredibly professional and guided me throughout my treatment. Highly recommend!`,
            rating: 5,
        },
        {
            name: "Priya Ranganathan",
            image: `${domainName}/images/testimonial/women_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/priya-ranganathan",
            content: `MyewaCare's Ayurvedic treatment helped me regain my energy and balance. I had been searching for a holistic approach to my health, and I finally found it here. The team is knowledgeable and supportive!`,
            rating: 4,
        },
        {
            name: "Ankit Sharma",
            image: `${domainName}/images/testimonial/men_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/ankit-sharma",
            content: `I needed a second opinion regarding my mother's surgery, and MyewaCare provided detailed insights that helped us make the right decision. Their doctors are experienced and empathetic!`,
            rating: 5,
        },
        {
            name: "Deepa Nair",
            image: `${domainName}/images/testimonial/women_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/deepa-nair",
            content: `I was nervous about getting my full body checkup done, but MyewaCare's diagnostic services made it smooth and hassle-free. The reports were accurate, and the process was quick.`,
            rating: 4,
        },
        {
            name: "Siddharth Verma",
            image: `${domainName}/images/testimonial/men_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/siddharth-verma",
            content: `MyewaCare's Ewa Wellness program helped me maintain a healthier lifestyle. Their personalized wellness plans and expert advice truly made a difference in my daily routine.`,
            rating: 5,
        },
        {
            name: "Lakshmi Krishnan",
            image: `${domainName}/images/testimonial/women_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/lakshmi-krishnan",
            content: `I was looking for alternative treatments for my chronic migraines, and MyewaCare's Ayurvedic consultation was a game changer. Natural remedies suggested by their experts worked wonders!`,
            rating: 4,
        },
        {
            name: "Rahul Mehta",
            image: `${domainName}/images/testimonial/men_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/rahul-mehta",
            content: `Booking a consultation with MyewaCare was one of the best decisions I made. The doctor explained everything clearly and helped me choose the best treatment path for my condition.`,
            rating: 5,
        },
        {
            name: "Sunitha Rao",
            image: `${domainName}/images/testimonial/women_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/sunitha-rao",
            content: `I was skeptical about online second opinions, but MyewaCare made the process seamless. Their expert advice helped me avoid an unnecessary procedure. Forever grateful!`,
            rating: 5,
        },
        {
            name: "Arjun Mishra",
            image: `${domainName}/images/testimonial/men_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/arjun-mishra",
            content: `I got my full-body health checkup done at MyewaCare, and the experience was excellent. The staff was very professional, and the reports were delivered on time.`,
            rating: 4,
        },
        {
            name: "Meera Reddy",
            image: `${domainName}/images/testimonial/women_avatar.png`,
            linkedinUrl: "https://www.linkedin.com/in/meera-reddy",
            content: `MyewaCare's wellness services helped me adopt better lifestyle habits. Their experts provided personalized guidance, and I feel much healthier now.`,
            rating: 5,
        }
    ];
    
    const scrollContainerRef = useRef(null);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }
    ]
};

const scroll = (direction) => {
    if (scrollContainerRef.current) {
        if (direction === "left") {
            scrollContainerRef.current.slickPrev(); 
        } else {
            scrollContainerRef.current.slickNext(); 
        }
    }
};

    return (
        <section className="bg-[#02989D]/10 py-10 flex flex-col gap-8">
            <div className="px-6 md:px-16 flex justify-between items-center container">
                <div>
                    <h2 className="hidden md:block text-4xl font-semibold text-[#02989D]">
                        Why Our Members Love Us
                    </h2>
                    <h2 className="block md:hidden text-xl font-semibold text-[#02989D]">Testimonials</h2>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="inline-flex items-center bg-white justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-14 md:!w-20"
                    >
                        <span className="rotate-0">
                            <img
                                alt="left"
                                loading="lazy"
                                width="32"
                                height="32"
                                className="w-5 h-5 md:w-8 md:h-8"
                                src={`${domainName}/images/chevron-left.png`}
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="inline-flex items-center bg-white justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-14 md:!w-20"
                    >
                        <span className="rotate-180">
                            <img
                                alt="right"
                                loading="lazy"
                                width="32"
                                height="32"
                                className="w-5 h-5 md:w-8 md:h-8"
                                src={`${domainName}/images/chevron-left.png`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* {/ Scrollable Testimonials Container /} */}
            <Slider
                ref={scrollContainerRef}
                className="testimonials-slider "
                {...settings}
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialsSection;


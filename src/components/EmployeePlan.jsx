
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { domainName } from "../App";

import BrandCarousel from "./BrandCarousel";
import FAQ from "./FAQ";
import HealthCardSlider from "./HealthCardSlider";
import HealthPlanSection from "./HealthPlanSection";
import HeroHeader from "./HeroHeader";
import TestimonialsSection from "./TestimonialsSection";
import ScheduleDemoModal from "../components/ScheduleDemoModal";

const EmployeePlan = () => {

  const freeCardImage = '/images/OurService/free-card.png';
  const goldCardImage = '/images/OurService/gold-card.png';
  const premiumCardImage = '/images/OurService/premium-card.png';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);
  const location = useLocation();

  // Add this useEffect to handle scrolling to sections
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # symbol
      const id = location.hash.substring(1);

      // Find the element
      const element = document.getElementById(id);

      // If element exists, scroll to it
      if (element) {
        // Small delay to ensure the component is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]); // Re-run when location changes

  const logos = [
    { name: "CLSA", link: "/path/to/clsa_logo.png" },
    { name: "TA DIGITAL", link: "/path/to/ta_digital_logo.png" },
    { name: "Mahindra FINANCE", link: "/path/to/mahindra_logo.png" },
    { name: "Business Standard", link: "/path/to/business_standard_logo.png" },
    { name: "CARATLANE", link: "/path/to/caratlane_logo.png" },
  ];

  const services = [
    {
      title: "Gold Package",
      image: goldCardImage,
      points: [
        "Complete Blood Count",
        "Blood Grouping",
        "Complete Lipid Profile",
        "Kidney Function Tests",
        "Thyroid Profile",
        "Diabetes Profile",
        "Liver Function Tests",
        "Vitamin D 25 OH",
        "Complete Urine Analysis",
        "Complete Stool Analysis",
        "Radiology Tests"
      ],
      price: "₹8000",
      discounted: "₹5000"
    },
    {
      title: "Diamond Package",
      image: freeCardImage,
      points: [
        "Complete Blood Count",
        "Complete Lipid Profile",
        "Kidney Function Tests",
        "Diabetes Profile",
        "Liver Function Tests",
        "Complete Urine Analysis",
        "Radiology Tests",
        "Cancer Markers"
      ],
      price: "₹15000",
      discounted: "₹10000"
    },
    {
      title: "Platinum Package",
      image: premiumCardImage,
      points: [
        "Complete Blood Count",
        "Complete Lipid Profile",
        "Kidney Function Tests",
        "Diabetes Profile",
        "Liver Function Tests",
        "Complete Urine Analysis",
        "Radiology Tests",
        "Bone Strength Screening",
        "Cancer Markers",
      ],
      price: "₹20000",
      discounted: "₹15000"
    },
  ];
  const logosRef = useRef(null);

  useEffect(() => {
    const logosContainer = logosRef.current;
    if (!logosContainer) return;

    let animationFrameId;
    const scrollSpeed = 1; // Adjust speed if needed

    const scrollLogos = () => {
      logosContainer.scrollLeft += scrollSpeed;
      if (logosContainer.scrollLeft >= logosContainer.scrollWidth / 2) {
        logosContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Accordion state for Health and Wellness section
  const [hwOpenIndex, setHwOpenIndex] = useState(null);
  const [hwFaqOpenIndex, setHwFaqOpenIndex] = useState(null);
  const hwAnswerRefs = useRef([]);

  const toggleHwAccordion = (index) => {
    setHwOpenIndex(hwOpenIndex === index ? null : index);
  };

  const toggleHwFaqAccordion = (index) => {
    setHwFaqOpenIndex(hwFaqOpenIndex === index ? null : index);
  };

  // Accordion state for Surgery section
  const [surgeryOpenIndex, setSurgeryOpenIndex] = useState(null);
  const [surgeryFaqOpenIndex, setSurgeryFaqOpenIndex] = useState(null);
  const surgeryAnswerRefs = useRef([]);

  const toggleSurgeryAccordion = (index) => {
    setSurgeryOpenIndex(surgeryOpenIndex === index ? null : index);
  };
  const toggleSurgeryFaqAccordion = (index) => {
    setSurgeryFaqOpenIndex(surgeryFaqOpenIndex === index ? null : index);
  };


  const [secondOpinionOpenIndex, setSecondOpinionOpenIndex] = useState(null);
  const secondOpinionAnswerRefs = useRef([]);

  const toggleSecondOpinionAccordion = (index) => {
    setSecondOpinionOpenIndex(secondOpinionOpenIndex === index ? null : index);
  };

  const hwFaqItems = [
    {
      question: "What is a Health and Wellness Program?",
      answer: (
        <div>
          Our Health and Wellness Programs are personalized plans designed to
          help you improve your physical health, mental well-being, and overall
          lifestyle. Whether it's fitness, nutrition, stress management, or
          chronic disease prevention, we create a program that supports your
          unique health goals.
        </div>
      ),
    },
    {
      question: "How do I get started with the Health and Wellness Program?",
      answer: (
        <div>
          Getting started is easy! Simply contact us to schedule an initial
          consultation. During this meeting, we’ll discuss your health goals,
          challenges, and needs. Based on this, we’ll create a customized
          wellness plan for you to follow.
        </div>
      ),
    },
    {
      question: "Do I need to be in great shape to join the program?",
      answer: (
        <div>
          Absolutely not! Our programs are designed for people of all fitness
          levels. Whether you're just starting your health journey or looking to
          enhance your current routine, we create personalized plans that fit
          your individual needs and abilities.
        </div>
      ),
    },
    {
      question: "How long will it take to see results?",
      answer: (
        <div>
          The time it takes to see results depends on your individual goals and
          how committed you are to the program. Many clients start feeling
          better within the first few weeks, while significant changes may take
          several months. Our team will provide ongoing support to help you stay
          on track.
        </div>
      ),
    },
    {
      question: "Can I access the Health and Wellness Program remotely?",
      answer: (
        <div>
          Yes! We offer virtual consultations and online resources so you can
          access your program and support no matter where you are. Whether you
          prefer in-person or virtual sessions, we make it easy for you to stay
          on top of your health goals.
        </div>
      ),
    },
  ];

  const surgeryFaqItems = [
    {
      question: "What types of surgeries does My Ewa Care offer?",
      answer: (
        <div>
          At My Ewa Care, we offer a wide range of surgeries including Cardiac
          Surgery, Cosmetic Surgery, Obesity Surgery (Bariatric Surgery), Spinal
          Surgery, Oncology Treatments, Dental Care, Orthopedic Surgery
          (including joint replacements), Dermatology Care, Footcare (Podiatric
          Surgery), and Rehabilitation Services for post-surgery recovery.
        </div>
      ),
    },
    {
      question: "How do I know if I need surgery?",
      answer: (
        <div>
          If you're experiencing chronic pain, difficulty moving, or symptoms
          that affect your daily life, it's important to consult with one of our
          specialists. After a thorough evaluation, our team will discuss the
          most suitable treatment options, which may include surgery if
          non-surgical treatments are not effective.
        </div>
      ),
    },
    {
      question: "What can I expect during recovery from surgery?",
      answer: (
        <div>
          Recovery times vary depending on the type of surgery you undergo.
          After surgery, we provide personalized Rehabilitation Services to
          support a smooth recovery. Our goal is to help you regain strength
          and mobility, and ensure that you are comfortable and informed during
          the healing process.
        </div>
      ),
    },
    {
      question: "Are the surgeries performed at My Ewa Care safe?",
      answer: (
        <div>
          Yes, at My Ewa Care, patient safety is our top priority. We use the
          latest surgical technologies, follow best medical practices, and employ
          highly skilled surgeons to ensure the highest standards of care and
          safety. We also conduct thorough pre-surgery assessments to ensure
          you're a good candidate for your procedure.
        </div>
      ),
    },
    {
      question: "Do you offer consultations before surgery?",
      answer: (
        <div>
          Yes, we offer consultations for all surgical procedures. During your
          consultation, our specialists will discuss your condition, explain the
          surgery process, and help you understand the benefits, risks, and
          recovery expectations. This ensures you are fully informed and
          comfortable before proceeding.
        </div>
      ),
    },
  ];


  // New accordion items for Surgery section
  const surgeryItems = [
    {
      question: "Our Surgeries",
      answer: (
        <div>
          <ul>
            <li>Cardiac Surgery</li>
            <li>Cosmetic Surgery</li>
            <li>Dermatology Care (Skin Surgery)</li>
            <li>Obesity Surgery (Bariatric Surgery)</li>
            <li>Spinal Surgery</li>
            <li>Oncology Treatments (Cancer Surgery)</li>
            <li>Dental Care (Oral Surgery)</li>
            <li>Rehabilitation Services (Post-Surgery Recovery)</li>
            <li>Orthopedic Surgery (Joint Replacements and Bone Health)</li>
            <li>Footcare (Podiatric Surgery)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Why Choose My Ewa Care for Your Surgery?",
      answer: (
        <div>
          <ul>
            <li>
              <b>Expert Surgeons:</b> Our team consists of highly skilled
              surgeons with expertise in their respective fields, providing you
              with top-tier surgical care.
            </li>
            <li>
              <b>Comprehensive Care:</b> From diagnosis to post-surgery
              recovery, we offer complete, integrated care throughout your
              entire treatment process.
            </li>
            <li>
              <b>State-of-the-Art Facilities:</b> Our modern surgical
              facilities are equipped with the latest technology to ensure the
              highest standard of care and patient safety.
            </li>
            <li>
              <b>Personalized Treatment:</b> We focus on creating personalized
              treatment plans that cater to your unique needs and health goals.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Get Started with My Ewa Care's Surgery",
      answer: (
        <div>
          <p>
            Whether you're in need of routine surgery or advanced medical
            treatment, My Ewa Care is here to provide exceptional care. Our
            team is dedicated to improving your health with the latest surgical
            techniques and compassionate support.
          </p>
        </div>
      ),
    },
  ];

  // New accordion items for Second Opinion section
  const secondOpinionItems = [
    {
      question: "Why Choose My Ewa Care for Your Second Opinion?",
      answer: (
        <div>
          <ul>
            <li>
              <b>Trusted Medical Experts:</b> Our team of renowned doctors,
              surgeons, and specialists brings years of expertise in various
              medical fields, offering you a broad range of second opinions.
            </li>
            <li>
              <b>Convenient Online Consultations:</b> We offer virtual
              consultations, providing easy access to top-tier medical
              professionals from the comfort of your home.
            </li>
            <li>
              <b>Comprehensive Review of Your Medical History:</b> We
              thoroughly review your existing medical records, diagnosis, and
              treatment options to provide a well-rounded second opinion.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Why Second Opinions Matter",
      answer: (
        <div>
          <p className="mb-2">
            Medical decisions can significantly impact your life. My Ewa Care
            believes in giving patients the power of knowledge and choice. By
            seeking a second opinion, you ensure that you are making an
            informed decision about your health care. Our second opinion
            services offer:
          </p>

          <ul>
            <li>Accurate diagnoses</li>
            <li>Comprehensive treatment plans</li>
            <li>Access to world-class experts</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How to Get Started",
      answer: (
        <div>
          <p className="mb-2">Getting started with a second opinion is easy with My Ewa Care. Simply:</p>
          <ol>
            <li>
              <b>Contact Us:</b> Reach out via our contact page or call us to
              discuss your case.
            </li>
            <li>
              <b>Submit Your Medical Information:</b> Share your medical records,
              test results, and relevant information securely.
            </li>
            <li>
              <b>Schedule Your Consultation:</b> Book an appointment with one of
              our specialists who will review your case and provide personalized
              recommendations.
            </li>
          </ol>
          <p>
            My Ewa Care is committed to delivering top-tier healthcare
            insights to help you make the best choices for your health.
          </p>
        </div>
      ),
    },
  ];

  // New accordion items for Health and Wellness section
  const healthWellnessItems = [
    {
      question: "Benefits of Our Health and Wellness Programs",
      answer: (
        <div>
          <ul>
            <li>
              <b>Improved Physical Health:</b> Better fitness, weight
              management, and energy levels through exercise, nutrition, and
              healthy lifestyle choices.
            </li>
            <li>
              <b>Enhanced Mental Well-Being:</b> Reduced stress and improved
              emotional health through mental health support, mindfulness, and
              relaxation techniques.
            </li>
            <li>
              <b>Prevention and Early Detection:</b> Regular screenings and
              proactive care that catch potential health issues early, preventing
              serious conditions in the future.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Why Health and Wellness Matter",
      answer: (
        <div>
          <p>
            Good health is the foundation for a happy, productive life. At EWA
            Healthcare, we recognize that wellness goes beyond just the absence
            of disease. True wellness involves physical health, mental clarity,
            emotional resilience, and the ability to enjoy life to its fullest.
            Our Health and Wellness Programs are here to help you achieve and
            maintain this balance.
          </p>
        </div>
      ),
    },
    {
      question: "How to Get Started with My Ewa Care's Health and Wellness Programs",
      answer: (
        <div>
          <p>Taking the first step toward a healthier life is easy:</p>
          <ul>
            <li>
              Start Your Journey: Begin your program with support from our team
              of health coaches, trainers, and wellness experts, who will be
              with you every step of the way.
            </li>
            <li>
              Get Your Personalized Plan: Based on your goals and health status,
              we'll create a custom wellness plan tailored specifically to you.
            </li>
          </ul>
          <p>
            My Ewa Care is committed to helping you achieve your wellness
            goals with scientifically backed methods and expert support.
          </p>
        </div>
      ),
    },
  ];

  const dropdownVariants = {
    open: { opacity: 1, height: "auto", marginTop: "10px", marginBottom: "10px" },
    closed: { opacity: 0, height: 0, marginTop: "0px", marginBottom: "0px", transition: { duration: 0.3 } },
  };

  // Reusable accordion component
  const AccordionSection = ({ items, openIndex, toggleAccordion, answerRefs }) => {
    return (
      <section className="w-full">
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <h3 className="flex">
                <button
                  type="button"
                  aria-expanded={openIndex === index}
                  className="faq-question flex flex-1 justify-between text-left text-sm md:text-lg font-medium py-4"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 md:h-6 md:w-6 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
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
                className="text-sm md:text-xl text-foreground-light overflow-hidden text-[#79717f]"
              >
                <div className="pb-6 md:pb-8">{item.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    );
  };


  return (
    <>
      <HeroHeader />
      <section className="pt-16 pb-8 md:mt-20 lg:ml-[10px] font-poppins lg:mr-[10px] items-center overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 sm:px-6 lg:px-8">
          {/* Left Column – Text Content */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {/* Employee Plans Text */}
              <p className="relative z-10 text-base md:text-lg font-semibold bg-gradient-to-r from-[#02989D] via-[#02989D]/70 to-[#02989D]/40 bg-clip-text text-transparent mb-2 text-center mt-10 md:text-left">
                Employee plans
              </p>

              {/* Heading */}
              <h1 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 leading-snug md:leading-normal mb-4 md:mb-5">
                91% Employees Feel More Motivated When You Invest in Their
                Well-Being
              </h1>

              {/* Description */}
              <p className="text-center md:text-left text-lg text-gray-600 mb-6">
                Invest in healthcare plans that have a direct impact on your
                employee's happiness, productivity, and morale.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-0 justify-center md:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-[#02989D]/90 via-[#02989D]/70 to-[#02989D]/50 text-white hover:opacity-80"
                >
                  Schedule a Demo
                </button>
                <button
                  onClick={() => {
                    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

                    const isAndroid = /android/i.test(userAgent);
                    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

                    if (isAndroid) {
                      // Android device
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else if (isIOS) {
                      // iOS device
                      window.open(
                        "https://apps.apple.com/in/app/myewacare/id6743497584",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else {
                      // Desktop browser or unknown platform → open both links
                      window.open(
                        "https://apps.apple.com/in/app/myewacare/id6743497584",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all border border-[#02989D] bg-gradient-to-r from-[#02989D] to-[#02989D] text-white sm:h-12 px-4 sm:px-5 py-3 sm:py-4 hover:opacity-90"
                >
                  Get the App
                </button>


              </div>
              <ScheduleDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                animateCloseButton={animateCloseButton}
                setAnimateCloseButton={setAnimateCloseButton}
              />
            </div>
          </div>

          {/* Right Column – Box Layout */}
          <div className="animate-fade-in order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:mr-[80px] md:ml-[50px] sm:grid-cols-2 gap-3 md:gap-3"
            >
              {/* Top Large Box – Quick Resolutions with Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#02989D]/80 via-[#02989D]/60 to-[#02989D]/50 p-5 md:p-6 lg:p-8 rounded-3xl shadow-md col-span-1 sm:col-span-2 flex flex-col md:flex-row items-center"
              >
                {/* Left Section - Text */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    Quick resolutions
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-3 h-3 border-2 border-white rounded-full flex items-center justify-center mr-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                      <p className="text-sm md:text-base text-white">
                        Query raised{" "}
                        <span className="ml-2 text-xs md:text-sm">12 Jan</span>
                      </p>
                    </div>

                    <div className="ml-2 border-l-2 border-dashed border-white h-3"></div>

                    <div className="flex items-center">
                      <span className="w-3 h-3 border-2 border-white rounded-full flex items-center justify-center mr-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                      <p className="text-sm md:text-base text-white">
                        Query resolved{" "}
                        <span className="ml-2 text-xs md:text-sm">13 Jan</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-28 md:w-36 lg:w-40 ml-4">
                  <img
                    src={`${domainName}/images/man_woman_discuss.png`}
                    loading="lazy"
                    alt="Person"
                    className="w-full "
                  />
                </div>
              </motion.div>

              {/* Bottom Left Small Box – Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl shadow-md"
              >
                <img
                  src={`${domainName}/images/man_woman_discuss.png`}
                  loading="lazy"
                  alt="Team High Five"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Right Small Box – Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#02989D]/80 via-[#02989D]/60 to-[#02989D]/50 p-5 md:p-6 rounded-3xl shadow-md flex flex-col text-center text-white space-y-3"
              >
                <p className="text-lg md:text-xl font-bold">87%+ Engagement</p>
                <p className="text-xs md:text-sm">in platinum plans</p>
                <hr className="border-t border-white/50 w-full" />
                <p className="text-lg md:text-xl font-bold">4.9 ★★★★★</p>
                <p className="text-xs md:text-sm">Claim support satisfaction</p>
                <hr className="border-t border-white/50 w-full" />
                <p className="text-lg md:text-xl font-bold">12x Increase</p>
                <p className="text-xs md:text-sm">
                  in preventive health measures
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-14 md:mt-24 ">
          <BrandCarousel />
          <div >

            <section id="ourpackages">
              <h2 className="text-[#02989D] text-2xl md:text-4xl font-semibold text-center pb-2 pt-10">
                Our Packages
              </h2>
              <div className="grid grid-cols-1 gap-8 px-6">
                <HealthCardSlider cards={services} />
              </div>
            </section>
          </div>

          {/* Second Opinion Section */}
          <section
            id="secondOpinion"
            className="py-8 mt-[6rem] px-4 sm:px-6 lg:px-8 bg-[#02989D]/10"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#02989D] mb-4 text-center">
              Second Opinion
            </h2>

            <div className="flex flex-col md:flex-row w-full">
              {/* Left Column (60%) */}
              <div className="w-full md:w-3/5 p-3">
                <p className="font-bold text-xl">
                  Get Expert Medical Second Opinions for Peace of Mind and Informed Decisions
                </p>
                <br />
                <p className="text-sm md:text-xl   text-foreground-light text-[#79717f]">
                  At My Ewa Care, we understand that receiving a diagnosis or deciding on a treatment plan can be overwhelming. Our second opinion services empower you with additional insights, expert guidance, and reassurance, helping you make confident decisions about your health. Whether you’re facing a complex condition or seeking confirmation on a proposed treatment, our team of highly skilled specialists is here to support you.
                </p>
                <br />

                {/* Second Opinion Accordion */}
                <AccordionSection
                  items={secondOpinionItems}
                  openIndex={secondOpinionOpenIndex}
                  toggleAccordion={toggleSecondOpinionAccordion}
                  answerRefs={secondOpinionAnswerRefs}
                />
              </div>

              {/* Right Column (40%) */}
              <div className="w-full md:w-2/5 p-3">
                <img
                  src={`${domainName}/images/OurService/second-opinion.png`}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>

          {/* Health and Wellness Section */}
          <section
            id="healthAndWellness"
            className="mt-[4rem] py-8 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#02989D] text-center mb-4">
              Health and Wellness
            </h2>

            <div className="flex flex-col md:flex-row w-full">
              {/* Left Column (40%) */}
              <div className="w-full md:w-2/5 p-3">
                <img
                  src={`${domainName}/images/OurService/Health-and-Wellness.png`}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Column (60%) */}
              <div className="w-full md:w-3/5 p-3">
                <p className="font-bold text-xl">Health and Wellness Programs at My Ewa Care</p>
                <br />
                <p className="text-sm md:text-xl   text-foreground-light text-[#79717f]">Take Control of Your Health with My Ewa Care</p>

                <p className="text-sm md:text-xl   text-foreground-light text-[#79717f]">
                  At My Ewa Care, we believe in helping you live your healthiest
                  life. Our Health and Wellness Programs are designed to support you
                  in every aspect of your well-being — from fitness to mental health
                  to nutrition. We make it simple for you to achieve your health
                  goals with expert support and personalized plans.
                </p>
                <br />
                {/* Health and Wellness Content Accordion */}
                <AccordionSection
                  items={healthWellnessItems}
                  openIndex={hwOpenIndex}
                  toggleAccordion={toggleHwAccordion}
                  answerRefs={hwAnswerRefs}
                />
                <br />
              </div>
            </div>
          </section>


          {/* Surgery Section */}
          <section
            id="surgeries"
            className="mt-[4rem] py-8 px-4 sm:px-6 lg:px-8 bg-[#02989D]/10"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#02989D] text-center mb-4">
              Surgery
            </h2>


            <div className="flex flex-col md:flex-row w-full">
              {/* Left Column (60%) */}
              <div className="w-full md:w-3/5 p-3">
                <p className="font-bold text-xl">Surgery at My Ewa Care</p>
                <br />
                <p className="text-sm md:text-xl   text-foreground-light text-[#79717f]">Top-Quality Surgery for a Healthier Tomorrow</p>
                <p className="text-sm md:text-xl   text-foreground-light text-[#79717f]">
                  At My Ewa Care, we provide a wide range of specialized surgery
                  to help you achieve better health and quality of life. Whether
                  you're dealing with a complex cardiac issue, need a cosmetic
                  procedure, or require treatment for a chronic condition, our team
                  of skilled surgeons and healthcare professionals is here to guide
                  you every step of the way.
                </p>
                <br />
                <AccordionSection
                  items={surgeryItems}
                  openIndex={surgeryOpenIndex}
                  toggleAccordion={toggleSurgeryAccordion}
                  answerRefs={surgeryAnswerRefs}
                />
                <br />
              </div>

              {/* Right Column (40%) */}
              <div className="w-full md:w-2/5 p-3">
                <img
                  src={`${domainName}/images/OurService/surgery.png`}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </section>
          <HealthPlanSection />

          <TestimonialsSection />

          <FAQ />

          <div className="py-6 font-poppins bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
              <h2 className="text-[24px] text-left md:text-center md:text-[28px] font-semibold text-gray-800 leading-tight mb-1 md:mb-[10px] md:max-w-[500px] mx-auto">
                Bring the Next Generation Healthcare to Your Organization
              </h2>
              <p className="text-[20px] text-left md:text-center md:text-[18px] text-gray-600 leading-relaxed mb-8 md:mb-12">
                Find the perfect health plan, get the support you need, and
                feel your best.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <button
                  onClick={() => {
                    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

                    const isAndroid = /android/i.test(userAgent);
                    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

                    if (isAndroid) {
                      // Android device
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else if (isIOS) {
                      // iOS device
                      window.open(
                        "https://apps.apple.com/in/app/myewacare/id6743497584",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else {
                      // Desktop browser or unknown platform → open both links
                      window.open(
                        "https://apps.apple.com/in/app/myewacare/id6743497584",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all border border-[#02989D] bg-gradient-to-r from-[#02989D] to-[#02989D] text-white sm:h-12 px-4 sm:px-5 py-3 sm:py-4 hover:opacity-90"
                >
                  Get the App
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-[#02989D]/90 via-[#02989D]/70 to-[#02989D]/50 text-white hover:opacity-80"
                >
                  Schedule a Demo
                </button>
              </div>
              <ScheduleDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                animateCloseButton={animateCloseButton}
                setAnimateCloseButton={setAnimateCloseButton}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default EmployeePlan;


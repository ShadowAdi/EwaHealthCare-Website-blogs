import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { domainName } from '../App';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]); // Ref to store answer elements

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;
        if (isDesktop) {
            setOpenIndex(0);
        }
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: 'What is a second opinion in healthcare?',
            answer: (
                <div className="flex flex-col gap-4">
                    <p>A second opinion is when you seek advice from another doctor or healthcare professional to confirm a diagnosis, explore other treatment options, or get a different perspective on your health condition. This can help you make more informed decisions about your healthcare.</p>
                </div>
            ),
        },
        {
            question: 'What is a Health and Wellness Program?',
            answer: "Our Health and Wellness Programs are personalized plans designed to help you improve your physical health, mental well-being, and overall lifestyle. Whether it's fitness, nutrition, stress management, or chronic disease prevention, we create a program that supports your unique health goals.",
        },
        {
            question: "How do I get started with the Health and Wellness Program?",
            answer: "Getting started is easy! Simply contact us to schedule an initial consultation. During this meeting, we’ll discuss your health goals, challenges, and needs. Based on this, we’ll create a customized wellness plan for you to follow.",
        },
        {
            question: "Do I need to be in great shape to join the program?",
            answer: "Absolutely not! Our programs are designed for people of all fitness levels. Whether you're just starting your health journey or looking to enhance your current routine, we create personalized plans that fit your individual needs and abilities.",
        },
        {
            question: "How long will it take to see results?",
            answer: "The time it takes to see results depends on your individual goals and how committed you are to the program. Many clients start feeling better within the first few weeks, while significant changes may take several months. Our team will provide ongoing support to help you stay on track.",
        },
        {
            question:"Can I access the Health and Wellness Program remotely?",
            answer:"Yes! We offer virtual consultations and online resources so you can access your program and support no matter where you are. Whether you prefer in-person or virtual sessions, we make it easy for you to stay on top of your health goals.",
        }
    ];

    const dropdownVariants = {
        open: { opacity: 1, height: "auto", marginTop: "10px", marginBottom: "10px" },
        closed: { opacity: 0, height: 0, marginTop: "0px", marginBottom: "0px", transition: { duration: 0.3 }, },
    };

    return (
        <div className="py-6 mt-8 md:py-12 font-[poppins]">
            <section className="container mx-auto flex flex-col md:flex-row gap-16">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-xl md:text-4xl font-semibold text-center capitalize">
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-[#02989D]/10 flex flex-col gap-8 justify-center items-center p-8 rounded-3xl">
                        <img
                            alt="Ask Ewa support"
                            loading="lazy"
                            width="180"
                            height="40"
                            decoding="async"
                            style={{color: 'transparent'}}
                            src={`${domainName}/images/talktous.png`}
                        />
                        <div className="flex flex-col gap-2 text-center">
                            <h3 className="text-lg md:text-xl font-semibold">Still have questions?</h3>
                            <p className="text-md md:text-xl text-foreground/70 text-[#1e1028]"
                               style={{opacity: "70%"}}>
                                We're here for you. Talk to us and let us know how we can help.
                            </p>
                        </div>
                        <a
                            target="_blank"
                            className="inline-flex text-white items-center justify-center rounded-full text-sm md:text-base font-medium bg-[#02989D] text-primary-foreground hover:opacity-80 h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-full md:w-auto"
                            href="https://wa.me/9686638384"
                        >
                            Talk to us
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b last:border-none">
                                <h3 className="flex">
                                    <button
                                        type="button"
                                        aria-expanded={openIndex === index}
                                        className="faq-question flex flex-1 justify-between text-left text-sm md:text-lg font-medium py-6 md:py-8"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {item.question}
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 md:h-6 md:w-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                        >
                                            <path
                                                d="M3.135 6.158a.5.5 0 0 1 .707-.02L7.5 9.565l3.658-3.427a.5.5 0 0 1 .707.708l-4 3.75a.5.5 0 0 1-.707 0l-4-3.75a.5.5 0 0 1-.02-.707z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </h3>
                                <motion.div
                                    ref={el => (answerRefs.current[index] = el)}
                                    variants={dropdownVariants}
                                    initial="closed"
                                    animate={openIndex === index ? "open" : "closed"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="text-sm md:text-lg text-foreground-light overflow-hidden text-[#79717f]"
                                >
                                    <div className="pb-6 md:pb-8">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;

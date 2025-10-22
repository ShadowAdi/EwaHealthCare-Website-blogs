// updated code
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { domainName } from '../App';

const BentoGrid = () => {
    const [currentSection, setCurrentSection] = useState({
        opd: 0,
        wellbeing: 0,
        advantage: 0
    });

    const handleNext = (section) => {
        setCurrentSection(prev => ({
            ...prev,
            [section]: Math.min(prev[section] + 1, getSectionCards(section).length - 1) //Prevent going over the array limits
        }));
    };

    const handlePrev = (section) => {
        setCurrentSection(prev => ({
            ...prev,
            [section]: Math.max(prev[section] - 1, 0) //Prevent going under 0
        }));
    };


    // Animation variants for container
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    // Animation variants for individual cards
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const AnimatedCard = ({children, delay = 0}) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, {once: true, margin: "-100px"});

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={delay}
            >
                {children}
            </motion.div>
        );
    };

    // Card groups for each section
    const opdCards = [
        <AnimatedCard key="opd-group-1">
            <div className="flex flex-col gap-3">
                <Card
                    image="/images/BentoGrid/image 32.svg"
                    title="Affordable online pharmacy"
                    description="Refill and receive your prescriptions easily with our online pharmacy"
                    height="h-[300px]"
                    bg="bg-[#02989D]/10 text-accent-foreground"
                />
                <Card
                    image="/images/BentoGrid/image 30.svg"
                    title="Diagnostics at hospital & home"
                    description="Get the diagnostic tests you need, when and where you need them"
                    height="h-[300px]"
                    bg="bg-[#02989D]/10"
                />
            </div>
        </AnimatedCard>,
        <AnimatedCard key="opd-group-2">
            <div className="flex flex-col gap-4">
                <Card
                    image="/images/BentoGrid/image 28.svg"
                    title="Voluntary add-ons"
                    description="Get add-ons based on your needs like dental, vaccinations, and more"
                    height="h-[300px]"
                    bg="bg-[#02989D]/10 text-accent-foreground"
                />
                <Card
                    image="/images/BentoGrid/image 31.svg"
                    title="Online consultation"
                    description="Get the care you need quickly and conveniently with virtual sessions"
                    height="h-[300px]"
                    bg="bg-[#02989D]/10"
                />
            </div>
        </AnimatedCard>
    ];

    const getSectionCards = (section) => {
        switch (section) {
            case "opd":
                return opdCards;
            default:
                return [];
        }
    };

    //Simplified Card Structure
    const sectionData = [
        {
            title: "OPD",
            cards: opdCards
        },
    ];


    const makeCardGroup = (mainCard, topCard, bottomCard, extraCards) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 s">
                <AnimatedCard key={topCard.title}>
                    <div className="flex flex-col gap-4 h-[300px]">
                        <Card
                            {...topCard}
                            height="h-full"
                        />
                    </div>
                </AnimatedCard>
                <AnimatedCard key={bottomCard.title}>
                    <div className="flex flex-col gap-4 h-[300px]">
                        <Card
                            {...bottomCard}
                            height="h-full"
                        />
                    </div>
                </AnimatedCard>
                {extraCards.map((card, index) => (
                    <AnimatedCard key={card.title}>
                        <div className="flex flex-col gap-4 h-[300px]">
                            <Card
                                {...card}
                                height="h-full"
                            />
                        </div>
                    </AnimatedCard>
                ))}
            </div>
        </div>
    );

// Define the section data
    const sections = [
        {
            title: "OPD",
            content: makeCardGroup(
                {
                    // image: "/images/bento/cashless.png",
                    // title: "Cashless wallets",
                    // description: "Streamline checkout with prefilled wallets for your convenience",
                    // bg: "bg-primary/5",
                },
                {
                    image: `${domainName}/images/BentoGrid/image 32.svg`,
                    title: "Affordable online pharmacy",
                    description: "Refill and receive your prescriptions easily with our online pharmacy",
                    bg: "bg-[#02989D]/10 text-accent-foreground",
                },
                {
                    image: `${domainName}/images/BentoGrid/image 30.svg`,
                    title: " Voluntary add-ons",
                    description: "Get add-ons based on your needs like dental, vaccinations, and more",
                    bg: "bg-[#02989D]/10",
                },
                [
                    {
                        image: `${domainName}/images/BentoGrid/image 28.svg`,
                        title: "Diagnostics at hospital & home",
                        description: "Get the diagnostic tests you need, when and where you need them ",
                        bg: "bg-[#02989D]/10 text-accent-foreground",
                    },
                    {
                        image: `${domainName}/images/BentoGrid/image 31.svg`,
                        title: "Online consultation",
                        description: "Get the care you need quickly and conveniently with virtual sessions",
                        bg: "bg-[#02989D]/10",
                    }
                ]
            )
        },
    ];

    return (
        <div className="block mt-20">
            <section className="grid grid-cols-1">
                <div className="col-span-8 flex flex-col">
                    {sectionData.map((section, index) => (
                        <React.Fragment key={section.title}>
                            <div className="col-span-8 lg:col-span-3 flex flex-col">
                                <div>
                                    <motion.h2
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6}}
                                        className="text-3xl font-semibold text-left mb-4 pl-4 lg:pl-60"
                                    >
                                    </motion.h2>

                                    {/* Desktop View */}
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="hidden px-80 
                                            lg:block lg:px-65 
                                            xl:px-80"
                                    >
                                        {sections[index].content}
                                    </motion.div>

                                    {/* Mobile View */}
                                    <div className="lg:hidden px-4">
                                      <div className="flex flex-row justify-end items-center mb-4">
                                        <button
                                          onClick={() => handlePrev(section.title.toLowerCase())}
                                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                                        >
                                          <ChevronLeft size={20} />
                                        </button>
                                        <button
                                          onClick={() => handleNext(section.title.toLowerCase())}
                                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-2"
                                        >
                                          <ChevronRight size={20} />
                                        </button>
                                      </div>
                                      <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="overflow-hidden"
                                      >
                                        {section.title === "OPD" && opdCards[currentSection.opd]}
                                      </motion.div>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </div>
    );
};

const Card = ({image, title, description, height = "h-full", bg, extraClasses = ""}) => {
    return (
        <div
            className={`flex flex-col justify-between ${height} ${bg} rounded-lg relative ${extraClasses} p-4 transition-all duration-300 hover:shadow-lg`}>
            <div className="flex-none">
                <h3 className="text-sm lg:text-[0.96rem] leading-[1.5rem] font-semibold text-[#02989D]">{title}</h3>
                <p className="text-sm lg:text-[0.96rem] leading-[1.5rem] opacity-70 text-[#02989D]">{description}</p>
            </div>

            <div className="flex-grow flex items-end w-full ">
                <img
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[200px] object-contain"
                    src={image}
                />
            </div>
        </div>
    );
};

export default BentoGrid;

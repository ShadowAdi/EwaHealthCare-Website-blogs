import React from "react";
import { motion } from "framer-motion";
import Feature3ServiceCard from "./Feature3ServiceCard";

const Features3Service3 = () => {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 flex flex-col py-8 sm:py-10 lg:py-14 pb-6 sm:pb-8 lg:pb-10 items-center justify-between flex-1 space-y-6 sm:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center w-full justify-center space-y-2 lg:space-y-3 max-w-4xl"
      >
        <h1 className="text-[#02989D] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-tight">
          Patient Support & Care Coordination
        </h1>
      </motion.div>

      <div className="flex-1 w-full items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        <Feature3ServiceCard
          cardHeadingText="Insurance Assistance"
          cardSubtitleText="Navigate your surgery insurance claims "
          imagePath="/images/SurgeryConsultation/feature3service31.png"
          delay={0.1}
        />
        <Feature3ServiceCard
          cardHeadingText="Financing & EMI Options"
          cardSubtitleText="Affordable payment plans"
          imagePath="/images/SurgeryConsultation/feature3service32.png"
          delay={0.2}
        />
        <Feature3ServiceCard
          cardHeadingText="Scheduling & Care Coordination"
          cardSubtitleText="Streamlined appointments and support"
          imagePath="/images/SurgeryConsultation/feature3service33.png"
          delay={0.3}
        />
        <Feature3ServiceCard
          cardHeadingText="Virtual Consultation"
          cardSubtitleText="Access top surgeons remotely"
          imagePath="/images/SurgeryConsultation/feature3service34.png"
          delay={0.4}
        />
        <Feature3ServiceCard
          cardHeadingText="Post-Surgery Care & Rehab:"
          cardSubtitleText="Personalized recovery support"
          imagePath="/images/SurgeryConsultation/feature3service35.png"
          delay={0.5}
        />
      </div>
    </section>
  );
};

export default Features3Service3;

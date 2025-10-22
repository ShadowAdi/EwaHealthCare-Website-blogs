import React from "react";
import { motion } from "framer-motion";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col py-14 items-center justify-between flex-1 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center w-full justify-center space-y-2 lg:space-y-3 max-w-2xl"
      >
        <h1 className="text-[#02989D] text-3xl text-center md:text-left font-semibold">
          What is Corporate Wellness?
        </h1>
        <p className="text-xl text-center text-[#313131]">
          Corporate wellness programs are structured initiatives to enhance
          employee health and wellbeing through:
        </p>
      </motion.div>

      <div className="flex-1 w-full items-center justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <FeaturesCard
          cardText="Fitness and physical activity programs"
          imagePath="/images/corporatePage/feat.png"
          delay={0.1}
        />
        <FeaturesCard
          cardText="Nutrition guidance and healthy eating workshops"
          imagePath="/images/corporatePage/feature2.png"
          delay={0.2}
        />
        <FeaturesCard
          cardText="Mental health support and emotional wellness sessions"
          imagePath="/images/corporatePage/feature3.png"
          delay={0.3}
        />
        <FeaturesCard
          cardText="Preventive health screenings and wellness camps "
          imagePath="/images/corporatePage/feature4.png"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default Features;

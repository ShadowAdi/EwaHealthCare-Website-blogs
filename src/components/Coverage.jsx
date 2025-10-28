import { motion } from "framer-motion";
import React from "react";
import { domainName } from '../App';

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Coverage = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Trusted Second Opinion & Expert Medical Advice */}
        <div className="row-span-4 bg-[#02989D]/10 rounded-2xl px-4 md:p-0 min-h-[600px]">
          <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden">
            <section className="p-6 md:p-10">
              <h2 className="text-lg md:text-2xl mb-2 font-semibold text-[#422d1a]">
                Trusted Second Opinion & Expert Medical Advice
              </h2>
              <p className="text-md md:text-xl opacity-80 text-[#422d1a]">
                Get accurate and reliable second opinions from top healthcare specialists.
                Our expert-led consultations ensure that you receive the right diagnosis and the most
                effective treatment plans, empowering you to make informed health decisions with confidence.
              </p>
            </section>
            <section className="bg-[#02989D]/25 rounded-tl-2xl rounded-tr-2xl shadow-md mx-4 md:mx-6 pb-2">
              <motion.img
                alt="Expert Advice"
                loading="lazy"
                src={`${domainName}/images/coverage/2.svg`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl max-w-[680px] mx-auto w-full max-h-[280px] object-contain"
              />
            </section>
          </div>
        </div>

        {/* Best Second Opinion Services — Online & In-Person */}
        <div className="row-span-4 bg-[#02989D]/10 rounded-2xl px-4 md:p-0 min-h-[600px]">
          <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden">
            <section className="p-6 md:p-10">
              <h2 className="text-lg md:text-2xl mb-2 font-semibold text-[#1e1028]">
                Advanced Diagnostics & Lab Testing
              </h2>
              <p className="text-md md:text-xl opacity-80 text-[#1e1028]">
                Access a wide range of diagnostic tests and health screenings from certified labs. Our platform ensures timely results and professional guidance, helping you make informed decisions about your health.
              </p>
            </section>
            <section className="bg-[#02989D]/25 rounded-tl-2xl rounded-tr-2xl shadow-md mx-4 md:mx-6 pb-2">
              <motion.img
                alt="Online & In-Person"
                loading="lazy"
                src={`${domainName}/images/coverage/1.svg`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl max-w-[680px] mx-auto w-full max-h-[280px] object-contain"
              />
            </section>
          </div>
        </div>

        {/* Proactive Health Management & Personalized Recommendations */}
        <div className="row-span-4 bg-[#02989D]/10 rounded-2xl px-4 md:p-0 min-h-[600px]">
          <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden">
            <section className="p-6 md:p-10">
              <h2 className="text-lg md:text-2xl mb-2 font-semibold text-[#422d1a]">
                Tailored Wellness & Preventive Care
              </h2>
              <p className="text-md md:text-xl opacity-80 text-[#422d1a]">
                Achieve long-term well-being with customized nutrition plans, fitness guidance, stress management, and lifestyle coaching. Our programs are designed for individuals and corporate teams to maintain proactive health.
              </p>
            </section>
            <section className="bg-[#02989D]/25 rounded-tl-2xl rounded-tr-2xl shadow-md mx-4 md:mx-6 pb-2">
              <motion.img
                alt="Proactive Health"
                loading="lazy"
                src={`${domainName}/images/coverage/3.svg`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl max-w-[680px] mx-auto w-full max-h-[280px] object-contain"
              />
            </section>
          </div>
        </div>

        {/* Compassionate Second Opinion Support — Every Step of the Way */}
        <div className="row-span-4 bg-[#02989D]/10 rounded-2xl px-4 md:p-0 min-h-[600px]">
          <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden">
            <section className="p-6 md:p-10">
              <h2 className="text-lg md:text-2xl mb-2 font-semibold text-[#1e1028]">
                Online Consultations & Corporate Wellness
              </h2>
              <p className="text-md md:text-xl opacity-80 text-[#1e1028]">
               Connect with doctors anytime via secure virtual consultations and bring holistic healthcare to your organization with our corporate wellness solutions. We support both individual and enterprise health needs across India.
              </p>
            </section>
            <section className="bg-[#02989D]/25 rounded-tl-2xl rounded-tr-2xl shadow-md mx-4 md:mx-6 pb-2">
              <motion.img
                alt="Supportive Journey"
                loading="lazy"
                src={`${domainName}/images/coverage/4.svg`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl max-w-[680px] mx-auto w-full max-h-[280px] object-contain"
              />
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Coverage;

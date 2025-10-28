import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroService3 from "../components/SurgeryConsultation/HeroService3";
import Features3Service3 from "../components/SurgeryConsultation/Features3Service3";
import Feature2Servivce3 from "../components/SurgeryConsultation/Feature2Service3";
import Feature5Service3 from "../components/SurgeryConsultation/Feature5Service3";
import Feature4Service3 from "../components/SurgeryConsultation/Feature4Service3";
import Features7 from "../components/SurgeryConsultation/Features7";
import Feature8 from "../components/SurgeryConsultation/Feature8";
import ContactForm from "../components/SurgeryConsultation/ContactForm";

const faqData = [
  {
    id: 1,
    question: "How do I schedule a surgery consultation?",
    answer:
      "Booking is simple. Fill out the consultation form at the bottom of this page, select your surgical specialty, choose a preferred date and time (virtual or in-person), upload your medical records, and receive a personalized care plan from our experts.",
  },
  {
    id: 2,
    question: "How soon can I start my surgery after consultation?",
    answer:
      "Once your consultation is complete and all medical and insurance formalities are in place, we help you schedule surgery at the earliest possible date suitable for you.",
  },
  {
    id: 3,
    question: "Are there any risks associated with surgeries?",
    answer:
      "Every surgery carries some risks, but our expert surgeons assess each case individually and take precautions to minimize complications.",
  },
  {
    id: 4,
    question: "What does post-surgery care include?",
    answer:
      "Post-surgery care includes follow-up consultations, rehabilitation guidance, and personalized recovery plans to ensure safe and effective healing.",
  },
  {
    id: 5,
    question: "What financing options are offered for surgeries?",
    answer:
      "We provide flexible payment plans, including EMI options, to make surgeries more affordable.",
  },
  {
    id: 6,
    question: "Are virtual consultations available?",
    answer:
      "Yes, you can consult top surgeons from anywhere in India through secure virtual appointments.",
  },
  {
    id: 7,
    question: "What documents do I need for a consultation?",
    answer:
      "You should have your medical reports, previous test results, and any relevant prescriptions ready to upload for the consultation.",
  },
];

const SurgeryConsultation = () => {
  return (
    <>
      <Header className="fixed top-0 left-0 w-full z-50" />
      <main className="w-full h-full flex flex-col items-center min-h-screen bg-[#fff] text-black pt-[90px] sm:pt-[100px] lg:pt-[110px]">
        <HeroService3 />
        <Feature2Servivce3 />
        <Features3Service3 />
        <Feature4Service3 />
        <Feature5Service3 />
        <Features7 />
        <Feature8 faqData={faqData} />
                <ContactForm/>

      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default SurgeryConsultation;

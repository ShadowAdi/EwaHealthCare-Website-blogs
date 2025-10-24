import React from "react";
import Features from "../components/corporatePage/Features";
import Feature3 from "../components/corporatePage/Feature3";
import Features4 from "../components/corporatePage/Features4";
import Features5 from "../components/corporatePage/Features5";
import Features6 from "../components/corporatePage/Features6";
import Features7 from "../components/corporatePage/Features7";
import Feature8 from "../components/corporatePage/Feature8";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/corporatePage/Hero";
import HowProgramWork from "../components/corporatePage/HowProgramWork";

const faqData = [
  {
    id: 1,
    question: "How do we get started with MyEwacare's corporate wellness services?",
    answer: "You can request a custom wellness package or book a consultation through our form, and our team will plan and implement a program for your organization.",
  },
  {
    id: 2,
    question: "Is support available if employees face issues during the program?",
    answer: "Yes, our team provides ongoing support and follow-ups to help employees with any questions or concerns.",
  },
  {
    id: 3,
    question: "Who are the experts behind MyEwacare's wellness programs?",
    answer: "Our team includes certified wellness coaches, nutritionists, mental health facilitators, and preventive care specialists who guide employees throughout the program.",
  },
  {
    id: 4,
    question: "What is the cost of a MyEwacare wellness program?",
    answer: "The cost varies based on program type, services selected, and the number of employees. You can contact us for a personalized proposal.",
  },
  {
    id: 5,
    question: "How can our employees access the wellness programs?",
    answer: "Employees can join online classes, attend onsite sessions, participate in wellness camps, or consult with our experts.",
  },
  {
    id: 6,
    question: "How long do the programs last?",
    answer: "Program duration depends on your goals and chosen services, and we provide short-term or long-term options as needed.",
  },
  {
    id: 7,
    question: "Are the programs delivered online, onsite, or both?",
    answer: "We offer online, onsite, and hybrid options depending on what works best for your organization.",
  },
  {
    id: 8,
    question: "Can MyEwacare customize wellness programs for our organization?",
    answer: "Yes, each program is designed according to your company's size, culture, and wellness goals to suit your employees' needs.",
  },
];

const CorporatePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black overflow-x-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content with offset */}
      <main className="flex-1 w-full pt-[80px]">
        <Hero />
        <Features />
        <Feature3 />
        <Features4 />
        <HowProgramWork/>
        {/* <Features6 /> */}
        <Features5 />
        <Features7 />
        <Feature8 faqData={faqData}/>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default CorporatePage;

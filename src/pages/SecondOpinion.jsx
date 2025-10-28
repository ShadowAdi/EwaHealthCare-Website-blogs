import HeroSection from "../components/secondOpinion/HeroSection";
import Footer from "../components/Footer";
import First from "../components/secondOpinion/First";
import Second from "../components/secondOpinion/Second";
import Third from "../components/secondOpinion/Third";
import Fourth from "../components/secondOpinion/Fourth";
import Fifth from "../components/secondOpinion/Fifth";
import Sixth from "../components/secondOpinion/Sixth";
import Seventh from "../components/secondOpinion/Seventh";
import Eighth from "../components/secondOpinion/Eighth";
import Header from "../components/Header";
import Features6 from "../components/secondOpinion/Features6";

const faqData = [
  {
    id: 1,
    question: "Why should I get a second opinion?",
    answer: "A second opinion gives clarity and confidence—especially in complex or critical conditions like cancer, surgery, or chronic illnesses. It ensures you receive the most effective and up-to-date treatment approach."
  },
  {
    id: 2,
    question: "Who provides the second opinion?",
    answer: "All opinions are given by board-certified doctors and specialists from reputed hospitals across multiple fields, including oncology, cardiology, orthopaedics, and more."
  },
  {
    id: 3,
    question: "How long does it take to receive my second opinion?",
    answer: "You'll typically receive your expert review within 24–48 hours, depending on the complexity of your case and availability of specialists."
  },
  {
    id: 4,
    question: "Do I need a referral from my doctor to get a second opinion?",
    answer: "No referral is required. You can directly request a second opinion on your own through the MyEwacare platform."
  },
  {
    id: 5,
    question: "Are my medical records kept confidential?",
    answer: "Absolutely. All your medical data and reports are encrypted and handled securely in compliance with patient data privacy standards."
  },
  {
    id: 6,
    question: "What kind of reports or documents should I upload?",
    answer: "You can upload test reports, MRI/CT scans, biopsy results, prescriptions, and discharge summaries—anything that helps our specialists understand your case better."
  },
  {
    id: 7,
    question: "How much does a second opinion cost?",
    answer: "The report review is free, and any additional paid consultation depends on the specialist, department, and depth of case discussion. Transparent pricing is shared before you confirm."
  }
];

export default function SecondOpinion() {
  return (
    <>
      {/* Fixed Header */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Push content below header */}
      <main className="pt-16 sm:pt-20 w-full">
        <HeroSection />
        <First />
        <Second />
        <Third />
        <Fourth />
        {/* <Features6/> */}
        <Fifth />
        <Sixth />
        <Seventh faqData={faqData}/>
        <Eighth />
        <Footer />
      </main>
    </>
  );
}

import React, { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import BlogsPage from "./pages/BlogsPage";
import HabitPage from "./pages/Habit";
import HealthPlan from "./pages/HealthPlan";
import HomePage from "./pages/Home";
import OurServices from "./pages/OurServices";
import EventPage from "./pages/EventPage"
import CorporatePage from "./pages/CorporatePage";
import SecondOpinion from "./pages/SecondOpinion";
import SurgeryConsultation from "./pages/SurgeryConsultation";

const AboutUs = lazy(() => import("./components/AboutUs"));
const BlogDetail = lazy(() => import("./components/Blogs/BlogDetail"));
const FloatingButtons = lazy(() => import("./components/FloatingButtons"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const RefundPolicy = lazy(() => import("./components/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));


export const domainName = window.location.origin;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/health-plans" element={<HealthPlan></HealthPlan>} />
            <Route path="/habit" element={<HabitPage></HabitPage>} />
            <Route path="/blogs" element={<BlogsPage></BlogsPage>} />
            <Route path="/event" element={<EventPage></EventPage>} />
            <Route path="/corporate-plans" element={<CorporatePage></CorporatePage>} />
            <Route path="/second-opinion" element={<SecondOpinion></SecondOpinion>} />
            <Route path="/surgery-consultation" element={<SurgeryConsultation></SurgeryConsultation>} />
            <Route
              path="/blogs/:id"
              element={
                <>
                  <Header />
                  <BlogDetail />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route path="/our-services" element={<OurServices></OurServices>} />
            <Route
              path="/embedded-plans"
              element={
                <>
                  <Header />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/refund-policy"
              element={
                <>
                  <Header />
                  <RefundPolicy />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <>
                  <Header />
                  <PrivacyPolicy />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <>
                  <Header />
                  <TermsConditions />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/locations"
              element={
                <>
                  <Header />
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;

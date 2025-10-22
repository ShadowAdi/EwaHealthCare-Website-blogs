import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

const EmployeePlan = lazy(() => import("../components/EmployeePlan"));
const FloatingButtons = lazy(() => import("../components/FloatingButtons"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));

const OurServices = () => {
  return (
    <>
      <Helmet>
        <title>Medical Second Opinion & Surgery Care Services | MyEwaCare </title>
        <meta
          name="description"
          content="Explore second opinions, surgery care, wellness programs, chronic care & tailored healthcare packages designed for individuals and corporates at MyEwaCare ."
        />
        <link rel="canonical" href="https://myewacare.com/our-services" />
      </Helmet>
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense>
        <Header />
        <EmployeePlan />
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  );
};

export default OurServices;

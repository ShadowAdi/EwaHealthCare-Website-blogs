import React, { Suspense, lazy } from "react";

const FloatingButtons = lazy(() => import("../components/FloatingButtons"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));

const HealthPlan = () => {
  return (
    <>
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

export default HealthPlan;

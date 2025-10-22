import React from 'react';

const PlanSection = () => {


  return (
    <div className="flex flex-col items-center gap-2 md:gap-5 mx-auto pt-40">
      <h2 className="text-[16px] md:text-4xl font-semibold self-center text-center max-w-[48rem]"
        style={{ color: "#02989D" }}>

        Your Complete Healthcare Solution<br />– Why
        MyEwaCare Stands Out
      </h2>
      <p className="text-sm md:text-xl max-w-[800px] text-center text-foreground-light"
        style={{ color: "#79717f" }}>
        "Comprehensive care made simple — from prescriptions and diagnostics to consultations and custom add-ons, we've got everything you need to stay healthier, longer."
      </p>
      <div></div>
    </div>
  );
};

export default PlanSection;

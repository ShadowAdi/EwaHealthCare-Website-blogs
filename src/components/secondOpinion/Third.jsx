import React from "react";
import doctorIcon from "../../../public/images/secondOpinion/t11.png";
import reportIcon from "../../../public/images/secondOpinion/t22.png";
import lockIcon from "../../../public/images/secondOpinion/t33.png";
import videoIcon from "../../../public/images/secondOpinion/t44.png";
import journeyIcon from "../../../public/images/secondOpinion/t55.png";

const Third = () => {
  const features = [
    {
      icon: doctorIcon,
      text: "Specialists across oncology, cardiology, neurology, orthopedics, and more",
    },
    {
      icon: reportIcon,
      text: "Reports delivered in 48–72 hours",
    },
    {
      icon: lockIcon,
      text: "Secure and confidential process",
    },
    {
      icon: videoIcon,
      text: "Virtual consultations to discuss your report",
    },
    {
      icon: journeyIcon,
      text: "Support throughout your healthcare journey",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-white text-center"
      style={{ fontFamily: "Poppins" }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0DB3B8] mb-12">
        Why Choose Myewacare?
      </h2>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white border-2 border-[#DEDEDE] rounded-xl p-6 sm:p-8 shadow-sm 
                       hover:bg-[#0DB3B8] hover:text-white hover:border-[#0DB3B8] transition-all duration-300 group 
                       w-full sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[371px] min-h-[230px]"
          >
            <img
              src={item.icon}
              alt={`feature-${index}`}
              className="w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] mb-4 transition-all duration-300 [filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(1248%)_hue-rotate(150deg)_brightness(103%)_contrast(101%)] group-hover:[filter:brightness(0)_invert(1)]"
            />
            <p className="text-base sm:text-lg md:text-[18px] font-medium leading-relaxed w-[80%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Third;
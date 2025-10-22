import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { domainName } from "../App";

const OurImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const statistics = [
    { value: 250, label: "Surgeries" },
    { value: 850, label: "Patients" },
    { value: 100, label: "Partnered Hospitals/Doctors" },
    { value: 120, label: "Cities Covered" },
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#02989D] mb-2">
          What Makes Us Different?
        </h2>
        <p className="text-md md:text-lg text-gray-600">
          Trusted by patients, hospitals, and partners across India.
        </p>
      </div>

      {/* Layout: Image + Stats */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={`${domainName}/images/operation2.svg`}
            alt="Our Impact"
            loading="lazy"
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[350px] xl:w-[400px] mt-4"
          />
        </div>

        {/* Right Stats */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="bg-[#D6F7F8] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#02989D]">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    delay={index * 0.2}
                    suffix="+"
                  />
                ) : (
                  "0"
                )}
              </p>
              <p className="mt-2 text-md md:text-lg text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;

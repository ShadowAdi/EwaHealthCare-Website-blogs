import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronUp } from "lucide-react";
const CorporateWellnessPackage = () => {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  // Dummy data for packages
  const packages = [
    {
      id: "below40",
      title: "Package for Male/Female Employees below 40",
      category: "Medical Screening Parameters",
      parameters: [
        "CBC",
        "ESR",
        "Complete Urine Examination",
        "Fasting Blood Sugar",
      ],
      color: "bg-[#02989D]",
    },
    {
      id: "above40",
      title: "Package for Male/Female Employees above 40",
      category: "Medical Screening Parameters",
      parameters: [
        "CBC",
        "ESR",
        "Complete Urine Examination",
        "Fasting Blood Sugar",
        "HbA1C",
        "Total Cholesterol",
        "HDL, LDL, VLDL, Triglyceride, ratios",
        "SGPT",
        "SGOT",
        "Bilirubin, Alk. Phosphatase,",
        "Proteins, Albumin, Globulin, GGT",
        "S. creatinine",
        "BUN",
        "Uric Acid",
        "TSH",
        "T3, T4",
        "Vitamin D",
        "Vitamin B12",
        "Total Calcium",
        "HbsAg (Hepatitis B)",
        "PSA",
        "CA125",
      ],
      color: "bg-[#02989D]",
    },
  ];

  const togglePackage = (packageId: string) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col py-14 items-center justify-between flex-1 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center w-full justify-center space-y-2 lg:space-y-3 max-w-2xl"
      >
        <h1 className="text-[#02989D] text-2xl sm:text-3xl font-semibold text-center">
          Explore our Corporate Wellness Packages
        </h1>
        <p className="text-lg sm:text-xl text-center text-[#313131] px-4">
          Myewacare 360 packages
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-6xl gap-5 flex items-center flex-col sm:flex-row flex-wrap  justify-center  "
      >
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex-1"
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-0">
              <div
                className={`${pkg.color} text-white p-4 font-semibold text-center`}
              >
                Medical Screening
                <br />
                Parameters
              </div>
              <div
                className={`${pkg.color} text-white p-4 font-semibold text-center border-l-[0.5px] border-[#FFFFFFB2]`}
              >
                {pkg.title}
              </div>
            </div>

            {/* Collapsed View */}
            <div className="grid grid-cols-2 gap-0 ">
              <div className="p-4 bg-white">
                <ul className="space-y-1 text-sm">
                  {pkg.parameters.slice(0, 4).map((param, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-1 h-1 bg-[#1E1028] rounded-full mr-2 flex-shrink-0"></span>
                      {param}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-white border-l-[0.5px] border-[#7373734D]">
                <ul className="space-y-1 text-sm">
                  {pkg.parameters.slice(0, 4).map((param, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-1 h-1 bg-[#1E1028] rounded-full mr-2 flex-shrink-0"></span>
                      {param}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expanded View */}
            {expandedPackage === pkg.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-0 "
              >
                <div className="p-4">
                  <ul className="space-y-1 text-sm">
                    {pkg.parameters.slice(4).map((param, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-1 h-1 bg-[#1E1028] rounded-full mr-2 flex-shrink-0"></span>
                        {param}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-l-[0.5px] border-[#7373734D]">
                  <ul className="space-y-1 text-sm ">
                    {pkg.parameters.slice(4).map((param, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-1 h-1 bg-[#1E1028] rounded-full mr-2 flex-shrink-0"></span>
                        {param}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            <div className="flex justify-center py-4 bg-white">
              <button
                onClick={() => togglePackage(pkg.id)}
                className={`flex items-center space-x-2 bg-[#02989D] transition-colors rounded-full px-8 py-3 ${
                  expandedPackage === pkg.id
                    ? "bg-white text-[#404040] border-[#0000001C] border"
                    : "bg-[#02989D] text-white "
                } `}
              >
                <span className="text-base font-semibold ">
                  {expandedPackage === pkg.id ? "View less" : "View more"}
                </span>
                <ChevronUp
                  className={
                    expandedPackage === pkg.id
                      ? "text-[#404040] rotate-270"
                      : "text-[#fff] rotate-180"
                  }
                />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CorporateWellnessPackage;

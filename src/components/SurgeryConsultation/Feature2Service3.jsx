import React from "react";
import { motion } from "framer-motion";

const specialties = [
  {
    id: 1,
    title: "Orthopedic Surgery:",
    description: "Joint replacement, spine surgery, fracture repair",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle.png",
  },
  {
    id: 2,
    title: "Cardiac & Thoracic Surgery:",
    description: "Heart and lung surgical care",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle1.png",
  },
  {
    id: 3,
    title: "Bariatric Surgery:",
    description: "Gastric bypass, sleeve, and weight-loss procedures",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle2.png",
  },
  {
    id: 4,
    title: "Cosmetic & Plastic Surgery:",
    description: "Reconstructive & aesthetic procedures",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle3.png",
  },
  {
    id: 5,
    title: "ENT Surgery:",
    description: "Tonsil, sinus, and ear procedures",
    image: "images/SurgeryConsultation/feature2service3/Rectangle4.png",
  },
  {
    id: 6,
    title: "Urology Surgery:",
    description: "Kidney stones, prostate, urinary tract conditions",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle5.png",
  },
  {
    id: 7,
    title: "Dermatology Surgery:",
    description: "Skin cancer, mole removal, other dermatological surgeries",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle6.png",
  },
  {
    id: 8,
    title: "General Surgery:",
    description: "Hernia repair, gallbladder removal, appendectomy",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle7.png",
  },
  {
    id: 9,
    title: "Neurosurgery:",
    description: "Brain & spinal surgeries",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle8.png",
  },
  {
    id: 10,
    title: "Ophthalmology Surgery:",
    description: "Cataract, glaucoma, LASIK",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle9.png",
  },
  {
    id: 11,
    title: "Gynecological Surgery:",
    description: "Fibroid removal, hysterectomy, endometriosis",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle10.png",
  },
  {
    id: 12,
    title: "Colon & Rectal Surgery:",
    description: "Hemorrhoids, fissures, fistulas",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle11.png",
  },
  {
    id: 13,
    title: "Vascular Surgery:",
    description: "Varicose veins, aneurysms, vascular malformations",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle12.png",
  },
  {
    id: 14,
    title: "Oncology Surgery:",
    description:
      "Tumor removal, cancer-related procedures, reconstructive surgeries",
    image: "/images/SurgeryConsultation/feature2service3/Rectangle13.png",
  },
];

const Feature2Service3 = () => {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 flex flex-col py-8 sm:py-10 lg:py-14 items-center justify-between space-y-6 sm:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full justify-center space-y-2 lg:space-y-3 max-w-2xl"
      >
        <h1 className="text-[#404040] text-2xl sm:text-3xl lg:text-4xl text-center font-semibold">
          Surgical Specialties
        </h1>
      </motion.div>

      {/* Grid Layout */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer hover:bg-[#02989D]"
            >
              <div className="flex items-center h-20 sm:h-24 lg:h-28 p-2 sm:p-3">
                <div className="w-16 sm:w-20 lg:w-24 h-full flex-shrink-0">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center ml-3">
                  <h3 className="font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-[#02989D] group-hover:text-white line-clamp-2 leading-tight">
                    {specialty.title}
                  </h3>
                  <p className="text-xs sm:text-xs lg:text-sm text-[#404040] group-hover:text-white leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature2Service3;

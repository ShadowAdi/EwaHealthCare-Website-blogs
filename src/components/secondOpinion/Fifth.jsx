import { useEffect, useRef, useState } from "react";
import fifth from "../../../public/images/secondOpinion/fifth.png";

const Fifth = () => {
  const specialtiesLeft = [
    { title: "Oncology", subtitle: "– All cancer types" },
    { title: "Cardiology", subtitle: "– Heart conditions" },
    { title: "Neurology", subtitle: "– Brain & nervous system" },
  ];

  const specialtiesRight = [
    { title: "Surgery Reviews", subtitle: "– Various procedures" },
    { title: "Rare Diseases & Genetic", subtitle: "– Disorders" },
    { title: "Orthopedics", subtitle: "– Joints, spine, musculoskeletal" },
  ];

  const imageRef = useRef(null);
  const [radius, setRadius] = useState(130);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const elipSize = 24;

  useEffect(() => {
    const updateRadius = () => {
      if (imageRef.current) {
        const size = imageRef.current.offsetWidth;
        setRadius(size / 2 + elipSize / 2 + 8);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const dotAngles = [210, 180, 150, -30, 0, 30];
  const mobileDotAngles = [200, 180, 160, -40, 0, 40];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const angles = isMobile ? mobileDotAngles : dotAngles;

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-[#f0fafb] relative overflow-hidden max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#02989D] mb-16 text-center">
          Specialties We Cover
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-8 text-center lg:text-right order-2 lg:order-1 pr-0 lg:pr-6">
            {specialtiesLeft.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="space-y-1 transition-all duration-200 hover:translate-x-1 hover:text-[#02989D] cursor-pointer"
              >
                <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE + CIRCLE + DOTS */}
          <div className="flex-1 order-1 lg:order-2 relative flex justify-center items-center w-full">
            <div className="relative flex justify-center items-center">
              {/* Dotted circular border */}
              <div
                className="absolute rounded-full border-2 border-dashed border-gray-300 hidden sm:block"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                }}
              ></div>

              {/* Doctor Image */}
              <img
                ref={imageRef}
                src={fifth}
                alt="Doctor"
                className="rounded-full object-cover shadow-md transition-all duration-500 cursor-pointer w-[65vw] sm:w-[40vw] md:w-[35vw] lg:w-[300px] xl:w-[340px] aspect-square border-4 border-white"
              />

              {/* Dots */}
              {!isMobile &&
                angles.map((deg, i) => {
                  const angle = (deg * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isHighlighted = hoveredIndex === i;

                  return (
                    <div
                      key={i}
                      style={{
                        width: `${elipSize}px`,
                        height: `${elipSize}px`,
                        left: `calc(50% + ${x}px - ${elipSize / 2}px)`,
                        top: `calc(50% + ${y}px - ${elipSize / 2}px)`,
                      }}
                      className="absolute flex items-center justify-center transition-all duration-300"
                    >
                      <div
                        className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
                          isHighlighted
                            ? "bg-[#02989D] scale-110 shadow-[0_0_12px_2px_#02989D60]"
                            : "bg-white border-gray-400"
                        }`}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-3 pl-0 lg:pl-6">
            {specialtiesRight.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="space-y-1 transition-all duration-200 hover:-translate-x-1 hover:text-[#02989D] cursor-pointer"
              >
                <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked list below image */}
        {/* <div className="mt-10 sm:hidden flex flex-col items-center text-center gap-4">
          {[...specialtiesLeft, ...specialtiesRight].map((item, idx) => (
            <div key={idx} className="bg-[#F8F8F8] rounded-md px-5 py-3 w-full max-w-xs shadow-sm">
              <p className="font-semibold text-[#02989D]">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Fifth;

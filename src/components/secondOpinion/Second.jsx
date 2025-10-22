import Benefit from "../../../public/images/secondOpinion/second.png";

import img1 from "../../../public/images/secondOpinion/sec11.png";
import img2 from "../../../public/images/secondOpinion/sec22.png";
import img3 from "../../../public/images/secondOpinion/sec33.png";
import img4 from "../../../public/images/secondOpinion/sec44.png";
import img5 from "../../../public/images/secondOpinion/sec55.png";
import img6 from "../../../public/images/secondOpinion/sec66.png";
import img7 from "../../../public/images/secondOpinion/sec77.png";

const Second = () => {
  const features = [
    {
      icon: img1,
      text: "Confirm Diagnosis: Reduce misdiagnosis risk",
    },
    {
      icon: img2,
      text: "Explore Alternative Treatments: Consider less invasive options",
    },
    {
      icon: img3,
      text: "Improve Health Outcomes: Access expert insights",
    },
    {
      icon: img4,
      text: "Peace of Mind: Reduce uncertainty and anxiety",
    },
    {
      icon: img5,
      text: "Avoid Unnecessary Procedures: Prevent non-essential surgeries",
    },
    {
      icon: img6,
      text: "Access Specialist Expertise: Top doctors across multiple fields",
    },
    {
      icon: img7,
      text: "Make Informed Decisions: Fully understand your condition",
    },
  ];
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto"
      style={{
        width: "100%",
        background:
          "linear-gradient(102.57deg, rgba(255, 255, 255, 0.97) -4.35%, rgba(204, 248, 250, 0.97) 91.29%)",
      }}
    >
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0DB3B8] mb-10">
        Benefits of Getting a Second Opinion
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 items-center">
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group w-full sm:w-[350px] lg:w-[400px] xl:w-[419px] h-auto py-4 flex justify-center items-center rounded-[10px] border border-black bg-white 
                         px-[20px] gap-[15px] transition-all duration-300 hover:bg-[#0DB3B8] hover:border-[#B7E3E5]"
            >
              <img
                src={item.icon}
                alt={`benefit-${index}`}
                className="h-[45px] w-auto object-contain brightness-0 group-hover:invert"
              />
              <p className="text-gray-800 group-hover:text-white">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
          <img
            src={Benefit}
            alt="Clipboard illustration"
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-contain"
          />
        </div>

        <div className="flex flex-col space-y-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 items-center">
          {features.slice(3, 6).map((item, index) => (
            <div
              key={index + 3}
              className="group w-full sm:w-[350px] lg:w-[400px] xl:w-[419px] h-auto py-4 flex justify-center items-center rounded-[10px] border border-black bg-white 
                         px-[20px] gap-[15px] transition-all duration-300 hover:bg-[#0DB3B8] hover:border-[#B7E3E5]"
            >

              <img
                src={item.icon}
                alt={`benefit-${index + 3}`}
                className="h-[45px] w-auto object-contain brightness-0 group-hover:invert"
              />
              <p className="text-gray-800 group-hover:text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div
          className="group w-full sm:w-[350px] lg:w-[400px] xl:w-[419px] h-auto py-4 flex justify-center items-center rounded-[10px] border border-black bg-white 
                     px-[20px] gap-[15px] transition-all duration-300 hover:bg-[#0DB3B8] hover:border-[#B7E3E5]"
        >
          <img
            src={features[6].icon}
            alt="benefit"
            className="h-[45px] w-auto object-contain brightness-0 group-hover:invert"
          />
          <p className="text-gray-800 group-hover:text-white">{features[6].text}</p>
        </div>
      </div>
    </section>
  );
};

export default Second;
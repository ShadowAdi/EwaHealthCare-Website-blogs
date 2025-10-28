import doctor from "../../../public/images/secondOpinion/doctorNew.png";

const First = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Section */}
        <div className="relative w-56 sm:w-64 h-full md:w-72 lg:w-[70%] flex justify-start">
          <img
            src={doctor}
            alt="Doctor illustration"
            className="relative w-full h-64 sm:h-full object-contain max-h-[70vh] z-10"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-6 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#02989D]">
            What is a Medical Second Opinion?
          </h2>

          <div className="flex flex-col text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed gap-3 w-full max-w-md">
            <p className="bg-[#F2F2F2] w-full px-6 py-4 rounded-md flex items-center">
              Another qualified doctor reviews your diagnosis and treatment plan
            </p>

            <p className="bg-[#F2F2F2] w-full px-6 py-4 rounded-md flex items-center md:ml-4">
              Explore alternative treatments
            </p>
            
            <p className="bg-[#F2F2F2] w-full px-6 py-4 rounded-md flex items-center">
              Make informed healthcare decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;

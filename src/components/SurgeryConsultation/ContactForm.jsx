import React, { useState } from "react";
import eight from "../../../public/images/secondOpinion/eight.png";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [concern, setConcern] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, contact, concern, file });
  };
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-12 relative"
      style={{
        width: "100%",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl  shadow-xl  flex flex-col lg:flex-row items-center gap-10"
          style={{
            background:
              "linear-gradient(102.57deg, #1FA2A7 0%, #15A1A6 35%, #008488 70%, #017175 100%)",
          }}
        >
          <div className="w-full lg:w-[70%]   px-4 md:pl-12 md:px-0  py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">
              Get Your Expert Multispeciality Surgery Consultations 
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7]  border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Email/Phone"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Brief Medical Concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-transparent"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4 rounded-xl w-full sm:w-full space-y-2 sm:space-y-0 ">
                <input
                  type="text"
                  placeholder="Brief Medical Concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className=" p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-transparent w-full sm:w-[40%]"
                  required
                />
                <div className="flex w-full sm:w-[60%] items-center  justify-around space-x-0.5  p-2 sm:p-3 px-0 sm:px-0 bg-[#1FA2A7] border border-white placeholder-white text-black rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-transparent">
                  <label
                    htmlFor="file-upload"
                    className="text-white text-sm sm:text-base mb-2 sm:mb-0 "
                  >
                    Upload Medical Records:
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    multiple
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-white  py-1 px-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors text-sm sm:text-base flex space-x-3 "
                  >
                    <img
                      src="/images/secondOpinion/UploadMedIcon.svg"
                      alt="image-upload-icon"
                      className="mr-2"
                    />
                    Choose File
                  </label>
                  {file && (
                    <span className="text-sm text-gray-200 mt-2 sm:mt-0 sm:ml-2">
                      {file.name}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[10px] italic text-white ">
                * Your information is confidential and securely stored.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-white text-[#242424] hover:text-[#181818] px-12 py-3 sm:py-4 rounded-full   transition-colors font-semibold text-lg w-full sm:w-auto"
                >
                  Start Consultation
                </button>
              </div>
            </form>
          </div>

          <div className="w-full  lg:w-[30%] hidden  sm:flex justify-end">
            <img
              src={eight}
              alt="Expert Doctor"
              className="w-3/4 sm:w-2/3 lg:w-full max-w-sm h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

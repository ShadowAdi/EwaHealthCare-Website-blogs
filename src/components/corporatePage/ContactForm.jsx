import React, { useState } from "react";
import eight from "../../../public/images/secondOpinion/eight.png";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [org, setOrg] = useState("");
  const [wellness, setWellness] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, contact, org, wellness });
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
              Get Started with Myewacare Corporate Wellness 
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Email/Phone"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Organization and Size"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4 bg-[#1FA2A7]  rounded-xl  w-full sm:w-full">
                <textarea
                  type="text"
                  placeholder="Wellness Goals / Notes"
                  value={wellness}
                  rows={5}
                  onChange={(e) => setWellness(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

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

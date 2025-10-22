import React, { useState } from 'react'
import eight from '../../../public/images/secondOpinion/eight.png'

const Eighth = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [concern, setConcern] = useState('')
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, contact, concern, file })
  }

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-12 relative"
      style={{
        width: '100%',
        background:
          'linear-gradient(102.57deg, rgba(255, 255, 255, 0.97) -4.35%, rgba(204, 248, 250, 0.97) 91.29%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-cyan-200 bg-[#017175] flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">
              Get Your Expert Second Opinion Today
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
                  placeholder="Brief Medical Concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full p-3 sm:p-4 bg-[#1FA2A7] border border-white placeholder-white text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4 bg-[#1FA2A7] border border-white rounded-xl p-3 sm:p-4 w-full sm:w-fit">
                <label
                  htmlFor="file-upload"
                  className="text-white text-sm sm:text-base mb-2 sm:mb-0"
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
                  className="bg-white border border-cyan-300 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  Choose File
                </label>
                {file && (
                  <span className="text-sm text-gray-200 mt-2 sm:mt-0 sm:ml-2">
                    {file.name}
                  </span>
                )}
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-white text-[#017175] px-8 py-3 sm:py-4 rounded-full hover:bg-cyan-600 hover:text-white transition-colors font-semibold text-lg w-full sm:w-auto"
                >
                  Start Consultation
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={eight}
              alt="Expert Doctor"
              className="w-3/4 sm:w-2/3 lg:w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eighth

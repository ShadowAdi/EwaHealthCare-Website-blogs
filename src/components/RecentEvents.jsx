"use client"

import { useState } from "react"

const RecentEvents = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 6
  const domainName = "https://myewacare.com"

  // Calculate total pages
  const totalPages = Math.ceil(events.length / eventsPerPage)

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentEvents.map((event) => (
          <div
            key={event._id}
            className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={`${domainName}/api/${event.image}`}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02989D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-[#02989D] transition-colors">
                {event.name}
              </h3>
              {event.description && <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex rounded-md shadow-sm bg-white/80 backdrop-blur-sm" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-3 py-2 rounded-l-md text-sm font-medium ${
                currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-[#02989D] hover:bg-[#ebf4f5]"
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                  currentPage === index + 1 ? "z-10 bg-[#02989D]/10 text-[#02989D]" : "text-gray-500 hover:bg-[#ebf4f5]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-3 py-2 rounded-r-md text-sm font-medium ${
                currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-[#02989D] hover:bg-[#ebf4f5]"
              }`}
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default RecentEvents

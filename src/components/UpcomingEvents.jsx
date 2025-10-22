"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

const UpcomingEvents = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 3
  const domainName = "https://myewacare.com"

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Sort events by date (closest first)
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  // Calculate total pages
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage)

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-6">
      {sortedEvents.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No upcoming events at this time</div>
      ) : (
        <>
          {currentEvents.map((event) => (
            <div
              key={event._id}
              className="flex items-start gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-[#ebf4f5]"
            >
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md">
                  <img
                    src={`${domainName}/api/${event.image}`}
                    alt={event.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800 mb-1">{event.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{event.description}</p>
                <div className="flex items-center text-[#02989D]">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{formatDate(event.date)}</span>
                </div>
              </div>

              <div className="hidden md:block">
                <a
                  href="https://wa.me/9686638384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-[#02989D] to-[#02989D]/80 text-white rounded-md hover:from-[#02989D]/90 hover:to-[#02989D] transition-all duration-300 text-sm shadow-sm hover:shadow inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}

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
                      currentPage === index + 1
                        ? "z-10 bg-[#02989D]/10 text-[#02989D]"
                        : "text-gray-500 hover:bg-[#ebf4f5]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-3 py-2 rounded-r-md text-sm font-medium ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-[#02989D] hover:bg-[#ebf4f5]"
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
        </>
      )}
    </div>
  )
}

export default UpcomingEvents

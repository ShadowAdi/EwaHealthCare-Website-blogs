"use client"

import { Suspense, lazy, useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"

// Lazy load components for better performance
const ImageCarousel = lazy(() => import("../components/ImageCarousel"))
const RecentEvents = lazy(() => import("../components/RecentEvents"))
const UpcomingEvents = lazy(() => import("../components/UpcomingEvents"))
const Header = lazy(() => import("../components/Header"))
const Footer = lazy(() => import("../components/Footer"))
const FloatingButtons = lazy(() => import("../components/FloatingButtons"))

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#02989D]"></div>
  </div>
)

// Styled heading component with gradient and typography
const SectionHeading = ({ children }) => (
  <div className="flex flex-col items-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-[#02989D] to-[#02989D]/70 bg-clip-text text-transparent">
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-[#02989D] to-[#02989D]/40 rounded-full"></div>
  </div>
)

const EventPage = () => {
  const [galleryImages, setGalleryImages] = useState([])
  const [recentEvents, setRecentEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch gallery images for carousel
        const galleryResponse = await fetch("https://myewacare.com/api/gallery-image/grid?page=1&rows=20")
        const galleryData = await galleryResponse.json()

        // Fetch recent events data
        const recentEventsResponse = await fetch("https://myewacare.com/api/gallery-image/grid?page=1&rows=20")
        const recentEventsData = await recentEventsResponse.json()

        // Fetch upcoming events data
        const upcomingEventsResponse = await fetch("https://myewacare.com/api/event/grid?page=1&rows=20")
        const upcomingEventsData = await upcomingEventsResponse.json()

        setGalleryImages(galleryData.data.rows.slice(-6))
        setRecentEvents(recentEventsData.data.rows)
        setUpcomingEvents(upcomingEventsData.data.rows)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Helmet>
        <title>Free Health Camps & Wellness Events in India | MyEwaCare</title>
        <meta
          name="description"
          content="Join MyEwaCare’s health events across India—from wellness camps & mental health sessions to diagnostic drives—fostering preventive care and awareness "
        />
        <link rel="canonical" href="https://myewacare.com/events" />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>

      <main className="pt-20">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Featured Gallery Section - Light blue transparent background */}
            <section className="py-12 w-full overflow-hidden bg-gradient-to-b from-white to-[#ebf4f5]">
              <div className="container mx-auto px-4">
                <SectionHeading>Featured Gallery</SectionHeading>
              </div>
              <Suspense fallback={<LoadingSpinner />}>
                <ImageCarousel images={galleryImages} />
              </Suspense>
            </section>

            {/* Recent Events Section - Light teal transparent background */}
            <section className="py-16 bg-[#02989D]/5 backdrop-blur-sm">
              <div className="container mx-auto px-4">
                <SectionHeading>Recent Events</SectionHeading>
                <Suspense fallback={<LoadingSpinner />}>
                  <RecentEvents events={recentEvents} />
                </Suspense>
              </div>
            </section>

            {/* Upcoming Events Section - Light gradient background */}
            <section className="py-16 bg-gradient-to-b from-white to-[#ebf4f5]">
              <div className="container mx-auto px-4">
                <SectionHeading>Upcoming Events</SectionHeading>
                <Suspense fallback={<LoadingSpinner />}>
                  <UpcomingEvents events={upcomingEvents} />
                </Suspense>
              </div>
            </section>
          </>
        )}
      </main>

      <Suspense fallback={<LoadingSpinner />}>
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  )
}

export default EventPage

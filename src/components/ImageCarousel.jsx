"use client"

import { useRef, useEffect } from "react"

const ImageCarousel = ({ images }) => {
  const scrollContainerRef = useRef(null)
  const domainName = "https://myewacare.com"

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const distance = 2 // pixels per frame
    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    const autoScroll = () => {
      scrollAmount += distance

      // Reset when we've scrolled through all images
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0
      }

      scrollContainer.scrollLeft = scrollAmount
    }

    // Set interval for smooth scrolling
    const interval = setInterval(autoScroll, 50)

    // Clean up
    return () => clearInterval(interval)
  }, [images])

  if (!images || images.length === 0) {
    return <div className="text-center py-10">No images available</div>
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-2 md:gap-6 lg:gap-8 anim-scroll overflow-x-auto scrollbar-hide py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate images for infinite loop effect */}
        {images.concat(images).map((image, index) => (
          <div
            key={index}
            className="shrink-0 relative rounded-2xl overflow-hidden shadow-md md:shadow-lg border-4 border-background"
            style={{
              width: "70vw", // Reduced from 90vw to 70vw
              maxWidth: "800px", // Reduced from 1000px to 800px
              height: "40vw", // Reduced from 50vw to 40vw
              maxHeight: "400px", // Reduced from 500px to 400px
            }}
          >
            <img
              alt={`Event image ${index}`}
              fetchpriority="high"
              loading="lazy"
              decoding="async"
              src={`${domainName}/api/${image.image}`}
              className="absolute h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel

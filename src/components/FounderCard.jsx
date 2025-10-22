
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const FounderCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const founders = [
    {
      name: "ARJUN KONETI",
      title: "Founder & Chief Executive Officer",
      image: "/images/AboutUs/ArjunKoneti.jpeg",
      bio: [
           "Arjun Koneti has led My Ewa Care with a vision to transform healthcare.I have spent more than 20 years, in Corporate Insurance, Employee benefits, Health & Wellness sector specially in Group Medical Policy for corporates.",
           " During this tenure i have served more than 400+ corporates & directly involved for wellbeing for more than 5Lakhs Lives. A mission-oriented professional with extensive and impressive experience in Health Insurance Operation and Retention and Business Development Building and motivating winning teams.",
           "He is very passionate about a health wellbeing & spreading healthier lifestyle to society. He understand the value of Preventive healthcare as personally he have lost his close family members due to Cardiac arrest.Holistic healthcare is first priority with easy accessibility & affordability.",
      ]
    },
    {
      name: "Seema Koneti",
      title: "Co-Founder & Director of Operation",
      image: "/images/AboutUs/semafounder.jpg",
      bio: [
           "An BDS Graduate having over 12 years of work experience in Managed Care Service Organization in the area of Client Relations & Operations which with experience in handling verticals such as public & private sectors undertaking, Insurance Companies and Corporate Customers.",
           "Some of my key responsibility areas in my present organization include Business Development, Collecting and processing the data, keeping track record of claim files, MIS reporting and Database Management etc.",
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % founders.length);
        setTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [founders.length]);

  const handleSwipe = (direction) => {
    setTransitioning(true);
    setTimeout(() => {
      if (direction === 'left') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % founders.length);
      } else if (direction === 'right') {
        setActiveIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
      }
      setTransitioning(false);
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-l from-white to-[#C6E7E4] overflow-hidden flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-10 md:mb-16 text-center">
        Meet the Founders
      </h2>

      <div
        {...swipeHandlers}
        className={`bg-[#ebf4f5] p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center shadow-lg transition-opacity duration-300 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        } max-w-6xl w-full`}
      >
        {/* Founder Bio Section */}
        <div className="w-full md:w-2/3 px-4 md:px-6">
          {founders[activeIndex].bio.map((paragraph, index) => (
            <p key={index} className="mb-4 text-base md:text-lg leading-relaxed text-[#79717f]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Founder Image & Details */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:pl-6 mt-6 md:mt-0">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4 overflow-hidden rounded-full">
            <img
              src={founders[activeIndex].image}
              alt={founders[activeIndex].name}
              loading='lazy'
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center text-black">{founders[activeIndex].name}</h3>
          <p className="text-center text-[#512c95] text-sm md:text-base">{founders[activeIndex].title}</p>
        </div>
      </div>

      {/* Dots for Navigation Outside the Card */}
      <div className="flex justify-center gap-3 z-10 mt-6">
        {founders.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-teal-700' : 'bg-gray-300'}`}
            aria-label={`View founder ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FounderCard;




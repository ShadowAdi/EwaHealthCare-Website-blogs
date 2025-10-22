import React, { useState } from 'react';

const TeamMemberCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      name: "Rashmi Rajan",
      title: "Strategic Consultant",
      image: "/images/AboutUs/ourteam1.jpeg",
      bio: [
        "A dynamic strategist with over 10 years in healthcare and 3+ years in the startup ecosystem, Rashmi is the driving force behind Ewa Healthcare's business growth and market expansion.",
        "His expertise spans strategic planning, operations, marketing, and campaign management-all focused on scaling brands and maximizing EBITA growth. With a deep passion for healthcare innovation, he thrives in fast-paced environments, crafting impactful solutions through data- driven execution and strong stakeholder collaboration.",
        "When not strategizing the next big move for Ewa Healthcare, Rashmi enjoys exploring emerging market trends and refining growth-driven frameworks that shape the future of healthcare."
      ]

    },
    {
      name: "Nagaraju.E",
      title: "Clinical Head at Myewacare",
      image: "/images/AboutUs/drnagteam.png",
      bio: [
        "With an MBBS degree and specialized certifications in diabetes, hypertension, obesity, rheumatology, and cardiovascular disease management, he has over 15 years of experience in the medical field.",
        "He has served in renowned hospitals, NGOs, and corporate healthcare programs, contributing significantly to patient care and community health initiatives.",
        "With his vast experience in corporate healthcare, community service, and clinical practice, he remains committed to enhancing healthcare accessibility and patient well-being."
      ]
    }
    ,
    {
      name: "Pradeep Augustus",
      title: "HR Professional",
      image: "/images/AboutUs/PradeepSir.jpg",
      bio: [
        "With over 15 years of experience, Pradeep is an HR expert specializing in driving strategic initiatives, digital transformations, and fostering employee engagement.",
        "Recognized with multiple awards for Excellence in HR and Talent Management, he has a strong track record in optimizing HR operations, reducing attrition, and enhancing employee experience. A passionate speaker and consultant, they continue to drive positive organizational change through innovative HR strategies."
      ]

    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-100 to-[#ebf4f5] overflow-hidden flex flex-col items-center justify-center p-4 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 md:mb-16 text-center">
        Meet Our Team
      </h2>

      <div className="bg-[#f7f9fc] p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center shadow-lg max-w-6xl w-full">
        {/* Team Member Bio Section */}
        <div className="w-full md:w-2/3 px-4 md:px-6">
          {teamMembers[activeIndex].bio.map((paragraph, index) => (
            <p key={index} className="mb-4 text-base md:text-lg leading-relaxed text-[#4a4a4a]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Team Member Image & Details */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:pl-6 mt-6 md:mt-0">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <img
              src={teamMembers[activeIndex].image}
              loading='lazy'
              alt={teamMembers[activeIndex].name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center text-black">{teamMembers[activeIndex].name}</h3>
          <p className="text-center text-[#3b5998] text-sm md:text-base">{teamMembers[activeIndex].title}</p>
        </div>
      </div>

      {/* Dots for Navigation Outside the Card */}
      <div className="flex justify-center gap-3 z-10 mt-6">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-700' : 'bg-gray-300'}`}
            aria-label={`View team member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;

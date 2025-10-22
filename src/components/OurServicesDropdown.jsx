import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { domainName } from '../App';
// import arrowDown from '../assets/images/arrow-down.svg'; // Update with your actual image path
// import chvronRight from '../assets/images/chvron-right.svg'; // Update with your actual image path

function OurServicesDropdown() {
  const chvronRight = "/images/OurService/chvron-right.svg";

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSecondOpinionOpen, setIsSecondOpinionOpen] = useState(false);
  const [isHealthWellnessOpen, setIsHealthWellnessOpen] = useState(false);
  const [isSurgeriesOpen, setIsSurgeriesOpen] = useState(false);
  const [isOurPackagesOpen, setIsOurPackagesOpen] = useState(false);

  // Refs to hold the timeout IDs
  const servicesTimeout = useRef(null);
  const secondOpinionTimeout = useRef(null);
  const healthWellnessTimeout = useRef(null);
  const surgeriesTimeout = useRef(null);
  const OurpackagesTimeout = useRef(null);

  // Delay in milliseconds before closing the dropdown
  const delay = 100;

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setIsOurPackagesOpen(false);
      setIsServicesOpen(false);
      setIsSecondOpinionOpen(false);
      setIsHealthWellnessOpen(false);
      setIsSurgeriesOpen(false);

    }, delay);
  };

  const handleSecondOpinionMouseEnter = () => {
    clearTimeout(secondOpinionTimeout.current);
    setIsSecondOpinionOpen(true);
  };

  const handleSecondOpinionMouseLeave = () => {
    secondOpinionTimeout.current = setTimeout(() => {
      setIsSecondOpinionOpen(false);
    }, delay);
  };

  const handleHealthWellnessMouseEnter = () => {
    clearTimeout(healthWellnessTimeout.current);
    setIsHealthWellnessOpen(true);
  };

  const handleHealthWellnessMouseLeave = () => {
    healthWellnessTimeout.current = setTimeout(() => {
      setIsHealthWellnessOpen(false);
    }, delay);
  };

  const handleSurgeriesMouseEnter = () => {
    clearTimeout(surgeriesTimeout.current);
    setIsSurgeriesOpen(true);
  };

  const handleSurgeriesMouseLeave = () => {
    surgeriesTimeout.current = setTimeout(() => {
      setIsSurgeriesOpen(false);
    }, delay);
  };

  const handleOurPackagesMouseEnter = () => {
    clearTimeout(OurpackagesTimeout.current);
    setIsOurPackagesOpen(true);
  };

  const handleOurPackagesMouseLeave = () => {
    OurpackagesTimeout.current = setTimeout(() => {
      setIsOurPackagesOpen(false);
    }, delay);
  };

  // Function to close dropdowns
  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsOurPackagesOpen(false);
    setIsSecondOpinionOpen(false);
    setIsHealthWellnessOpen(false);
    setIsSurgeriesOpen(false);

  };

  const handleLinkClick = () => {
    closeDropdowns();
  }

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={handleServicesMouseEnter}
      onMouseLeave={handleServicesMouseLeave}
      onClick={handleLinkClick}
    >
      <Link to="/our-services" className="flex justify-around gap-2 relative group  hover:bg-[#F5EEEA] rounded-full text-primary px-2 lg:px-3 py-[-0.5rem] transition-colors duration-200 cursor-pointer items-center">
        Our Services
        <img 
          alt="line-icon" 
          loading="lazy" 
          width="12" 
          height="12" 
          src={`${domainName}/images/OurService/arrow-down.svg`} 
        />
      </Link>
      {isServicesOpen && (
        <div className="absolute left-0 top-full bg-white shadow-lg p-4  z-10 w-72">
          <div className="max-w-4xl mx-auto">
            <div className="flex w-[432px]">
              <div className="w-64 bg-white ">

                {/* <div className="relative " onMouseEnter={handleOurPackagesMouseEnter} onMouseLeave={handleOurPackagesMouseLeave} onClick={handleLinkClick}> */}
                <Link to="/our-services#ourpackages" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer " onMouseEnter={handleOurPackagesMouseEnter} onMouseLeave={handleOurPackagesMouseLeave} onClick={handleLinkClick}>
                    <span className="text-gray-700">Our Packages</span>
                  </Link>
                
                <Link to="/corporate-plans" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer " onMouseEnter={handleOurPackagesMouseEnter} onMouseLeave={handleOurPackagesMouseLeave} onClick={handleLinkClick}>
                    <span className="text-gray-700">Corporate Plans</span>
                  </Link>
                {/* <div/> */}
              
                <Link to="/second-opinion" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer " onMouseEnter={handleOurPackagesMouseEnter} onMouseLeave={handleOurPackagesMouseLeave} onClick={handleLinkClick}>
                    <span className="text-gray-700">Second Opinion</span>
                  </Link>

                <Link to="/surgery-consultation" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer " onMouseEnter={handleOurPackagesMouseEnter} onMouseLeave={handleOurPackagesMouseLeave} onClick={handleLinkClick}>
                    <span className="text-gray-700">Surgery Consultation</span>
                  </Link>

                {/* Health and Wellness Program */}
                <div className="relative" onMouseEnter={handleHealthWellnessMouseEnter} onMouseLeave={handleHealthWellnessMouseLeave} onClick={handleLinkClick}>
                  <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer">
                    <span className="text-gray-700">Health and Wellness</span>
                    <img loading="lazy" width="15" height="15" src={chvronRight} className="w-4 h-4 text-gray-400" />
                  </Link>
                  {isHealthWellnessOpen && (
                    <div className="absolute left-full top-0 mt-1 w-64 bg-white shadow-lg p-3  z-10">
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Fitness and Exercise Programs
                      </Link>
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Nutrition and Diet Services
                      </Link>
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Mental Health and Stress Management
                      </Link>
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Chronic Disease Management
                      </Link>
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Corporate Wellness Programs
                      </Link>
                      <Link to="/our-services#healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onClick={handleLinkClick}>
                        Sleep and Recovery Programs
                      </ Link >
                      < Link to="/our-services #healthAndWellness" className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Preventive Health and Wellness Check-ups
                      </ Link >
                    </ div >
                  )}
                </ div >



                {/* Surgeries */}
                < div className=" relative " onMouseEnter={handleSurgeriesMouseEnter} onMouseLeave={handleSurgeriesMouseLeave} onClick={handleLinkClick} >
                  < Link to="/our-services#surgeries " className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer " >
                    < span className="text-gray-700 " > Surgery </ span >
                    < img loading="lazy " width="15 " height="15 " src={chvronRight} className="w-4 h-4 text-gray-400 " />
                  </ Link >
                  {isSurgeriesOpen && (
                    < div className="absolute left-full top-0 mt-1 w-64 bg-white shadow-lg p-3  z-10 " >
                      < Link to="/our-services#surgeries" className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Cardiac surgery
                      </ Link >
                      < Link to="/our-services#surgeries " className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Cosmetic surgery
                      </ Link >
                      < Link to="/our-services#surgeries" className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Dermatology care
                      </ Link >
                      < Link to="/our-services#surgeries " className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" onclick={handleLinkClick}>
                        Obesity
                      </ Link >
                      < Link to="/our-services#surgeries " className=" flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Spinal
                      </ Link >
                      < Link to="/our-services#surgeries " className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer  text-gray-700" onclick={handleLinkClick}>
                        Oncology treatment
                      </ Link >
                      < Link to="/our-services#surgeries " className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Dental care
                      </ Link >
                      < Link to="/our-services#surgeries " className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " onclick={handleLinkClick}>
                        Orthopedic and joint treatments
                      </ Link >
                      < Link to="/our-services#surgeries " className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700 " on click={handleLinkClick}>
                        Footcare
                      </ Link >
                      < Link to="/our-services#surgeries " className="flex items-center justify-between px-4 py-3 hover:bg-[#F5EEEA] cursor-pointer text-gray-700" on click={handleLinkClick}>
                        Rehabilitation services
                      </ Link >
                    </ div >
                  )}
                </ div >

              </ div > {/* End of inner div */}
            </ div > {/* End of flex container */}
          </ div > {/* End of max-w container */}
        </ div >
      )}
    </ div >

  );

}

export default OurServicesDropdown;

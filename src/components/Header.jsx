
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { domainName } from '../App';

import ContactForm from './ContactForm';
import { phoneNumber } from './FloatingButtons';
import OurServicesDropdown from './OurServicesDropdown'; // Import the new component

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const arrowDown = "/images/OurService/arrow-down.svg";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCloseButton, setAnimateCloseButton] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const updatedNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Our Services', href: '/our-services', component: <OurServicesDropdown />, current: false },
    { name: 'Our Blogs', href: '/blogs', current: false },
    { name: 'Events', href: '/event', current: false },
    { name: 'About Us', href: '/about', current: false },
  ].map((item) => ({
    ...item,
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  }));

  const location = useLocation();
  const [menuState, setMenuState] = useState({
    isMobileServicesOpen: false,
    activeSubmenu: null,
  });

  useEffect(() => {
    updatedNavigation.forEach((item) => {
      item.current = location.pathname === item.href;
    });
    setIsMobileServicesOpen(false);
    setActiveSubmenu(false);
  }, [location.pathname]);

  const handleMobileServiceToggle = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (menuName, sectionId) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // setActiveSubmenu(false);
    // setIsMobileServicesOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Header */}
      <Disclosure as="nav" className="fixed w-full z-[100] top-0 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary focus:outline-none">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
                <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            {/* Logo and Navigation */}
            <div className="flex flex-1 items-center justify-center md:justify-start">
              <Link
                className="flex shrink-0 items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 lg:static lg:left-auto lg:transform-none"
                to="/"
              >
                <img
                  src={`${domainName}/images/ewalogo2.png`}
                  loading='lazy'
                  className="h-14 w-18"
                  alt="My Ewa Care"
                />
              </Link>

              <div className="hidden sm:ml-4 lg:ml-6 lg:block flex items-center justify-center mt-[0.4rem]">
                <div className="flex space-x-2 lg:space-x-4 xl:gap-6 text-sm lg:text-base">
                  {updatedNavigation.map((item) =>
                    item.component ? (
                      <React.Fragment key={item.name}>{item.component}</React.Fragment>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={item.onClick}
                        className={classNames(
                          item.current
                            ? "hover:bg-[#F5EEEA] rounded-full text-primary"
                            : "hover:bg-[#F5EEEA] rounded-full text-primary",
                          "px-2 lg:px-3 py-[-0.5rem] transition-colors duration-200 ml-2"
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center gap-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <Link
                to="/login"
                className={classNames(
                  "hidden lg:inline-flex items-center justify-center",
                  "whitespace-nowrap rounded-full text-sm md:text-base",
                  "transition-all focus-visible:outline-none focus-visible:ring-1",
                  "focus-visible:ring-purple-600 hover:bg-[#F5EEEA]",
                  "font-medium h-10 sm:h-12 px-4 sm:px-5 py-1 sm:py-3",
                  "tracking-[.07em] text-primary"
                )}
              >
                Member Login
              </Link> */}
              {/* <Link
                to="/login"
                className="px-4 py-1 bg-[#02989D] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden"
              >
                Login
              </Link> */}
              <Link
                to={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className="px-3 py-2 bg-[#02989D] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden"
              >
                Consult Now
              </Link>

              <div className="hidden lg:block">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm xl:text-base font-medium border border-[#02989D]/80 bg-gradient-to-r from-[#33c3c8] to-[#02989D] text-white px-4 py-2 sm:px-5 sm:py-3 hover:opacity-90 transition-opacity duration-200"


                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4"
            onClick={() => {
              setAnimateCloseButton(true);
              setTimeout(() => setAnimateCloseButton(false), 500);
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg relative transform transition-all scale-100 sm:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm
                setIsModalOpen={setIsModalOpen}
                animateCloseButton={animateCloseButton}
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <DisclosurePanel
          as={motion.div}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {({ close }) => (
            <div className="fixed inset-x-0 top-0 z-[120] bg-white p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <img
                    src={`${domainName}/images/ewalogo2.png`}
                    loading='lazy'
                    className="h-10 sm:h-12 w-auto"
                    alt="My Ewa Care"
                  />
                  <DisclosureButton className="p-2 rounded-full hover:bg-gray-100">
                    <XMarkIcon className="h-6 w-6" />
                  </DisclosureButton>
                </div>

                <div className="mt-6 flex flex-col space-y-4">
                  {updatedNavigation.map((item) => {
                    if (item.name === 'Our Services') {
                      return (
                        <div key={item.name} className="flex flex-col">
                          <button
                            onClick={handleMobileServiceToggle}
                            className="flex items-center justify-between py-3 text-sm hover:bg-gray-100 rounded-lg px-4 transition-colors"
                          >
                            {item.name}
                            <img
                              src={`${domainName}/images/OurService/arrow-down.svg`}
                              loading='lazy'
                              alt="toggle menu"
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isMobileServicesOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {isMobileServicesOpen && (
                            <div className="ml-4 flex flex-col space-y-2 mt-2">
                              <Link
                                to="/our-services#ourpackages"
                                onClick={() => {
                                  close();
                                  scrollToSection('ourpackages');
                                }}
                                className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                              >
                                Our Packages
                              </Link>

                              <Link
                                to="/corporate-plans"
                                onClick={() => {
                                  close();
                                  scrollToSection('ourpackages');
                                }}
                                className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                              >
                                Corporate Plans
                              </Link>
                              <Link
                                to="/second-opinion"
                                onClick={() => {
                                  close();
                                  scrollToSection('ourpackages');
                                }}
                                className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                              >
                                Second Opnion
                              </Link>
                              <Link
                                to="/surgery-consultation"
                                onClick={() => {
                                  close();
                                  scrollToSection('ourpackages');
                                }}
                                className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                              >
                                Surgery Consultation
                              </Link>

                              {/* Health and Wellness Section */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => handleSubmenuToggle('healthWellness', 'healthAndWellness')}
                                  className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                  <Link
                                    to="/our-services#healthAndWellness"
                                    onClick={() => {
                                      close();
                                      scrollToSection('healthAndWellness');
                                    }}
                                    className="text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                  >
                                    Health and Wellness
                                  </Link>
                                  <img
                                    src={arrowDown}
                                    loading='lazy'
                                    alt="toggle submenu"
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      activeSubmenu === 'healthWellness' ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {activeSubmenu === 'healthWellness' && (
                                  <div className="ml-4 flex flex-col space-y-2 mt-2">
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Fitness and Exercise Programs
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Nutrition and Diet Services
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Mental Health and Stress Management
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Chronic Disease Management
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Corporate Wellness Programs
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Sleep and Recovery Programs
                                    </Link>
                                    <Link
                                      to="/our-services#healthAndWellness"
                                      onClick={() => {
                                        close();
                                        scrollToSection('healthAndWellness');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Preventive Health and Wellness Check-ups
                                    </Link>
                                    {/* Add other Health and Wellness links similarly */}
                                  </div>
                                )}
                              </div>

                              {/* Surgeries Section */}
                              <div className="flex flex-col">
                                <button
                                  onClick={() => handleSubmenuToggle('surgeries', 'surgeries')}
                                  className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                  <Link
                                    to="/our-services#surgeries"
                                    onClick={() => {
                                      close();
                                      scrollToSection('surgeries');
                                    }}
                                    className="text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                  >
                                    Surgery
                                  </Link>
                                  <img
                                    src={arrowDown}
                                    loading='lazy'
                                    alt="toggle submenu"
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      activeSubmenu === 'surgeries' ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {activeSubmenu === 'surgeries' && (
                                  <div className="ml-4 flex flex-col space-y-2 mt-2">
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Cardiac surgery
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Cosmetic surgery
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                     Dermatology care
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Obesity
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Spinal
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Oncology treatment
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Dental care
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Orthopedic and joint treatments
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Footcare
                                    </Link>
                                    <Link
                                      to="/our-services#surgeries"
                                      onClick={() => {
                                        close();
                                        scrollToSection('surgeries');
                                      }}
                                      className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                                    >
                                      Rehabilitation services
                                    </Link>
                                    {/* Add other Surgeries links similarly */}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          
                        </div>
                      );
                    }
                    return (
                      <DisclosureButton
                        as={Link}
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          close();
                          item.onClick?.();
                        }}
                        className="py-3 text-sm hover:bg-gray-100 rounded-lg px-4 transition-colors"
                      >
                        {item.name}
                      </DisclosureButton>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <hr />
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a target="_blank" href="https://apps.apple.com/in/app/myewacare/id6743497584">
                      <img
                        alt="App Store"
                        loading='lazy'
                        src="/images/appstore.svg"
                        className="w-32 sm:w-40 mx-auto"
                      />
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare">
                      <img
                        alt="Play Store"
                        loading='lazy'
                        src="/images/playstore.svg"
                        className="w-32 sm:w-40 mx-auto"
                      />
                    </a>
                  </div>
                  <DisclosureButton
                    as="button"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm xl:text-base font-medium border border-[#02989D]/80 bg-gradient-to-r from-[#33c3c8] to-[#02989D] text-white px-4 py-2 sm:px-5 sm:py-3 hover:opacity-90 transition-opacity duration-200"

                  >
                    Schedule a Demo
                  </DisclosureButton>
                </div>
              </div>
            </div>
          )}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Header;

import { motion } from 'framer-motion';
import React from "react";
import { Link } from 'react-router-dom';
import { domainName } from '../App';
import HeroHeader from './HeroHeader';

const HeroSection = () => {
  const notifications = {
    desktop: [
      { icon: '/images/heroSection/notification/notif-report.svg', top: '55%', left: '0%', delay: 0, id: 1 },
      { icon: '/images/heroSection/notification/notif-mail.svg', top: '60%', left: '0%', delay: 2, id: 2 },
      { icon: '/images/heroSection/notification/notif-policy.svg', top: '70%', left: '0%', delay: 3, id: 3 },
    ],
    tablet: [
      { icon: '/images/heroSection/notification/notif-hospital.svg', bottom: '40%', delay: 0.5 },
      { icon: '/images/heroSection/notification/notif-sleep.svg', bottom: '20%', delay: 1 },
    ],
    mobile: [
      { icon: '/images/heroSection/notification/notif-hospital.svg', bottom: '40%', delay: 0.5 },
      { icon: '/images/heroSection/notification/notif-sleep.svg', bottom: '20%', delay: 1 },
    ],
  };

  const getNotificationText = (icon) => {
    const fileName = icon.split('/').pop();
    const texts = {
      'notif-report.svg': { text1: 'Annual health checkup', text2: 'Report ready to view' },
      'notif-mail.svg': { text1: 'Doctor Consultation Booked', text2: 'MyewaCare Partner Hospital, 2kms away' },
      'notif-policy.svg': { text1: 'Ewa Wellness Goal Achieved', text2: 'Your wellness coach Priya has a message for you.' },
      'notif-hospital.svg': { text1: 'Naturopathy Scheduled', text2: 'our session with Dr. Ramesh is confirmed.' },
      'notif-sleep.svg': { text1: 'Diagnostic Test Report Ready', text2: 'View your health report now.' },
    };
    return texts[fileName] || { text1: '', text2: '' };
  };

  const Notification = ({ icon, text1, text2, ...position }) => (
    <div
      className="flex items-center p-2 md:p-1 gap-2 backdrop-blur-lg bg-background/75 rounded-xl
       border-2 opacity-90 w-fit "
      style={position}
    >
      <div className="rounded-full border border-primary/30 w-6 h-6 md:w-10 md:h-10 flex justify-center items-center bg-background/25">
        <img alt="Notification icon" loading="lazy" src={icon} className='invert' />
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-xs md:text-base whitespace-nowrap">{text1}</p>
        <p className="opacity-70 text-xs md:text-base whitespace-nowrap">{text2}</p>
      </div>
    </div>
  );

  const features = [
    { icon: '/images/heroSection/features/Star.svg', label: 'Second Opinion' },
    { icon: '/images/heroSection/features/Heart.svg', label: 'Health & Wellness' },
    { icon: '/images/heroSection/features/Star.svg', label: 'Surgeries' },
    { icon: '/images/heroSection/features/Heart.svg', label: 'Consultation ' },
    { icon: '/images/heroSection/features/Star.svg', label: 'MyEwacare' },
    { icon: '/images/heroSection/features/Heart.svg', label: '24\\7 available' },
    { icon: '/images/heroSection/features/Star.svg', label: 'Best Doctors' },
    { icon: '/images/heroSection/features/Heart.svg', label: 'Holistic Care' },
    { icon: '/images/heroSection/features/Star.svg', label: 'Diagnostic' },
    { icon: '/images/heroSection/features/Heart.svg', label: 'Reliable Treatment' },
  ];

  const notificationVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.9 },
  };

  return (
    <>
      <HeroHeader />
      <div
        className="relative w-full  flex flex-col md:flex-row justify-center md:gap-10 lg:gap-0 lg:h-[600px] md:h-[500px]"
      >
        {/* Background Gradients */}
        <div className="absolute -bottom-[36%] w-full h-full -z-10">
          <img alt="bg" loading="lazy" className="absolute h-full w-full"
            src={`${domainName}/images/heroSection/gradient-bg-lg-2.svg`} />
        </div>

        {/* Content Container */}
        <div
          className="flex flex-col items-center justify-center 
             w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] 
             mx-auto md:mx-auto lg:mx-0 
             mt-[120px] md:mt-0 
             md:items-start md:gap-6 
             lg:mt-[4rem] md:pl-20"
        >
          <div className="flex flex-col">
            <h1 className="text-lg !leading-[2rem] sm:leading-[1.8rem] 
                          text-center font-semibold sm:text-2xl 
                          md:text-left   2xl:text-[2.3rem] xl:text-[1.75rem] lg:text-[1.46rem]  md:text-[1.3rem]  ">
              <span className="hidden lg:block">
                Trusted Medical Second Opinion Service with<br />
                Expert Second Opinion Doctors for Accurate<br />
                and Effective Treatment Plans
              </span>
              <span className="block lg:hidden">
                Get reliable second opinion medical services and<br />personalized health programs designed to guide your diagnosis. <br />Our expert team offers trusted cancer second opinion consultations<br /> and clear advice from experienced second opinion doctors.<br /> Make confident decisions about surgery, treatment and <br /> care options to live a healthier, balanced life. </span>
            </h1>
            <p className="hidden lg:mt-[20px] sm:mt-0  text-foreground-light text-l text-[#79717f] lg:block    lg:text-[0.95rem]  ">
              Get reliable second opinion medical services and personalized health programs <br />
              designed to guide your diagnosis. Our expert team offers trusted cancer second <br />
              opinion consultations and clear advice from experienced second opinion doctors. <br />
              Make confident decisions about surgery, treatment and care options to live a <br />
              healthier, balanced life.

            </p>
          </div>

          <button
            onClick={() => {
              const userAgent = navigator.userAgent || navigator.vendor || window.opera;

              const isAndroid = /android/i.test(userAgent);
              const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

              if (isAndroid) {
                // Android device
                window.open(
                  "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                  "_blank",
                  "noopener,noreferrer"
                );
              } else if (isIOS) {
                // iOS device
                window.open(
                  "https://apps.apple.com/in/app/myewacare/id6743497584",
                  "_blank",
                  "noopener,noreferrer"
                );
              } else {
                // Desktop browser or unknown platform → open both links
                window.open(
                  "https://apps.apple.com/in/app/myewacare/id6743497584",
                  "_blank",
                  "noopener,noreferrer"
                );
                window.open(
                  "https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare",
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-medium transition-all border border-[#02989D] bg-gradient-to-r from-[#02989D] to-[#02989D] text-white sm:h-12 px-4 sm:px-5 py-3 sm:py-4 hover:opacity-90"
          >
            Get the App
          </button>
        </div>


        {/* Image Section */}
        <div className="flex-[0_0_40%] max-w-[350px] flex justify-center relative xl:h-[500px] 2xl:h-[500px]  xl:mt-20 md:top-[30px]  md:right-[80px]">
          <div className="w-full h-full md:absolute">
            <div className="flex-1 h-full relative">
              <div className="relative h-[320px] md:h-full">
                {/* Image for Desktop & Tablet */}
                <img
                  alt="Vector Overlay"
                  loading="lazy"
                  className="absolute right-[-100px] bottom-20 w-[640px] hidden md:block"
                  src={`${domainName}/images/heroSection/hero_sec_vector-overlay.png`}
                />


                {/* Image for Mobile */}
                <img
                  alt="Doctor Image"
                  loading="lazy"
                  className="absolute -translate-x-[30%] md:translate-x-0 left-10 bottom-0 w-[360px] md:hidden"
                  src={`${domainName}/images/heroSection/doctors1.png`}
                />
              </div>

              {/* Notifications */}
              <div className="absolute bottom-0 h-full w-full">
                <div className="relative h-full">
                  {/* Desktop Notifications */}
                  <div className="hidden lg:block">
                    {notifications.desktop.map((notif, index) => {
                      const { text1, text2 } = getNotificationText(notif.icon);
                      return (
                        <motion.div
                          key={index}
                          className="absolute mx-10 bg-white/60 rounded-lg border-solid"
                          variants={notificationVariants}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: [0, 1, 1, 1, 0],
                            y: [50, 0, 0, -90, -90, -180],
                            transition: {
                              duration: 6,
                              times: [0, 0.2, 0.4, 0.7, 1],
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatType: "loop",
                              delay: notif.delay,
                            },
                          }}
                          style={{
                            top: notif.top,
                            left: notif.left ? `calc(${notif.left} - 150px)` : "-50px",
                            right: notif.right,
                            bottom: notif.bottom,
                          }}
                        >
                          <Notification icon={notif.icon} text1={text1} text2={text2} {...notif} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Tablet Notifications */}
                  <div className="hidden md:block lg:hidden">
                    {notifications.tablet.map((notif, index) => {
                      const { text1, text2 } = getNotificationText(notif.icon);
                      return (
                        <motion.div
                          key={index}
                          className="absolute bg-white/80 right-32 rounded-lg border-solid"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{
                            opacity: [0, 1, 1, 1, 0],
                            y: [50, 0, 0, -90, -90, -180],
                            transition: {
                              duration: 6,
                              times: [0, 0.2, 0.4, 0.7, 0.9, 1],
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatType: "loop",
                              delay: notif.delay,
                            },
                          }}
                          style={{ bottom: notif.bottom }}
                        >
                          <Notification icon={notif.icon} text1={text1} text2={text2} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile Notifications */}
                  <div className="block md:hidden">
                    {notifications.mobile.map((notif, index) => {
                      const { text1, text2 } = getNotificationText(notif.icon);
                      return (
                        <motion.div
                          key={index}
                          className="absolute bg-white/90 rounded-lg border border-solid 
                            left-[200px] sm:left-[400px] md:left-[400px]"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{
                            opacity: [0, 1, 1, 1, 0],
                            y: [50, 0, 0, -80, -90, -180],
                            transition: {
                              duration: 6,
                              times: [0, 0.2, 0.4, 0.7, 0.9, 1],
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatType: "loop",
                              delay: notif.delay,
                            },
                          }}
                          style={{ bottom: notif.bottom }}
                        >
                          <Notification icon={notif.icon} text1={text1} text2={text2} />
                        </motion.div>
                      );
                    })}
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Features */}
        <div className="absolute w-full bottom-0 bg-[#9bd3d6]/5">
          <div className="overflow-x-hidden relative">
            <div className="absolute inset-0 bg-[#9bd3d6]/50  z-10"></div>
            <div className="h-8 md:h-12 flex gap-4 md:gap-14 items-center anim-scroll relative z-10">
              {[...features, ...features].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-14 shrink-0">
                  <img alt="feature" loading='lazy' className="w-4 h-4 md:w-8 md:h-8" src={feature.icon} />
                  <p className="text-white md:text-xl md:font-semibold">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;




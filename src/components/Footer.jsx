import React from 'react';
import { Link } from 'react-router-dom';
import { domainName } from '../App';
import { phoneNumber } from './FloatingButtons';

const Footer = () => {
  return (
    <footer className="bg-[#99E3E5] py-4">
      <div className="mx-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Left Section - Reordered for mobile */}
        <div className="flex flex-col gap-8 mx-4">
          {/* Mobile: App Stores first */}
          <div className="md:hidden flex flex-col items-center gap-4">

            <div className="flex flex-row gap-4">
              <a href="https://apps.apple.com/in/app/myewacare/id6743497584" target="_blank" rel="noopener noreferrer">
                <img src="/images/appstore.svg" loading='lazy' alt="App Store" className="w-36" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare" target="_blank" rel="noopener noreferrer">
                <img src="/images/playstore.svg" loading='lazy' alt="Google Play Store" className="w-36" />
              </a>
            </div>
          </div>

          <img
            alt="Ewa Health logo"
            loading="lazy"
            width="120"
            height="70"
            className='bg-[#99E3E5]'
            decoding="async"
            src="/images/ewalogo2.png"
          />

          <div className="flex flex-col md:flex-row gap-8 text-[#1E1028] text-md">
            <Link to="/our-services">Our Services</Link>
            {/* <Link to="/embedded-plans">Embedded Plans</Link> */}
            <Link to="/blogs">Our Blogs</Link>
            <Link to="/about">About Us</Link>
            <Link to={`https://wa.me/${phoneNumber}`} target="_blank">Contact Us</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex justify-center md:justify-start gap-6">
              <Link to="https://in.linkedin.com/company/ewahealthcare " target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-[#1E1028] text-3xl"></i>
              </Link>
              <Link to="https://www.instagram.com/myewa.care/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-[#1E1028] text-3xl"></i>
              </Link>
              <Link to="https://www.youtube.com/@myewacare" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-[#1E1028] text-3xl"></i>
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100088916353349&sk=about" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-[#1E1028] text-3xl"></i>
              </Link>
            </div>
            <div className="text-[#1E1028] text-lg opacity-50">
              <p>Ewa Healthcare Solutions Private Limited | CIN : U85100KA2022PTC161065</p><br />

            </div>

            <div className='flex flex-row gap-2 justify-center -mt-10 md:justify-start md:items-start'>
              <div className="text-[#1E1028] text-base md:text-lg font-bold mt-5 md:mt-4">
                <p>ISO Certified</p>
              </div>
              <div className="">
                <img alt="ISO Certified" loading="lazy" className="w-16 h-[10]"
                  src={`${domainName}/images/ISO1.jpg`} />
              </div>
            </div>

          </div>
        </div>

        {/* Right Section - Hidden on mobile */}
        <div className="hidden md:flex flex-col items-end text-right gap-4 pr-5">

          <a
            href="https://apps.apple.com/in/app/myewacare/id6743497584"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/appstore.svg"
              loading="lazy"
              alt="App Store"
              className="w-36"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.nitianbit.MyEwaCare"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/playstore.svg"
              loading="lazy"
              alt="Google Play Store"
              className="w-36"
            />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

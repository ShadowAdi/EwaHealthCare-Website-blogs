import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const phoneNumber = "9686638384";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp & Call Buttons - Middle Right */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <Link
          to={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp size={30} />
        </Link>

        {/* Call Button */}
        <Link
          to={`tel:${phoneNumber}`}
          // to="/"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <FaPhoneAlt size={30} />
        </Link>
      </div>

      
    </>
  );
};

export default FloatingButtons;

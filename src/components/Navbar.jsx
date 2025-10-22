import React from "react";
import { domainName } from "../App";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar with Toll-Free Number */}
      <div
        className="flex flex-row justify-center p-[6px] fixed top-0 left-0 right-0 z-1000"
        style={{
          backgroundColor: "rgba(166, 101, 210, 0.1)", // Using rgba for background opacity
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center gap-2"
          href="tel:18002704620"
        >
          <img
            alt="Call"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            src={`${domainName}/images/phone.svg`}
          />
          <p className="text-xs md:text-sm font-medium">
            <span
              style={{
                // fontFamily: "__Poppins_2dbf9b, __Poppins_Fallback_2dbf9b",
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "start",
                letterSpacing: "normal",
                color: "#1e1028", // Text color remains solid
                opacity: 0.7,
              }}
            >
              24x7 Toll-Free
            </span>{" "}
            <span style={{ color: "#1e1028", fontSize: "14px", }}>18002704620</span> {/* Text remains solid */}
          </p>
        </a>
      </div>
    </>
  );
};

export default Navbar;

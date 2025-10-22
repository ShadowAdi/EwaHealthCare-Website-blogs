
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { domainName } from "../App";


const screenshots = [
  "screenshot1.jpg",
  "screenshot2.jpg",
  "screenshot3.jpg",
  "screenshot4.jpg",
  "screenshot5.jpg",
  "screenshot6.jpg",
  "screenshot7.jpg",
  "screenshot8.jpg",
  "screenshot9.jpg",
  "screenshot10.jpg",
];

const ScreenshotGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // ✅ Desktop ke liye 3 images
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    centerMode: true, // ✅ Center wali image ko highlight karne ke liye
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Large Screens (3 images)
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Normal Screens (3 images)
      { breakpoint: 768, settings: { slidesToShow: 3 } },  // Tablets (2 images)
      { breakpoint: 480, settings: { slidesToShow: 1 } }   // Mobile (1 image)
    ]
  };

  return (
    <div className="bg-[#02989D]/10 p-4 md:p-6 mt-[6rem]">
      
      <Slider {...settings}>
        {screenshots.map((img, index) => (
          <div key={index} className="p-1 ">
           <div style={{ padding: "70px 50px" }}>
        <img
          src={`${domainName}/images/photo/${img}`}
          loading="lazy" 
          alt={`Screenshot ${index + 1}`}
          className="w-[60%] mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out slick-img"
        />
      </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScreenshotGallery;
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { phoneNumber } from './FloatingButtons';

const HealthCard = ({ title, image, points, price, discounted }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");
  
    useEffect(() => {
      setMaxHeight(isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [isOpen]);
  
    return (
      <div className="flex flex-grow h-full transition-all duration-300">
        <div
          className="flex flex-col border border-slate-900 p-4 bg-white rounded-xl shadow-md w-full transition-all duration-300"
          style={{
            minHeight: isOpen ? "auto" : "30rem",
          }}
        >
          {/* Image */}
          <div className="text-center">
            <img src={image} loading='lazy' className="img-fluid max-w-full object-cover mx-auto" alt={title} />
          </div>
  
          {/* Title */}
          <div className="text-center mt-4 mb-4 text-gray-700 font-bold text-xl">{title}</div>
  
          {/* Accordion Trigger */}
          <button
            className="flex items-center w-full cursor-pointer mt-2 focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <div className="flex-grow border-t border-gray-300"></div>
            <div className={`ml-2 transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
              ▼
            </div>
          </button>
  
          {/* Expandable Content */}
          <div ref={contentRef} className="transition-all duration-300 overflow-hidden" style={{ maxHeight }}>
            <ul className="list-disc list-inside text-gray-600 font-semibold text-base space-y-1 px-4 py-2">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
  
          {/* Pricing - This appears directly below the expanded content */}
          <div className="flex flex-row gap-2 text-center justify-start mt-4">
            <div className="text-2xl font-semibold">{discounted}</div>
            <div className="text-xl font-semibold line-through text-gray-600">{price}</div>
          </div>
  
          {/* Push Buy Button to Bottom */}
          <div className="mt-14 mb-2">
            <div className="text-center pb-1">
              <Link
                type="button"
                target="_blank"
                className="mt-6 btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:opacity-80 transition-opacity duration-200"
                to={`https://wa.me/${phoneNumber}`}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

const HealthCardSlider = ({ cards }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                }
            }
        ]
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            if (direction === "left") {
                sliderRef.current.slickPrev();
            } else {
                sliderRef.current.slickNext();
            }
        }
    };

    return (
        <div className=" flex flex-col gap-8">
            <div className="px-6 md:px-16 flex justify-end items-center mr-0">
               
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-14 md:!w-20"
                    >
                        <span className="rotate-0">
                            <img
                                alt="left"
                                loading="lazy"
                                width="32"
                                height="32"
                                className="w-5 h-5 md:w-8 md:h-8"
                                src="/images/chevron-left.png"
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm md:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !p-0 rounded-full hover:bg-accent/5 hover:text-accent-foreground border-input border bg-background h-10 sm:h-12 px-4 sm:px-5 py-3 sm:py-4 w-14 md:!w-20"
                    >
                        <span className="rotate-180">
                            <img
                                alt="right"
                                loading="lazy"
                                width="32"
                                height="32"
                                className="w-5 h-5 md:w-8 md:h-8"
                                src="/images/chevron-left.png"
                            />
                        </span>
                    </button>
                </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-2 h-full mb-2"> {/* Add padding here */}
                        <HealthCard {...card} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HealthCardSlider;


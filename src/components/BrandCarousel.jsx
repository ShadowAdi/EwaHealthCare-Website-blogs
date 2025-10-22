import React from "react";
import { domainName } from '../App';

export default function BrandCarousel() {
  const partnerLogos = [
    `${domainName}/images/hospital_logo/aarthi.jpg`,
    `${domainName}/images/hospital_logo/Apollo Hospital.png`,
    `${domainName}/images/hospital_logo/curemax.png`,
    `${domainName}/images/hospital_logo/redCliffe.png`,
    `${domainName}/images/hospital_logo/NeoTrueNorthHospital.png`,
    `${domainName}/images/hospital_logo/Fortis.png`,
    `${domainName}/images/hospital_logo/healthians.png`,
    `${domainName}/images/hospital_logo/lupin.png`,
    `${domainName}/images/hospital_logo/Nueclear.png`,
    `${domainName}/images/hospital_logo/orange.png`,
    `${domainName}/images/hospital_logo/Rainbow.png`,
    `${domainName}/images/hospital_logo/SagarHopital.png`,
    `${domainName}/images/hospital_logo/Sparsh.jpg`,
    `${domainName}/images/hospital_logo/specilist.png`,
    `${domainName}/images/hospital_logo/trustin.png`,
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-10 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-center py-6 text-[#02989D]">
        Partnered With Brands of Repute
      </h2>
      
      {/* Continuous Sliding Logos */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-white py-5 relative">
        <div
          className="overflow-x-hidden"
          style={{
            mask: "linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)",
          }}
        >
          <div className="flex gap-4 md:gap-8 items-center flex-nowrap animate-marquee">
            {[...partnerLogos, ...partnerLogos].map((src, index) => (
            <div className="flex-shrink-0 w-32 md:w-40 flex justify-center" key={index}>
              <img
                alt={`Brand ${index + 1}`}
                loading="lazy"
                className="h-10 md:h-12 object-contain"
                srcSet={`${src}?w=128&q=75 1x, ${src}?w=256&q=75 2x`}
                src={`${src}?w=256&q=75`}
              />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation for Marquee */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 10s linear infinite;
            width: max-content;

          }
        `}
      </style>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { phoneNumber } from './FloatingButtons';

const HealthCard = ({ title, image, points, price }) => {
  return (
    <div className="flex">

     
        <div className="flex flex-col h-full border border-slate-900 p-3 bg-white rounded-xl shadow-md">
          
          <div className="text-center">
            <img src={image} loading='lazy' className="img-fluid w-auto object-cover mx-auto" alt={title} />
          </div>
          
          <div className="text-center mt-4 mb-4 text-gray-700 font-bold text-xl">
            {title}
          </div>
          
          <div className="flex-grow overflow-hidden">
            <ul className="list-disc list-inside text-gray-600 font-semibold text-base space-y-1">
              {points.map((point, index) => (
                <li key={index} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        
          <div className="my-3 text-center text-xl font-semibold">{price}</div>
          <div className="text-center mb-4">
            <Link
              type="button"
              target='_blank'
              className="mt-6 text-center btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:opacity-80 transition-opacity duration-200"
              to={`https://wa.me/${phoneNumber}`}
            >
              Buy Now
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default HealthCard;

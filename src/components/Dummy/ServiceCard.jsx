// src/components/ServiceCard.jsx

import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt={`${title} icon`} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

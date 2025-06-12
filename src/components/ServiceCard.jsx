import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { darkIstrue } = use(ServiceContext);
  const {
    serviceName,
    imageUrl,
    description,
    price,
    provider,
    serviceArea,
    _id
  } = service;

  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4 transition duration-300 ${
        darkIstrue ? "bg-gray-700 text-gray-100 border border-gray-500" : "bg-gray-100 border border-gray-300 text-gray-900"
      }`}
    >
      {/* Service Image */}
      <img
        src={imageUrl}
        alt={serviceName}
        className="w-full md:w-40 h-40 object-cover rounded-md"
      />

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Service Name & Area */}
          <div className="flex gap-4 items-center">
            
            <h3 className="text-xl font-semibold">{serviceName}</h3>
            <p
              className={`text-sm font-medium ${
                darkIstrue ? "text-gray-300" : "text-gray-600"
              }`}
            >
              ({serviceArea})
            </p>
          </div>

          {/* Description */}
          <p className={`mt-1 text-sm ${
            darkIstrue ? "text-gray-300" : "text-gray-700"
          }`}>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center">
          {/* Provider */}
          <div className="flex items-center gap-2">
            <img
              src={provider.photoUrl}
              alt={provider.name}
              className="w-8 h-8 rounded-full"
            />
            <span
              className={`text-sm ${
                darkIstrue ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {provider.name}
            </span>
          </div>

          {/* Price & Button */}
          <div className="text-right">
            <p
              className={`font-bold ${
                darkIstrue ? "text-green-400" : "text-green-600"
              }`}
            >
              ৳ {price}
            </p>
           <Link to={`/dashboard/service-details/${_id}`}>
            <button
              className={`mt-1 px-3 py-1 text-sm rounded transition duration-200 ${
                darkIstrue
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              View Detail
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

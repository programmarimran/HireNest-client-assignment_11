import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import { Link } from "react-router"; // fixed: was "react-router"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // fixed: was "motion/react"

const ServiceCard = ({ service }) => {
  const { darkIstrue } = use(ServiceContext);
  const {
    serviceName,
    imageUrl,
    description,
    price,
  
    serviceArea,
    _id,
  } = service;

  return (
    <div
      data-aos="fade-up"
      className={`rounded-xl shadow-sm border p-4 flex flex-col justify-between h-full transition duration-300 ${
        darkIstrue
          ? "bg-gray-800 border-gray-600 text-gray-100"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={serviceName}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <div className="mb-2">
        <div className=" flex items-center justify-between">
          <h3 className="text-lg font-semibold">{serviceName}</h3>
          <p className="font-bold text-green-600 dark:text-green-400">
            ৳ {price}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Area: <span className="font-medium">{serviceArea}</span>
        </p>
      </div>

      {/* Description */}
      <p className="text-sm mb-3">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>

      {/* Footer */}
      <div className="flex items-center flex-col justify-between mt-auto pt-2 border-t border-gray-300 dark:border-gray-600">
        {/* Price & Button */}
        <div className="w-full mt-2">
          <Link to={`/dashboard/service-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-1 w-full px-3 py-2 text-sm rounded bg-blue-600 hover:bg-blue-500 text-white"
            >
              View Detail
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

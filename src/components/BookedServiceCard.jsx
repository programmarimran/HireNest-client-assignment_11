import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import { Link } from "react-router";
import { FaX } from "react-icons/fa6";

const BookedServiceCard = ({ service }) => {
  const { darkIstrue } = use(ServiceContext);
  const {
    serviceId,
    serviceName,
    imageUrl,
    specialInstruction,
    price,
    providerName,
    serviceStatus,
    serviceArea,
    _id,
    takingDate,
    userName,
  } = service;

  return (
   <div className=" relative">
     <div
      className={` rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4 transition duration-300 ${
        darkIstrue
          ? "bg-gray-800 text-gray-100 border border-gray-500"
          : "bg-gray-100 border border-gray-300 text-gray-900"
      }`}
    >
      <div>
        {/* Service Image */}
      <img
        src={imageUrl}
        alt={serviceName}
        className="w-full md:w-40 h-40 object-cover rounded-md"
      />
      {/* Provider Name */}
          <div className="text-sm">
            Provided by:{" "}
            <span
              className={`font-medium ${
                darkIstrue ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {providerName}
            </span>
          </div>
      </div>

      <button className=" btn absolute top-4 right-4"><FaX></FaX></button>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div className=" flex flex-col justify-between">
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

          {/* Special Instruction */}
          {specialInstruction && (
            <p
              className={`mt-1 text-sm ${
                darkIstrue ? "text-yellow-200" : "text-yellow-700"
              }`}
            >
              📌 Instruction: {specialInstruction}
            </p>
          )}

          {/* Taking Date and Status */}
          <p className="mt-1 text-sm">
            📅 Taking Date:{" "}
            <span
              className={`font-medium ${
                darkIstrue ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {takingDate}
            </span>
          </p>
          <p className="mt-1 text-sm">
            🟠 Status:{" "}
            <span
              className={`font-semibold capitalize ${
                serviceStatus === "pending"
                  ? darkIstrue
                    ? "text-orange-300"
                    : "text-orange-600"
                  : "text-green-500"
              }`}
            >
              {serviceStatus}
            </span>
          </p>

          {/* User Name */}
          <p className="mt-1 text-sm italic">
            Booked by:{" "}
            <span
              className={`font-medium ${
                darkIstrue ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {userName}
            </span>
          </p>
          
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center">
          <div></div>
          {/* Price & Button */}
          <div className="text-right">
            <p
              className={`font-bold ${
                darkIstrue ? "text-green-400" : "text-green-600"
              }`}
            >
              ৳ {price}
            </p>
            <Link to={`/dashboard/service-details/${serviceId}`}>
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
   </div>
  );
};

export default BookedServiceCard;

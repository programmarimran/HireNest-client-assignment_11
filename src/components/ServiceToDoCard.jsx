import React, { use} from "react";
import ServiceContext from "../contexts/ServiceContext";
import { FaX } from "react-icons/fa6";


const ServiceToDoCard = ({ service,handleServiceStatus }) => {
  const { darkIstrue } = use(ServiceContext);
  const {
    serviceName,
    imageUrl,
    specialInstruction,
    providerName,
    serviceStatus,
    serviceArea,
    _id,
    takingDate,
    userName,
  } = service;

  return (
    <div
      className={`relative rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4 transition duration-300 ${
        darkIstrue
          ? "bg-gray-700 text-gray-100 border border-gray-500"
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
        <div className="text-sm my-2">
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

      {/* Delete Button */}
      <button className="btn absolute top-4 right-4">
        <FaX size={20} />
      </button>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col justify-between">
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
            <>
              <hr
                className={`text-sm mt-6 mb-4 border border-dashed ${
                  darkIstrue ? "border-gray-300" : "border-gray-600"
                }`}
              />
              <p
                className={`mt-1 text-sm  ${
                  darkIstrue ? "text-yellow-200" : "text-yellow-700"
                }`}
              >
                📌 <span className=" text-lg font-bold">Instruction:</span>{" "}
                {specialInstruction}
              </p>
              <hr
                className={`text-sm my-4 border border-dashed ${
                  darkIstrue ? "border-gray-300" : "border-gray-600"
                }`}
              />
            </>
          )}

          {/* Taking Date */}
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

          {/* Status Dropdown */}
          <div className="mt-2">
            🟠 Status:{" "}
            <select
              defaultValue={serviceStatus}
              onChange={(e) => handleServiceStatus(e.target.value,_id)}
              className={`ml-2 px-2 py-1 rounded ${
                darkIstrue
                  ? "bg-gray-600 text-gray-100 border border-gray-400"
                  : "bg-white border border-gray-300 text-gray-900"
              }`}
            >
              <option value="pending">Pending</option>
              <option value="working">Working</option>
              <option value="completed">Completed</option>
            </select>
          </div>

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

        {/* Optional Footer with price or extra buttons */}
        <div className="mt-4 flex justify-between items-center">
          {/* You can show price or other actions here */}
        </div>
      </div>
    </div>
  );
};

export default ServiceToDoCard;

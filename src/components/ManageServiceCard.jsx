import React, { useContext } from "react";
import ServiceContext from "../contexts/ServiceContext";

const ManageServiceCard = ({ service }) => {
  const { darkIstrue } = useContext(ServiceContext);

  const {
    _id,
    serviceName,
    imageUrl,
    price,
    serviceArea,
    description,
  } = service;

  const cardBg = darkIstrue ? "bg-gray-600 text-white" : "bg-white text-gray-800";
  const textMuted = darkIstrue ? "text-gray-300" : "text-gray-600";
  const borderColor = darkIstrue ? "border-gray-700" : "border-gray-200";
  const areaColor = "text-blue-400";
  const priceColor = "text-green-400";

  return (
    <div className={`card shadow-md rounded-lg border p-4 ${cardBg} ${borderColor}`}>
      <img
        src={imageUrl}
        alt={serviceName}
        className="h-48 w-full object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{serviceName}</h2>
        <p className={`mt-1 ${textMuted}`}>{description}</p>
        <p className={`mt-2 text-sm ${areaColor}`}>
          <strong>Area:</strong> {serviceArea}
        </p>
        <p className={`text-sm ${priceColor}`}>
          <strong>Price:</strong> ${price}
        </p>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          className={`px-4 py-2 rounded transition ${
            darkIstrue
              ? "bg-blue-600 hover:bg-blue-500"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Edit
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            darkIstrue
              ? "bg-red-600 hover:bg-red-500"
              : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageServiceCard;

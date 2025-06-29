import React, { useContext, useEffect } from "react";
import ServiceContext from "../contexts/ServiceContext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEdit } from "react-icons/fa";
const ManageServiceCard = ({ service, handleDelete }) => {
  const { darkIstrue, setEditServiceId } = useContext(ServiceContext);

  const { _id, serviceName, imageUrl, price, serviceArea, description } =
    service;

  const handleEditButton = (id) => {
    setEditServiceId(id);
    document.getElementById("modal_edit").showModal();
  };

  const cardBg = darkIstrue
    ? "bg-gray-600 text-white"
    : "bg-white text-gray-800";
  const textMuted = darkIstrue ? "text-gray-300" : "text-gray-600";
  const borderColor = darkIstrue ? "border-gray-700" : "border-gray-200";
  const areaColor = "text-blue-400";
  const priceColor = "text-green-400";
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-up-right"
      className={`card flex flex-col justify-between shadow-md  rounded-lg border p-4 ${cardBg} ${borderColor}`}
    >
      <div>
        <div
          className={` shadow border rounded-lg ${
            darkIstrue ? "border-gray-500" : "border-gray-200"
          }`}
        >
          <img
            src={imageUrl}
            alt={serviceName}
            className="h-48 w-full object-cover rounded-md"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center my-2">
          {serviceName}
        </h2>
        <p className={`mt-1 break-words ${textMuted}`}>{description}</p>
      </div>
      <div>
        <div className="mt-4">
          <p className={`mt-2 text-2xl ${areaColor}`}>
            <strong>Area:</strong> {serviceArea}
          </p>
          <p className={`text-xl ${priceColor}`}>
            <strong>Price:</strong> ${price}
          </p>
        </div>
        <div className="mt-4 flex justify-between gap-3">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            onClick={() => handleEditButton(_id)}
           
          >
            <FaEdit className={`${darkIstrue?"text-green-600":"text-blue-600"}`} size={40} />
          </button>
          <button
            onClick={() => handleDelete(_id)}
          
          >
            <RiDeleteBin5Fill className=" text-red-500" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;

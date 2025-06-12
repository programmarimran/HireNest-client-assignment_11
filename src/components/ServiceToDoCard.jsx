import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import { FaX } from "react-icons/fa6";

const ServiceToDoCard = ({ service, handleServiceStatus, handleDelete }) => {
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
    // <div
    //   className={`relative rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4 transition duration-300 ${
    //     darkIstrue
    //       ? "bg-gray-700 text-gray-100 border border-gray-500"
    //       : "bg-gray-100 border border-gray-300 text-gray-900"
    //   }`}
    // >
    //   <div>
    //     {/* Service Image */}
    //     <img
    //       src={imageUrl}
    //       alt={serviceName}
    //       className="w-full md:w-40 h-40 object-cover rounded-md"
    //     />
    //     {/* Provider Name */}
    //     <div className="text-sm my-2">
    //       Provided by:{" "}
    //       <span
    //         className={`font-medium ${
    //           darkIstrue ? "text-gray-300" : "text-gray-800"
    //         }`}
    //       >
    //         {providerName}
    //       </span>
    //     </div>
    //   </div>

    //   {/* Delete Button */}
    //   <button
    //     onClick={() => handleDelete(_id)}
    //     className="btn absolute top-4 right-4"
    //   >
    //     <FaX size={20} />
    //   </button>

    //   {/* Info */}
    //   <div className="flex flex-col justify-between flex-1">
    //     {/* Service Name & Area */}
    //     <div className="flex gap-4 items-center">
    //       <h3 className="text-xl font-semibold">{serviceName}</h3>
    //       <p
    //         className={`text-sm font-medium ${
    //           darkIstrue ? "text-gray-300" : "text-gray-600"
    //         }`}
    //       >
    //         ({serviceArea})
    //       </p>
    //     </div>

    //     {/* Special Instruction */}
    //     <div>
    //       {specialInstruction && (
    //         <div>
    //           <hr
    //             className={`text-sm mt-6 mb-4 border border-dashed ${
    //               darkIstrue ? "border-gray-300" : "border-gray-600"
    //             }`}
    //           />
    //           <p
    //             className={`mt-1 text-sm  ${
    //               darkIstrue ? "text-yellow-200" : "text-yellow-700"
    //             }`}
    //           >
    //             📌 <span className=" text-lg font-bold">Instruction:</span>{" "}
    //             {specialInstruction}
    //           </p>
    //           <hr
    //             className={`text-sm my-4 border border-dashed ${
    //               darkIstrue ? "border-gray-300" : "border-gray-600"
    //             }`}
    //           />
    //         </div>
    //       )}
    //     </div>
    //     {/* Taking Date */}
    //     <div>
    //       <p className="mt-1 text-sm">
    //         📅 Taking Date:{" "}
    //         <span
    //           className={`font-medium ${
    //             darkIstrue ? "text-blue-300" : "text-blue-600"
    //           }`}
    //         >
    //           {takingDate}
    //         </span>
    //       </p>

    //       {/* Status Dropdown */}
    //       <div className="mt-2">
    //         🟠 Status:{" "}
    //         <select
    //           defaultValue={serviceStatus}
    //           onChange={(e) => handleServiceStatus(e.target.value, _id)}
    //           className={`ml-2 px-2 py-1 rounded ${
    //             darkIstrue
    //               ? "bg-gray-600 text-gray-100 border border-gray-400"
    //               : "bg-white border border-gray-300 text-gray-900"
    //           }`}
    //         >
    //           <option value="pending">Pending</option>
    //           <option value="working">Working</option>
    //           <option value="completed">Completed</option>
    //         </select>
    //       </div>

    //       {/* User Name */}
    //       <p className="mt-1 text-sm italic">
    //         Booked by:{" "}
    //         <span
    //           className={`font-medium ${
    //             darkIstrue ? "text-gray-200" : "text-gray-800"
    //           }`}
    //         >
    //           {userName}
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div
      className={`relative rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4 transition duration-300 ${
        darkIstrue
          ? "bg-gray-700 text-gray-100 border border-gray-500"
          : "bg-gray-100 border border-gray-300 text-gray-900"
      }`}
    >
      {/* Image and Provider Info */}
      <div className="md:w-40 flex-shrink-0">
        <img
          src={imageUrl}
          alt={serviceName}
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-sm mt-2">
          Provided by:{" "}
          <span
            className={`font-medium ${
              darkIstrue ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {providerName}
          </span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Top Row: Name & Area + Delete Button */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{serviceName}</h3>
            <p
              className={`text-sm font-medium ${
                darkIstrue ? "text-gray-300" : "text-gray-600"
              }`}
            >
              ({serviceArea})
            </p>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn p-2"
            title="Delete"
          >
            <FaX size={18} />
          </button>
        </div>

        {/* Special Instruction */}
     
          <div className="my-4">
            <hr
              className={`border-dashed ${
                darkIstrue ? "border-gray-400" : "border-gray-500"
              }`}
            />
            <p
              className={`mt-2 text-sm ${
                darkIstrue ? "text-yellow-200" : "text-yellow-700"
              }`}
            >
              📌 <span className="font-bold text-base">Instruction:</span>{" "}
              {specialInstruction?specialInstruction:"Instruction null"}
            </p>
            <hr
              className={`mt-4 border-dashed ${
                darkIstrue ? "border-gray-400" : "border-gray-500"
              }`}
            />
          </div>
       

        {/* Bottom Details */}
        <div className="space-y-2 mt-2">
          <p className="text-sm">
            📅 Taking Date:{" "}
            <span
              className={`font-medium ${
                darkIstrue ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {takingDate}
            </span>
          </p>

          <div className="text-sm">
            🟠 Status:
            <select
              defaultValue={serviceStatus}
              onChange={(e) => handleServiceStatus(e.target.value, _id)}
              className={`ml-2 px-2 py-1 rounded text-sm ${
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

          <p className="text-sm italic">
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
      </div>
    </div>
  );
};

export default ServiceToDoCard;

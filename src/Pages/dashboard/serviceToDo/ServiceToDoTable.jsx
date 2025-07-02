import React from "react";
import { FaX } from "react-icons/fa6";

const ServiceToDoTable = ({ provideBookedServices, handleDelete, handleServiceStatus }) => {
  return (
    <div className="overflow-x-auto shadow rounded-xl mt-6">
      <table className="table table-zebra">
        <thead className="bg-base-200 dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Area</th>
            <th>Instruction</th>
            <th>Date</th>
            <th>Status</th>
            <th>Booked By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900 dark:text-gray-100">
          {provideBookedServices?.map((service, index) => (
            <tr key={service._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td>{index + 1}</td>

              {/* Service Name + Image */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={service.imageUrl} alt={service.serviceName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service.serviceName}</div>
                  </div>
                </div>
              </td>

              {/* Area */}
              <td className="text-blue-600 dark:text-blue-300">{service.serviceArea}</td>

              {/* Instruction */}
              <td className="text-yellow-700 dark:text-yellow-300 text-sm">
                {service.specialInstruction || "Instruction null"}
              </td>

              {/* Taking Date */}
              <td className="text-blue-600 dark:text-blue-300">{service.takingDate}</td>

              {/* Status */}
              <td>
                <select
                  defaultValue={service.serviceStatus}
                  onChange={(e) => handleServiceStatus(e.target.value, service._id)}
                  className="px-2 py-1 rounded text-sm border dark:bg-gray-700 dark:text-white dark:border-gray-600"
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="completed">Completed</option>
                </select>
              </td>

              {/* Booked by */}
              <td className="italic">{service.userName}</td>

              {/* Delete Button */}
              <td>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-sm btn-error"
                >
                  <FaX />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceToDoTable;

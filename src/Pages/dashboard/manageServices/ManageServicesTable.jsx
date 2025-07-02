import React, { useContext, useEffect } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceContext from "../../../contexts/ServiceContext";

const ManageServicesTable = ({ userServices, handleDelete }) => {
  const { setEditServiceId } = useContext(ServiceContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleEditButton = (id) => {
    setEditServiceId(id);
    document.getElementById("modal_edit").showModal();
  };

  return (
    <div data-aos="fade-up-right" className="overflow-x-auto mt-6 shadow rounded-xl">
      <table className="table table-zebra">
        <thead className="bg-base-200 dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Area</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900 dark:text-gray-100">
          {userServices?.map((service, index) => (
            <tr key={service._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td>{index + 1}</td>

              {/* Service Image + Name */}
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
              <td className="text-blue-500 dark:text-blue-300">{service.serviceArea}</td>

              {/* Price */}
              <td className="font-bold text-green-600 dark:text-green-400">${service.price}</td>

              {/* Actions */}
              <td className="flex items-center gap-4">
                <button
                  onClick={() => handleEditButton(service._id)}
                  title="Edit"
                >
                  <FaEdit className="text-blue-600 dark:text-green-400" size={22} />
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  title="Delete"
                >
                  <RiDeleteBin5Fill className="text-red-500" size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageServicesTable;

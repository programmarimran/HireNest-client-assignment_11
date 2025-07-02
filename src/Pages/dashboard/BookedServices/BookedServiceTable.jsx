import React from "react";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router";
import DownloadInvoiceButton from "../../../pdfCreate/DowndoadInvoiceButton";

const BookedServicesTable = ({ bookedServices, handleBookedDeleteButton }) => {
  return (
    <div className="overflow-x-auto shadow rounded-xl mt-6">
      <table className="table table-zebra">
        <thead className="bg-base-200 dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Area</th>
            <th>Service Date</th>
            <th>Status</th>
            <th>৳ Price</th>
            <th>Invoice</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900 dark:text-gray-100">
          {bookedServices?.map((service, index) => (
            <tr
              key={service._id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
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

              <td>{service.serviceArea}</td>

              <td>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {service.takingDate}
                </span>
              </td>

              <td>
                <span
                  className={`badge badge-sm font-semibold capitalize ${
                    service.serviceStatus === "pending"
                      ? "badge-warning"
                      : "badge-success"
                  }`}
                >
                  {service.serviceStatus}
                </span>
              </td>

              <td className="font-bold text-green-600 dark:text-green-400">
                ৳ {service.price}
              </td>

              <td>
                <DownloadInvoiceButton booking={service} />
              </td>

              <td>
                <Link to={`/dashboard/service-details/${service.serviceId}`}>
                  <button
                    className="btn btn-sm btn-primary"
                    title="View Details"
                  >
                    View
                  </button>
                </Link>
              </td>

              <td>
                <button
                  onClick={() => handleBookedDeleteButton(service._id)}
                  className="btn btn-sm btn-error"
                  title="Delete Booking"
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

export default BookedServicesTable;

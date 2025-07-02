import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";

import ServiceContext from "../../../contexts/ServiceContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../../../components/Loading";
import { FaX } from "react-icons/fa6";
import DownloadInvoiceButton from "../../../pdfCreate/DowndoadInvoiceButton";
const BookedServices = () => {
  const { darkIstrue } = use(ServiceContext);
  const [loading, setLoading] = useState(true);
  const { user, logoutUser } = use(AuthContext);
  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `${import.meta.env.VITE_BasicServer}/users/booked/services?email=${
            user?.email
          }`,
          { withCredentials: true }
        )
        //********token handling start******* */
        .then((res) => {
          // console.log(res.status);
          setLoading(false);
          setBookedServices(res?.data);
        })
        .catch((error) => {
          // console.log(error.status);
          if (error.status === 401 || error.status === 403) {
            logoutUser();
          }
        });
    }, 1000);
    //********token handling end********* */
  }, []);
  // console.log(bookedServices);
  const handleBookedDeleteButton = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BasicServer}/book-service/${_id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              const reminingBookedService = bookedServices.filter(
                (service) => service._id !== _id
              );
              setBookedServices(reminingBookedService);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Booked has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" py-12">
      <title>HireNest||Booked_Service</title>
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Booked Services Overview
        </h2>

        <div
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {bookedServices.length > 0 ? (
            `You have successfully booked ${bookedServices.length} service${
              bookedServices.length > 1 ? "s" : ""
            }. Review the details below and stay updated with their current status.`
          ) : (
            <div>
              <p>
                "You haven't booked any services yet. Once you book a service,
                it will appear here for your reference and tracking."
              </p>
              <div className="py-8 pb-4 flex justify-center items-center">
                <Link to={"/services"}>
                  <button
                    className={`mt-1 px-3 py-1 text-sm rounded transition duration-200 ${
                      darkIstrue
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View All Service
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div >
      
        {/* ****************** */}
         <div className="overflow-x-auto shadow rounded-xl mt-6">
      <table className="table table-zebra">
        <thead className="bg-base-200 dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Area</th>
            <th>Provider</th>
            <th>Booked By</th>
            <th>Date</th>
            <th>Status</th>
            <th>৳ Price</th>
            <th>Invoice</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900 dark:text-gray-100">
          {bookedServices?.map((service, index) => (
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
                    {service.specialInstruction && (
                      <div className="text-xs text-yellow-600 dark:text-yellow-400">
                        📌 {service.specialInstruction}
                      </div>
                    )}
                  </div>
                </div>
              </td>

              <td>{service.serviceArea}</td>

              {/* Provider */}
              <td>
                <p className="text-sm font-medium">{service.providerName}</p>
              </td>

              {/* Booked By */}
              <td>
                <p className="text-sm italic">{service.userName}</p>
              </td>

              <td>
                <span className="text-sm text-blue-600 dark:text-blue-400">{service.takingDate}</span>
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

              <td className="font-bold text-green-600 dark:text-green-400">৳ {service.price}</td>

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
      </div>
    </div>
  );
};

export default BookedServices;

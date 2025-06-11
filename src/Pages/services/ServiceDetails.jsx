import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import ServiceContext from "../../contexts/ServiceContext";
import Loading from "../../components/Loading";
import { FaBackward } from "react-icons/fa6";
import PurchaseServiceModal from "../../components/PurchaseServiceModal";

const ServiceDetails = () => {
  const { darkIstrue } = use(ServiceContext);
  const service = useLoaderData();

  if (!service) return <Loading></Loading>;
  return (
    <div className=" py-24">
      <div
        className={`max-w-5xl mx-auto border rounded-2xl py-4 px-4 ${
          darkIstrue
            ? "text-white border-gray-600 shadow-md"
            : "text-gray-800 border-gray-200 shadow-md"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Service Image */}
          <img
            src={service?.imageUrl}
            alt={service?.serviceName}
            className="w-full h-72 object-cover rounded-xl shadow-md"
          />

          {/* Service Info */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{service.serviceName}</h2>
            <p className="text-sm text-gray-400 mb-1">
              Location: {service?.serviceArea}
            </p>
            <p className="text-base my-4">{service?.description}</p>

            <div className="flex items-center gap-3 my-4">
              <img
                src={service?.provider?.photoUrl}
                alt={service?.provider?.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <div>
                <p className="font-semibold">{service?.provider?.name}</p>
                <p className="text-sm text-gray-400">
                  {service?.provider?.email}
                </p>
              </div>
            </div>

            <p className="text-xl font-bold text-blue-500">৳{service?.price}</p>
            <div className=" flex justify-between items-center">
              <Link to={-1}>
                <button
                  className={` flex items-center gap-2 mt-4 px-6 py-2 rounded font-medium transition ${
                    darkIstrue
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  <FaBackward size={20} /> Go Back
                </button>
              </Link>

              <div>
               <PurchaseServiceModal></PurchaseServiceModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

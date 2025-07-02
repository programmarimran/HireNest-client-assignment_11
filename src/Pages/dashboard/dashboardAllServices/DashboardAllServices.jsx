import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const DashboardAllServices = () => {
  const navigate = useNavigate();
  const initialServices = useLoaderData();
  const [allServices, setAllServices] = useState(initialServices);

  // Search handler
  const handleSearch = (search) => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/search/services?search=${search}`
      )
      .then((res) => setAllServices(res.data));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <label className="input input-bordered flex items-center gap-2 max-w-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            placeholder="Search Services"
            className="grow"
          />
        </label>
      </div>

      {/* Total Count */}
      <p className="mb-4 font-medium">
        Total Services:{" "}
        <span className="text-primary">{allServices.length}</span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Provider</th>
              <th>Price</th>
              <th>Area</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allServices.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={service.imageUrl} alt="Service" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={service?.provider?.photoUrl} alt="Provider" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {service?.provider?.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service?.provider?.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>৳ {service.price}</td>
                <td>{service.serviceArea}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/service-details/${service._id}`)
                    }
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllServices;

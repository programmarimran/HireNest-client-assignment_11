import React, { use, useState } from "react";
// import { useLoaderData } from "react-router";
import ServiceContext from "../../contexts/ServiceContext";
import ServiceCard from "../../components/ServiceCard";
import axios from "axios";
import { useLoaderData } from "react-router";

const Services = () => {
  const { darkIstrue } = use(ServiceContext);
  const initialServices = useLoaderData();
  const [allServices, setAllServices] = useState(initialServices);
  //handle search intregation
  const handleSearch = (search) => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/search/services?search=${search}`
      )
      .then((res) => {
        setAllServices(res.data);
      });
  };
  return (
    <div className="py-16 ">
      <title>HireNest||All Services</title>
     <div className="text-center my-8">
  <h2
    className={`text-2xl md:text-3xl font-bold mb-2 ${
      darkIstrue ? "text-white" : "text-black"
    }`}
  >
    Explore All Services in One Place
  </h2>
  <p
    className={`max-w-xl mx-auto mb-6 ${
      darkIstrue ? "text-gray-300" : "text-gray-600"
    }`}
  >
    {allServices.length > 0
      ? `Total ${allServices.length} service${allServices.length > 1 ? 's' : ''} found`
      : "No service found."}
  </p>
</div>
      <div className=" flex justify-center items-center my-4">
        <label className="input">
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
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className=" grid grid-cols-1  gap-6 pb-4">
        {allServices?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

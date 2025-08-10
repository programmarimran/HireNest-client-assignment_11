import React, { use, useState } from "react";
// import { useLoaderData } from "react-router";
import ServiceContext from "../../contexts/ServiceContext";
import ServiceCard from "../../shared/ServiceCard";
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
  //handle sort by price
  const handleSort = (sortType) => {
    let sortedServices = [...allServices];
    if (sortType === "default") {
      sortedServices = initialServices; // Reset to initial services
    } else if (sortType === "ASC") {
      sortedServices.sort((a, b) => a.price - b.price);
    } else if (sortType === "DESC") {
      sortedServices.sort((a, b) => b.price - a.price);
    }
    setAllServices(sortedServices);
  };
  console.log(allServices);
  return (
    <div className="py-16 ">
      <title>HireNest||All Services</title>
      <div className="text-center my-8">
        <h2 className={`text-2xl md:text-3xl font-bold mb-2 text-primary`}>
          Explore All Services in One Place
        </h2>
        <p
          className={`max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {allServices.length > 0
            ? `Total ${allServices.length} service${
                allServices.length > 1 ? "s" : ""
              } found`
            : "No service found."}
        </p>
      </div>
      <div className=" flex justify-between items-center my-4">
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
        <div className="flex items-center gap-4 ">
          <h1 className="flex-shrink-0 text-xl">Shorted By Price</h1>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className=" input"
            name=""
            id=""
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="default">Default</option>
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {allServices?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

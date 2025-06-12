import React, { use } from "react";
import { useLoaderData } from "react-router";
import ServiceContext from "../../contexts/ServiceContext";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  const { darkIstrue } = use(ServiceContext);
  const allServices = useLoaderData();
  console.log(allServices);
  return (
    <div className="py-16 ">
      <title>HireNest||All Services</title>
      <div>
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Explore All Services in One Place
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Find trusted services for every need in one place. Browse, compare,
          and book professionals with confidence.
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
          <input type="search" required placeholder="Search" />
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

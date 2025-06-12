import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ServiceToDoCard from "../../../components/ServiceToDoCard";
import ServiceContext from "../../../contexts/ServiceContext";
import { toast } from "react-toastify";

const ServiceToDo = () => {
  const { darkIstrue } = use(ServiceContext);
  const { user } = use(AuthContext);
  const [provideBookedServices, setProvideBookedServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/provider/booked-services?email=${
          user?.email
        }`
      )
      .then((res) => {
        setProvideBookedServices(res.data);
      });
  }, []);
  console.log(provideBookedServices);
  const handleServiceStatus = (value, _id) => {
    console.log(value);

    //update patch with status DB
    axios
      .patch(`${import.meta.env.VITE_BasicServer}/book-service/${_id}`, {
        serviceStatus: value,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.info(`Status Modified ${value}`);
        }
      });
  };
  return (
    <div className=" py-12">
      <title>HireNest||ServiceToDo</title>
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Services To Do
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {provideBookedServices.length > 0
            ? `You have ${provideBookedServices.length} booked service${
                provideBookedServices.length > 1 ? "s" : ""
              } to manage.`
            : `No services have been booked for you yet.`}
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {provideBookedServices?.map((service) => (
          <ServiceToDoCard
            handleServiceStatus={handleServiceStatus}
            key={service._id}
            service={service}
          ></ServiceToDoCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;

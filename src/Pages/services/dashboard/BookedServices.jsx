import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import BookedServiceCard from "../../../components/BookedServiceCard";
import ServiceContext from "../../../contexts/ServiceContext";

const BookedServices = () => {
  const { darkIstrue } = use(ServiceContext);
  const { user } = use(AuthContext);
  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/users/booked/services?email=${
          user?.email
        }`
      )
      .then((res) => {
        setBookedServices(res.data);
      });
  }, []);
  console.log(bookedServices);
  return (
    <div className=" py-12">
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Booked Your Services
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Easily update or remove the services you’ve added to maintain full
          control. Keep your service offerings up-to-date and relevant for your
          clients.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookedServices?.map((service) => (
          <BookedServiceCard
            key={service._id}
            service={service}
          ></BookedServiceCard>
        ))}
      </div>
    </div>
  );
};

export default BookedServices;

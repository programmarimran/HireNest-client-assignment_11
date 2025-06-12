import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ServiceToDoCard from "../../../components/ServiceToDoCard";

const ServiceToDo = () => {
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
  return (
    <div>
      <title>HireNest||ServiceToDo</title>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {provideBookedServices?.map((service) => (
          <ServiceToDoCard
            key={service._id}
            service={service}
          ></ServiceToDoCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;

import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ServiceToDoCard from "../../../components/ServiceToDoCard";
import ServiceContext from "../../../contexts/ServiceContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ServiceToDo = () => {
  const { darkIstrue } = use(ServiceContext);
  const { user } = use(AuthContext);
  const [provideBookedServices, setProvideBookedServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/provider/booked-services?email=${
          user?.email
        }`,{withCredentials:true}
      )
      .then((res) => {
        setProvideBookedServices(res.data);
      });
  }, []);
  console.log(provideBookedServices);
  //handle service status updated 
  const handleServiceStatus = (value, _id) => {
    // console.log(value);
    //update patch with status DB
    axios
      .patch(`${import.meta.env.VITE_BasicServer}/book-service/${_id}`, {
        serviceStatus: value,
        providerEmail:user.email
      },{withCredentials:true})
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.info(`Status Modified ${value}`);
        }
      });
  };
  //handle users service aje baje fake service delete
    const handleDelete = (_id) => {
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
            const reminingServices = provideBookedServices.filter(
              (service) => service._id !== _id
            );
            setProvideBookedServices(reminingServices);
            console.log(res.data);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Fake service Request deleted successfully.",
          icon: "success",
        });
      }
    });
    //********************************* */
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

      <div className=" grid grid-cols-1 md:grid-cols-2  gap-6">
        {provideBookedServices?.map((service) => (
          <ServiceToDoCard
            handleServiceStatus={handleServiceStatus} 
            handleDelete={handleDelete}
            key={service._id}
            service={service}
          ></ServiceToDoCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;

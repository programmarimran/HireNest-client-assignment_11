import React, { use, useEffect, useState } from "react";
import ManageServiceCard from "../../../components/ManageServiceCard";
import ServiceContext from "../../../contexts/ServiceContext";
import axios from "axios";
import AuthContext from "../../../contexts/AuthContext";
import Swal from "sweetalert2";

const ManageService = () => {
  const { user } = use(AuthContext);
  const { darkIstrue } = use(ServiceContext);
  const [userServices, setUserServices] = useState([]);

  console.log(userServices);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/users/services?email=${
          user?.email
        }`
      )
      .then((res) => {
        setUserServices(res.data);
      });
  }, []);
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
          .delete(`${import.meta.env.VITE_BasicServer}/services/${_id}`)
          .then((res) => {
            const reminingServices = userServices.filter(
              (service) => service._id !== _id
            );
            setUserServices(reminingServices);
            console.log(res.data);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your service has been deleted successfully.",
          icon: "success",
        });
      }
    });
    //********************************* */
  };
  return (
    <div className=" py-12">
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Manage Your Services
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
        {userServices?.map((service) => (
          <ManageServiceCard
            handleDelete={handleDelete}
            key={service._id}
            service={service}
          ></ManageServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ManageService;

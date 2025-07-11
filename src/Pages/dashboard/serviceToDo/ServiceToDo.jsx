import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ServiceContext from "../../../contexts/ServiceContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import ServiceToDoTable from "./ServiceToDoTable";
const ServiceToDo = () => {
  const { darkIstrue } = use(ServiceContext);
  const [loading, setLoading] = useState(true);
  const { user, logoutUser } = use(AuthContext);
  const [provideBookedServices, setProvideBookedServices] = useState([]);
  console.log(user.email);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `${import.meta.env.VITE_BasicServer}/provider/booked-services?email=${
            user?.email
          }`,
          { withCredentials: true }
        )
        //********token handling start******* */
        .then((res) => {
          // console.log(res.status);
          setLoading(false);
          setProvideBookedServices(res?.data);
        })
        .catch((error) => {
          // console.log(error.status);
          if (error.status === 401 || error.status === 403) {
            logoutUser();
          }
        });
    }, 1000);

    //********token handling end********* */
  }, []);
  // console.log(provideBookedServices);
  //handle service status updated
  const handleServiceStatus = (value, _id) => {
    // console.log(value);
    //update patch with status DB
    axios
      .patch(
        `${import.meta.env.VITE_BasicServer}/book-service/${_id}`,
        {
          serviceStatus: value,
          providerEmail: user.email,
        },
        { withCredentials: true }
      )
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
            if (res.data) {
              setProvideBookedServices(reminingServices);
            }
            // console.log(res.data);
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
  if (loading) {
    return <Loading></Loading>;
  }
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

      <div>
        <ServiceToDoTable
          handleServiceStatus={handleServiceStatus}
          handleDelete={handleDelete}
          provideBookedServices={provideBookedServices}
        ></ServiceToDoTable>
      </div>
    </div>
  );
};

export default ServiceToDo;

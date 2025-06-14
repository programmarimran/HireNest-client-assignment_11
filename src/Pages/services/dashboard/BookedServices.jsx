import axios from "axios";
import React, { use, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import BookedServiceCard from "../../../components/BookedServiceCard";
import ServiceContext from "../../../contexts/ServiceContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../../../components/Loading";

const BookedServices = () => {
  const { darkIstrue } = use(ServiceContext);
  const [loading, setLoading] = useState(true);
  const { user,logoutUser } = use(AuthContext);
  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BasicServer}/users/booked/services?email=${
          user?.email
        }`,
        { withCredentials: true }
      )
       //********token handling start******* */
      .then((res) => {
        // console.log(res.status);
        setLoading(false);
        setBookedServices(res?.data);
      })
      .catch((error) => {
        // console.log(error.status);
        if (error.status === 401 || error.status===403) {
          logoutUser();
        }
      });
    //********token handling end********* */
  }, []);
  console.log(bookedServices);
  const handleBookedDeleteButton = (_id) => {
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
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const reminingBookedService = bookedServices.filter(
                (service) => service._id !== _id
              );
              setBookedServices(reminingBookedService);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Booked has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" py-12">
      <title>HireNest||Booked_Service</title>
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          Booked Services Overview
        </h2>

        <div
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {bookedServices.length > 0 ? (
            `You have successfully booked ${bookedServices.length} service${
              bookedServices.length > 1 ? "s" : ""
            }. Review the details below and stay updated with their current status.`
          ) : (
            <div>
              <p>
                "You haven't booked any services yet. Once you book a service,
                it will appear here for your reference and tracking."
              </p>
              <div className="py-8 pb-4 flex justify-center items-center">
                <Link to={"/services"}>
                  <button
                    className={`mt-1 px-3 py-1 text-sm rounded transition duration-200 ${
                      darkIstrue
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View All Service
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookedServices?.map((service) => (
          <BookedServiceCard
            handleBookedDeleteButton={handleBookedDeleteButton}
            key={service._id}
            service={service}
          ></BookedServiceCard>
        ))}
      </div>
    </div>
  );
};

export default BookedServices;

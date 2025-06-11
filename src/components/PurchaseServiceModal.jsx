import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const PurchaseServiceModal = ({ service }) => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { email, displayName } = user;
  const { _id, serviceName, price, provider, imageUrl, serviceArea } = service;
  const { darkIstrue } = use(ServiceContext);
  const handlePurchaseService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceBookingData = Object.fromEntries(formData.entries());
    serviceBookingData.serviceArea = serviceArea;
    serviceBookingData.serviceStatus = "pending";
    // console.log(serviceBookingData);
    axios
      .post(
        `${import.meta.env.VITE_BasicServer}/book-service`,
        serviceBookingData
      )
      .then((data) => {
        console.log(data.data);
        //************************** */
        if (data?.data?.insertedId) {
          Swal.fire({
            title: "Service Booking Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/dashboard/booked-services");
        }
        //******************** */
      });
  };

  const handleClose = () => {
    document.getElementById("modal").close();
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        onClick={() => document.getElementById("modal").showModal()}
        className={` flex items-center gap-2 mt-4 px-6 py-2 rounded font-medium transition ${
          darkIstrue
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Book Now
      </button>
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* bg-base-300 */}
          <form onSubmit={handlePurchaseService}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
              {/* Not Editable Fields */}
              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Service ID</label>
                <input
                  type="text"
                  value={_id}
                  name="serviceId"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Service Name</label>
                <input
                  type="text"
                  value={serviceName}
                  name="serviceName"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Service Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  name="imageUrl"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Provider Email</label>
                <input
                  type="email"
                  value={provider?.email}
                  name="providerEmail"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Provider Name</label>
                <input
                  type="text"
                  value={provider?.name}
                  name="providerName"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Your Email</label>
                <input
                  type="email"
                  value={email}
                  name="userEmail"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  value={displayName}
                  name="userName"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Price</label>
                <input
                  type="text"
                  value={price}
                  name="price"
                  className="input bg-[#2F80ED20] w-full"
                  readOnly
                />
              </fieldset>
            </div>
            {/* Editable Fields */}
            <fieldset className="fieldset mt-6 bg-base-300 border-base-300 rounded-box border p-4">
              <label className="label">Service Taking Date</label>
              <input
                type="date"
                name="takingDate"
                placeholder="Enter Your Date"
                className="input bg-[#2F80ED20] w-full"
                required
              />
            </fieldset>

            {/* Editable: Special Instruction */}
            <fieldset className="fieldset bg-base-300 my-6 border-base-300 rounded-box border p-4">
              <label className="label">Special Instruction</label>
              <textarea
                name="specialInstruction"
                className="textarea bg-[#2F80ED20] w-full"
                rows="4"
                placeholder="Anything like address, area, customized service plan..."
              ></textarea>
            </fieldset>

            <div className="modal-action flex justify-between items-center">
              <button
                type="button"
                onClick={() => handleClose()}
                className="btn bg-[#2F80ED20] text-[#2F80ED] border border-[#2F80ED70] hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn bg-[#2F80ED20] text-[#2F80ED] border border-[#2F80ED70] hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PurchaseServiceModal;

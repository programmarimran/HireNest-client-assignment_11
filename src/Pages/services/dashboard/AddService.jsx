import React, { use } from "react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router";

import AuthContext from "../../../contexts/AuthContext";
// import ServiceContext from "../../../contexts/ServiceContext";
import axios from "axios";

const AddService = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  // const {darkIstrue}=use(ProductContext)

  //handle Addd to db
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());

    serviceData.provider = {
      name: user?.displayName,
      email: user?.email,
      photoUrl: user?.photoURL,
    };
    const priceString = form.price.value;
    // console.log(priceString);
    serviceData.price = parseInt(priceString);

    // POST to server
    axios
      .post(`${import.meta.env.VITE_BasicServer}/services`, serviceData)
      .then((data) => {
        console.log(data.data);
        if (data?.data?.insertedId) {
          Swal.fire({
            title: "Service Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/dashboard/manage-service");
        }
      });
  };
  // Custom text colors for dark/light mode

  return (
    <div className="py-12">
      <div className="text-center space-y-4 p-6">
        <h1 className="text-2xl font-bold">Add Service</h1>
        <p className={`text-base`}>
          Fill out the form to add a valuable new service to the{" "}
          <span className=" font-bold">HireNest</span> platform.
        </p>
      </div>
      {/* bg-base-300 */}
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Service Name</label>
            <input
              type="text"
              className="input bg-[#2F80ED20] w-full"
              name="serviceName"
              placeholder="Enter Your Service Name"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300  border-base-300 rounded-box border p-4">
            <label className={`label `}>Image URL</label>
            <input
              type="text"
              className="input bg-[#2F80ED20] w-full"
              name="imageUrl"
              placeholder="Enter Your Service image URL"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input bg-[#2F80ED20] w-full"
              name="price"
              placeholder="Enter Your Service Cost"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
            <label className="label">Service Area</label>
            <input
              type="text"
              className="input bg-[#2F80ED20] w-full"
              name="serviceArea"
              placeholder="Enter Your Service Area"
              required
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-300 my-6 border-base-300 rounded-box border p-4">
          <label className="label">Description</label>
          <textarea
            name="description"
            required
            className="input bg-[#2F80ED20] w-full"
            rows="5"
            placeholder="Write a detailed description of your service..."
          ></textarea>
        </fieldset>

        <button
          type="submit"
          className="btn bg-[#2F80ED80] hover:bg-[#2F80ED] w-full"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;

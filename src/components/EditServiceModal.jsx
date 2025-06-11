import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";
import axios from "axios";
import Swal from "sweetalert2";

const EditServiceModal = ({ userServices, setUserServices }) => {
  const { editServiceId } = use(ServiceContext);
  // const withOutServices=userServices?.filter(service=>service._id!==editServiceId)
  // console.log(withOutServices)
  const editservice = userServices?.find(
    (service) => service._id == editServiceId
  );
  // console.log(editservice);

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const editServerData = Object.fromEntries(formData.entries());
    // const uiRenderingData={...editServerData,_id:editServiceId}
    console.log(editServerData);
    axios
      .put(
        `${import.meta.env.VITE_BasicServer}/services/${editservice?._id}`,
        editServerData
      )
      .then((res) => {
        if (res?.data.modifiedCount > 0) {
          Swal.fire({
            title: "Service Updated Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setUserServices((preventServises) => {
            return preventServises.map((service) =>
              service._id == editServiceId
                ? { ...service, ...editServerData }
                : service
            );
          });
          document.getElementById("modal_edit").close();
          form.reset();
        }
        console.log(res.data);
      });
  };
  const handleClose = () => {
    document.getElementById("modal_edit").close();
  };
  console.log(userServices);
  return (
    <>
      <dialog id="modal_edit" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box custom-modal-box mx-auto">
          {/* bg-base-300 */}
          <form onSubmit={handleUpdateService}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
              <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                <label className="label">Service Name</label>
                <input
                  type="text"
                  defaultValue={editservice?.serviceName}
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
                  defaultValue={editservice?.imageUrl}
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
                  defaultValue={editservice?.price}
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
                  defaultValue={editservice?.serviceArea}
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
                defaultValue={editservice?.description}
                className="input bg-[#2F80ED20] w-full"
                rows="5"
                placeholder="Write a detailed description of your service..."
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
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EditServiceModal;

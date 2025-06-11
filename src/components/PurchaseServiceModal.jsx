import React from "react";

const PurchaseServiceModal = () => {
  const handleClose = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-4xl w-full">
          <h3 className=" my-12 text-center bg-green-100 text-green-600 border border-green-200  rounded-lg py-2 px-4 text-2xl font-bold">
            Update Recipe
          </h3>

          <form>
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
            {/* modal end */}
            <div className=" flex items-center justify-between">
              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => handleClose()}
                  className="btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                >
                  Close
                </button>
              </div>
              <button
                className=" btn bg-green-100 text-green-600 border border-green-400 hover:shadow-md rounded-lg py-2 px-4 text-2xl font-bold"
                type="submit"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PurchaseServiceModal;

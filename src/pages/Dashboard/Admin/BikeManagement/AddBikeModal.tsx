import React, { useState } from "react";
import { Bike } from "lucide-react";
import { useAddBikeMutation } from "../../../../redux/api/bikeApi";

const AddBikeModal = () => {
  const [bikeData, setBikeData] = useState({
    name: "",
    description: "",
    pricePerHour: 0,
    cc: 0,
    year: 0,
    model: "",
    brand: "",
  });

  const [addBike, { isError, error }] = useAddBikeMutation();

  if (isError) {
    console.log("myError:", error);
  }
  // Function to handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setBikeData({
      ...bikeData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  // Function to handle bike form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBike(bikeData);
    closeModal();
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal instanceof HTMLDialogElement) {
      modal.close();
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        onClick={openModal}
        className="py-2 px-4 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border 
          border-transparent bg-teal-100 text-teal-700 hover:bg-teal-200 
          disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-700/30 
          dark:hover:bg-teal-800/20"
      >
        Add New Bike
        <Bike size={20} />
      </button>

      {/* Modal component */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">Add a New Bike</h3>
          <form onSubmit={handleSubmit}>
            {/* Bike Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Bike Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={bikeData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={bikeData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Price Per Hour */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="pricePerHour"
              >
                Price Per Hour
              </label>
              <input
                type="number"
                id="pricePerHour"
                name="pricePerHour"
                value={bikeData.pricePerHour}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* CC */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="cc">
                CC
              </label>
              <input
                type="number"
                id="cc"
                name="cc"
                value={bikeData.cc}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Year */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="year">
                Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={bikeData.year}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Model */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="model">
                Model
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={bikeData.model}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Brand */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="brand">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={bikeData.brand}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Add Bike
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddBikeModal;

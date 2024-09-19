import { useState } from "react";

import { useUpdateBikeMutation } from "../../../../redux/api/bikeApi"; // Hook for updating bike
import { TBike } from "../../../../interfaces/bike.interface";

const UpdateBikeModal = ({
  bike,
  onClose,
}: {
  bike: TBike;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState(bike); // Prefill form with bike data
  const [updateBike, { isLoading }] = useUpdateBikeMutation(); // Hook for updating bike

  console.log("bike", bike);
  console.log("bikeForm", formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBike(formData); // Send updated bike data to the server
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error("Failed to update bike:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg z-50">
        <form onSubmit={handleSubmit}>
          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Update Bike</h3>

          <div className="mt-4">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Model</label>
            <input
              type="text"
              name="model"
              value={formData?.model}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Price Per Hour</label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">CC</label>
            <input
              type="number"
              name="cc"
              value={formData.cc}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="modal-action mt-4">
            <button
              type="submit"
              className="py-2 px-4 inline-flex
               items-center gap-x-2 text-md font-medium
                rounded-lg border border-transparent bg-[#6AB9E2]
                 text-white hover:bg-[#51b0e3] focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Bike"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBikeModal;

import { useState } from "react";
import { TUser } from "../../../interfaces/user.interface";
import { useUpdateProfileMutation } from "../../../redux/api/userApi";



const MyProfileUpdateModal = ({
  userInfo,
  onClose,
}: {
    userInfo: TUser;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState(userInfo); // Prefill form with bike data
  const [updateProfile, { isLoading }] = useUpdateProfileMutation(); // Hook for updating bike

 

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
      await updateProfile(formData); // Send updated profile data to the server
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error("Failed to update profile:", error);
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

          <h3 className="font-bold text-lg">Update Profile</h3>

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
            <label className="block">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
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
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfileUpdateModal;

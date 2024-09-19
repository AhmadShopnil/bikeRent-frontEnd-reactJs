import { useState } from "react";
import { FilePenLine, Trash2 } from "lucide-react";
import { useDeleteBikeMutation } from "../../../../redux/api/bikeApi";

import UpdateBikeModal from "./UpdateBikeModal"; // Import the Update Modal
import { TBike } from "../../../../interfaces/bike.interface";
import DeleteLoading from "../../../../components/Shared/Buttons/DeleteLoading";

const BikeTableRow = ({ bike }: { bike: TBike }) => {
  const [deleteBike, { isLoading: isDeleting }] = useDeleteBikeMutation(); // Hook for deleting bike
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false); // State for modal

  // handle bike delete
  const handleDeleteSingleBike = async (bikeId: string) => {
    try {
      await deleteBike(bikeId);
    } catch (error) {
      console.error("Failed to delete bike:", error);
    }
  };

  return (
    <>
      <tr
        key={bike._id}
        className="hover:bg-gray-100 dark:hover:bg-neutral-700"
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
          {bike.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {bike.brand}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {bike.pricePerHour}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {bike.cc}
        </td>

        {/* Actions handle */}
        <td className="flex gap-8 justify-center px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          {/* Update Bike button */}
          <button
            type="button"
            onClick={() => setUpdateModalOpen(true)} // Open modal on click
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none dark:text-blue-500 dark:hover:text-blue-400"
          >
            <FilePenLine size={17} />
          </button>

          {/* Delete Bike button */}
          <button
            onClick={() => handleDeleteSingleBike(bike?._id)}
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 focus:outline-none dark:text-red-500 dark:hover:text-red-400"
          >
            {isDeleting ? <DeleteLoading /> : <Trash2 size={18} />}
          </button>
        </td>
      </tr>

      {/* Update Bike Modal */}
      {isUpdateModalOpen && (
        <UpdateBikeModal
          bike={bike}
          onClose={() => setUpdateModalOpen(false)} // Close modal
        />
      )}
    </>
  );
};

export default BikeTableRow;

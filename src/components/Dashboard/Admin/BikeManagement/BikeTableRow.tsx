import { TBike } from "../../../../interfaces/bike.interface";
import { FilePenLine, Trash2 } from "lucide-react";

const BikeTableRow = ({ bike }: { bike: TBike }) => {
  const handleUpdateBike = (bikeId) => {};
  const handleDeleteSingleBike = (bikeId) => {};
  return (
    <tr key={bike._id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
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
      <td className=" flex gap-8 justify-center  px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          onClick={() => handleUpdateBike(bike?._id)}
          type="button"
          className=" inline-flex items-center gap-x-2
         text-sm font-semibold rounded-lg border
          border-transparent text-blue-600 hover:text-blue-800
           focus:outline-none disabled:opacity-50 
           disabled:pointer-events-none dark:text-blue-500
            dark:hover:text-blue-400 "
        >
          <FilePenLine size={18} />
        </button>
        <button
          onClick={() => handleDeleteSingleBike(bike?._id)}
          type="button"
          className="inline-flex items-center gap-x-2
         text-sm font-semibold rounded-lg border
          border-transparent text-red-400 hover:text-red-600 
          focus:outline-none  disabled:opacity-50
           disabled:pointer-events-none dark:text-red-500
            dark:hover:text-red-400"
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
};

export default BikeTableRow;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";
import { TRental } from "../../../../interfaces/rental.interface";

const AllRentalTableRow = ({ rental }: { rental: TRental }) => {
  const { userId, bikeId, startTime, returnTime, totalCost, isReturned, _id } =
    rental;

  const handleDelete = (id: string) => {};
  const handleReturn = (id: string) => {};

  return (
    <tr key={_id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {userId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {bikeId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {returnTime}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {isReturned ? (
          <>Returned</>
        ) : (
          <button
            onClick={() => handleReturn(_id)}
            type="button"
            className=" inline-flex items-center gap-x-2
           text-sm font-semibold rounded-lg border
            border-transparent text-blue-600 hover:text-blue-800
             focus:outline-none disabled:opacity-50 
             disabled:pointer-events-none dark:text-blue-500
              dark:hover:text-blue-400 "
          >
            Return Bike
          </button>
        )}
      </td>

      {/* Actions handle */}
      <td className=" flex gap-8 justify-center  px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          onClick={() => handleDelete(_id)}
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

export default AllRentalTableRow;

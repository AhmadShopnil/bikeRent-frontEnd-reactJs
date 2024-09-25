import { Link } from "react-router-dom";
import { TRental } from "../../../../interfaces/rental.interface";

const MyRentalCard = ({ rental }: { rental: TRental }) => {
  const { bikeId, startTime, returnTime, totalCost, isReturned, _id } = rental;

  return (
    <div
      className="cursor-pointer p-5 bg-white border border-gray-300 
    shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 
    ease-in-out mb-6 w-full mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Bike #{bikeId}</h2>
        <span
          className={`${
            isReturned ? "bg-green-500" : "bg-yellow-500"
          } text-white px-3 py-1 rounded-full text-xs font-medium`}
        >
          {isReturned ? "Returned" : "Not Returned"}
        </span>
       
      </div>

      {/* Information Section */}
      <div className="text-gray-600 text-sm space-y-2">
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Start Time:</p>
          <p>{new Date(startTime).toLocaleString()}</p>
        </div>

        {isReturned ? (
          <>
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Return Time:</p>
              <p>{new Date(returnTime as string).toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Total Cost:</p>
              <p className="font-semibold text-gray-800">
                ${(totalCost as number).toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Return Time:</p>
              <p>Pending</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Total Cost:</p>
              <p>Will calculate after return</p>
            </div>
          </>
        )}

        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Bill:</p>
          <span
          className={`${
            isReturned ? "bg-blue-300" : "bg-red-300"
          } text-white px-2 py-1 rounded-md text-xs font-medium`}
        >
          {isReturned ? "Paid" : "Not Paid"}
        </span>
        </div>

        
      </div>

      {/* Footer */}
      <div className="mt-4   text-right">

     
        <button
          className="py-2 px-3 bg-blue-500 text-xs
         text-white rounded-md shadow-sm hover:bg-blue-700
          transition-all duration-300 font-medium"
        >
          <Link to={`/dashboard/user/rentalManagement/rentalDetails/${_id}`}>
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MyRentalCard;

import { Link, useParams } from "react-router-dom";
import BikeTableSkeleton from "../../Admin/BikeManagement/BikeTableSkeleton";
import { useGetSingleRentalsByIdQuery } from "../../../../redux/api/rentalApi";
import { TRental } from "../../../../interfaces/rental.interface";

const RentalDetails = () => {
  const { rentalId } = useParams<{ rentalId: string }>();

  const {
    data: rental,
    isLoading,
    isError,
    error,
  } = useGetSingleRentalsByIdQuery(rentalId);
  if (isLoading) {
    return <BikeTableSkeleton></BikeTableSkeleton>; // Show loading state
  }

  if (isError) {
    console.log("myeror", error);

    return (
      <div>
        <p>Faild To load rental data</p>
      </div>
    ); // Show error message
  }

  const { bikeId, startTime, returnTime, totalCost, isReturned } =
    rental?.data as TRental;

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Rental Details
        </h1>

        {/* Rental Overview */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-700">
              Bike ID: {bikeId}
            </h2>
            <span
              className={`${
                isReturned ? "bg-green-500" : "bg-yellow-500"
              } text-white px-3 py-1 rounded-full text-sm font-semibold`}
            >
              {isReturned ? "Returned" : "Not Returned"}
            </span>
          </div>

          {/* Start and Return Time */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Start Time:</p>
              <p>{new Date(startTime).toLocaleString()}</p>
            </div>
            {isReturned ? (
              <div className="flex justify-between mt-2">
                <p className="font-medium text-gray-700">Return Time:</p>
                <p>{new Date(returnTime as string).toLocaleString()}</p>
              </div>
            ) : (
              <div className="flex justify-between mt-2">
                <p className="font-medium text-gray-700">Return Time:</p>
                <p>Pending</p>
              </div>
            )}
          </div>

          {/* Total Cost */}
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Total Cost:</p>
              <p className="text-lg font-semibold text-gray-800">
                {isReturned
                  ? `$${(totalCost as number).toFixed(2)}`
                  : "Pending"}
              </p>
            </div>
          </div>
        </div>

        {/* Button to Go Back */}
        <div className="mt-6 text-right">
          <button
            className="bg-blue-500 text-sm text-white px-3 py-2 rounded-md shadow-sm
             hover:bg-blue-700 transition-all"
          >
            <Link to="/dashboard/user/rentalManagement">Back to rentals</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;

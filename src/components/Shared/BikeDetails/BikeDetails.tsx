import { Link } from "react-router-dom";
import { TBike } from "../../../interfaces/bike.interface";

const BikeDetails = ({ bike }: { bike: TBike }) => {
  const {
    _id,
    name,
    description,
    pricePerHour,
    isAvailable,
    cc,
    year,
    model,
    brand,
    updatedAt,
  } = bike;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Bike Name */}
      <h1 className="text-2xl font-bold mb-4">{name}</h1>

      {/* Availability Badge */}
      <div className="flex justify-between items-center mb-4">
        <span
          className={`${
            isAvailable
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          } px-3 py-1 rounded-full text-sm`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>
        <p className="text-gray-500 text-sm">
          Last updated: {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>

      {/* Bike Information */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Bike Description */}
        <div className="col-span-2 mb-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Price per Hour */}
        <div>
          <h3 className="text-md font-semibold">Price Per Hour</h3>
          <p className="text-gray-700">${pricePerHour}</p>
        </div>

        {/* Bike Brand */}
        <div>
          <h3 className="text-md font-semibold">Brand</h3>
          <p className="text-gray-700">{brand}</p>
        </div>

        {/* Bike Model */}
        <div>
          <h3 className="text-md font-semibold">Model</h3>
          <p className="text-gray-700">{model}</p>
        </div>

        {/* Bike Year */}
        <div>
          <h3 className="text-md font-semibold">Year</h3>
          <p className="text-gray-700">{year}</p>
        </div>

        {/* Bike CC */}
        <div>
          <h3 className="text-md font-semibold">Engine (CC)</h3>
          <p className="text-gray-700">{cc} CC</p>
        </div>
      </div>

      {/* Rent Now Button */}
      <div className="mt-6">
        <Link to={`/dashboard/user/checkout/${_id}`}>
          <button
            className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md
              hover:bg-teal-600 transition-colors duration-300"
          >
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BikeDetails;

import { Link } from "react-router-dom";
import { TBike } from "../../interfaces/bike.interface";

const CardBike = ({ bike }: { bike: TBike }) => {
  return (
    <div
      className="p-2 max-w-xs flex flex-col bg-white border border-t-4
     border-t-blue-300 shadow-sm rounded-xl dark:bg-neutral-900
      dark:border-neutral-700
     dark:border-t-blue-500 dark:shadow-neutral-700/70"
    >
      <img
        src="https://images.unsplash.com/photo-1600497934937-2d02ebad5da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yYmlrZXxlbnwwfHwwfHx8MA%3D%3D"
        // alt={bike.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold">{bike.name}</h2>
      <p className="text-gray-600 dark:text-neutral-400">Brand: {bike.brand}</p>
      <p className="text-gray-600 dark:text-neutral-400">
        Price: ${bike.pricePerHour}/hr
      </p>
      <Link
        to={`/bikes/${bike._id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-teal-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default CardBike;

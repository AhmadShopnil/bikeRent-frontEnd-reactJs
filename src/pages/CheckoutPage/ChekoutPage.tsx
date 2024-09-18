import { useNavigate, useParams } from "react-router-dom";

import { useGetSingleBikeByIdQuery } from "../../redux/api/bikeApi";
import TableSkeleton from "../../components/Shared/Skeleton/TableSkeleton";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { bikeId } = useParams<{ bikeId: string }>();
  const { data, isLoading, isError, error } = useGetSingleBikeByIdQuery(bikeId);

  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; // Show loading state
  }

  if (isError) {
    console.log("myerror", error);
    return (
      <div>
        <p>Faild To load bike data</p>
      </div>
    ); // Show error message
  }

  const { name, pricePerHour, description } = data.data;

  console.log("name", name);

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    // Redirect to booking confirmation  page
    navigate("/dashboard/user/bookingConfirmation", {
      state: { bike: data?.data, pricePerHour },
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Checkout Header */}

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700">
          <strong>Price per Hour:</strong> ${pricePerHour}
        </p>
      </div>

      {/* Confirm Booking Button */}
      <div className="mt-6">
        <button
          onClick={handleConfirmBooking}
          className="bg-[#6AB9E2] text-white px-4 py-2 rounded-lg shadow-md
          hover:bg-[#51b0e3] transition-colors duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

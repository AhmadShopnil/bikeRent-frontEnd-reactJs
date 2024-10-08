/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useParams } from "react-router-dom";

import { useGetSingleBikeByIdQuery } from "../../redux/api/bikeApi";
import TableSkeleton from "../../components/Shared/Skeleton/TableSkeleton";
import { useAddRentalMutation } from "../../redux/api/rentalApi";
import { getCurrentTimeISO } from "../../utils/getCurrentTimeIso";

const CheckoutPage = () => {
  // const navigate = useNavigate();

  const { bikeId } = useParams<{ bikeId: string }>();
  const { data, isLoading, isError, error } = useGetSingleBikeByIdQuery(bikeId);
  const [addRental]=useAddRentalMutation();


  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; // Show loading state
  }

  if (isError) {
    console.log("myerror", error);
    return (
      <div>
        <p>Faild To load bike data</p>
      </div>
    );
  }

  const { name, pricePerHour, description } = data.data;


  // Handle booking confirmation

  const handleConfirmBooking = async () => {
    const startTime = getCurrentTimeISO();
    const payload = { bikeId, startTime };
  
    try {
      // Call addRental and get the payment URL from the response
      const response = await addRental(payload).unwrap();
      console.log('form confirm booking', response)
      const paymentUrl = response?.data?.paymentUrl;
      
      if (paymentUrl) {
        // Open the payment URL in a new tab
        window.open(paymentUrl, "_blank");
      } else {
        console.error('Payment URL not found.');
      }
      
  
    } catch (error: any) {
      // Display an error message in case of failure
      return (
        <>
          <h2>Booking Failed!</h2>
          <p>{error?.data?.message}</p>
        </>
      );
    }
  };
  



  // const handleConfirmBooking = async() => {
  //   const startTime= getCurrentTimeISO()
  //   const payload={bikeId,startTime}

  // try {
  //   await addRental(payload).unwrap()

  //     // Redirect to booking confirmation  page
  //     navigate("/dashboard/user/bookingConfirmation", {
  //       state: { bike: data?.data, pricePerHour },
  //     });
  // } catch (error:any) {

  //   return (<>
  //   <h2>Booking Faild!</h2>
  //   <p>{error?.data?.message}</p>
  //   </>)
    
  // }
  
  // };

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

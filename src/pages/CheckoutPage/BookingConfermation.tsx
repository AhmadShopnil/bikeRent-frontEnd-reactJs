
import {  Link, useParams } from "react-router-dom";
import { useGetSingleRentalsByTranIdQuery } from "../../redux/api/rentalApi";
import TableSkeleton from "../../components/Shared/Skeleton/TableSkeleton";
import { TRental } from "../../interfaces/rental.interface";
import { TBike } from "../../interfaces/bike.interface";


const BookingConfirmation = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const { data, isLoading, isError, error } = useGetSingleRentalsByTranIdQuery(transactionId);


  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; 
  }

  if (isError) {
    console.log("myerror", error);
    return (
      <div>
        <p>Payment Success but faild to load data!</p>
        <p> please go your <span>
          <Link to='/dashboard/user/rentalManagement'>Dashboard</Link>
          </span></p>
      </div>
    );
  }



  const { bikeData, startTime  } = data.data as TRental;


const {name,pricePerHour} = bikeData  as TBike

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Booking Confirmation</h1>
      <p className="text-lg text-green-500 mb-4">
      
        You have successfully booked the bike: <strong>{name}</strong>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Price per hour:</strong> ${pricePerHour?.toFixed(2)}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Total Cost:</strong> Will be calculated after return bike
      </p>
      
      <p className="text-lg text-gray-700 mb-4">
        <strong>Start Time:</strong> ${startTime}
      </p>
      <p className="text-gray-600">
        Thank you for your booking! We will send you the details via email.
      </p>
    </div>
  );
};

export default BookingConfirmation;

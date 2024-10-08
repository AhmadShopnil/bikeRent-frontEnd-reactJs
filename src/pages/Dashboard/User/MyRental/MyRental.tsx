/* eslint-disable @typescript-eslint/no-unused-vars */

import { TRental } from "../../../../interfaces/rental.interface";
import { useGetMyAllRentalsQuery } from "../../../../redux/api/rentalApi";

import BikeTableSkeleton from "../../Admin/BikeManagement/BikeTableSkeleton";
import MyRentalCard from "./MyRentalCard";

const MyRental = () => {
  // const [myRentalError,setMyRentalError]=useState('')
  const { data: rentals, isLoading, isError } = useGetMyAllRentalsQuery("");
  if (isLoading) {
    return <BikeTableSkeleton></BikeTableSkeleton>; // Show loading state
  }

  if (isError) {
  
    // setMyRentalError('Not found any booking list')

    return (
      <div>
        <p>{`Not found any booking list`}</p>
      </div>
    ); // Show error message
  }





  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {rentals?.data?.map((rental: TRental) => (
          <MyRentalCard rental={rental} key={rental?._id}></MyRentalCard>
        ))}
      </div>
    </div>
  );
};

export default MyRental;

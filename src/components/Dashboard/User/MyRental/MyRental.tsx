import { TRental } from "../../../../interfaces/rental.interface";
import { useGetAllRentalsQuery } from "../../../../redux/api/rentalApi";
import BikeTableSkeleton from "../../Admin/BikeManagement/BikeTableSkeleton";
import MyRentalCard from "./MyRentalCard";

const MyRental = () => {
  const { data: rentals, isLoading, isError } = useGetAllRentalsQuery("");
  if (isLoading) {
    return <BikeTableSkeleton></BikeTableSkeleton>; // Show loading state
  }

  if (isError) {
    return (
      <div>
        <p>Faild To load Bikes data</p>
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

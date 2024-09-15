import { useGetAllRentalsQuery } from "../../../../redux/api/rentalApi";
import BikeTableSkeleton from "../BikeManagement/BikeTableSkeleton";
import AllRentalTable from "./AllRentalTable";

const AllRental = () => {
  const { data, isLoading, isError, error } = useGetAllRentalsQuery("");

  if (isLoading) {
    return <BikeTableSkeleton></BikeTableSkeleton>; // Show loading state
  }

  if (isError) {
    console.log("first", error);
    return (
      <div>
        <p>Faild To load Rentals data</p>
      </div>
    ); // Show error message
  }

  return (
    <div>
      <AllRentalTable rental={data?.data}></AllRentalTable>
    </div>
  );
};

export default AllRental;

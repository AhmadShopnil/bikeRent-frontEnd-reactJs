import TableSkeleton from "../../../../components/Shared/Skeleton/TableSkeleton";
import { useGetAllRentalsQuery } from "../../../../redux/api/rentalApi";

import AllRentalTable from "./AllRentalTable";

const AllRental = () => {
  const { data, isLoading, isError, error } = useGetAllRentalsQuery("");

  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; // Show loading state
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

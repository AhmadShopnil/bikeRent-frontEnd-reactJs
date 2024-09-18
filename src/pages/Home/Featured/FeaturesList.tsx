import { TBike } from "../../../interfaces/bike.interface";
import { useGetAllBikesQuery } from "../../../redux/api/bikeApi";
import CardBike from "../../../components/Shared/BikeCard/CardBike";
import TableSkeleton from "../../../components/Shared/Skeleton/TableSkeleton";

const FeaturedList = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery("");

  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; // Show loading state
  }

  if (isError) {
    return (
      <div>
        <p>Faild To load Bikes data</p>
      </div>
    ); // Show error message
  }

  return (
    <div className=" w-full mx-auto">
      <h1 className="text-2xl font-semibold text-start mb-4">Featured Bikes</h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
      >
        {bikes?.data?.slice(0, 4).map((bike: TBike) => (
          <CardBike bike={bike} key={bike?._id}></CardBike>
        ))}
      </div>

      {/* <div className="grid  grid-cols-4 gap-6">
        {bikes?.data?.map((bike: TBike) => (
          <BikeCard bike={bike} key={bike?._id}></BikeCard>
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedList;

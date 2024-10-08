
import { TBike } from "../../interfaces/bike.interface";
import { useGetAllBikesQuery } from "../../redux/api/bikeApi";

import CardBike from "../../components/Shared/BikeCard/CardBike";
import TableSkeleton from "../../components/Shared/Skeleton/TableSkeleton";

const BikeList = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery("");
  
  // const [filteredBikes, setFilteredBikes] = useState(bikes?.data || []);
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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Available Bikes
      </h1>

      {/* <BikeFilters
        bikes={bikes?.data || []}
        setFilteredBikes={setFilteredBikes}
      /> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4  gap-6"
      >
        {bikes?.data?.map((bike: TBike) => (
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

export default BikeList;

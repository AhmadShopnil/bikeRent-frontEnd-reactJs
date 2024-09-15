import { useParams } from "react-router-dom";
import BikeDetails from "../../components/Shared/BikeDetails/BikeDetails";
import { useGetSingleBikeByIdQuery } from "../../redux/api/bikeApi";
import BikeDetailsSkeleton from "../../components/Shared/Skeleton/BikeDetailsSkeleton";

const BikeDetailsPage = () => {
  const { bikeId } = useParams<{ bikeId: string }>();
  const { data, isLoading, isError } = useGetSingleBikeByIdQuery(bikeId);

  if (isLoading) {
    return <BikeDetailsSkeleton></BikeDetailsSkeleton>; // Show loading state
  }

  if (isError) {
    return (
      <div>
        <p>Faild To load rental data</p>
      </div>
    ); // Show error message
  }

  return (
    <div>
      <BikeDetails bike={data?.data}></BikeDetails>
    </div>
  );
};

export default BikeDetailsPage;

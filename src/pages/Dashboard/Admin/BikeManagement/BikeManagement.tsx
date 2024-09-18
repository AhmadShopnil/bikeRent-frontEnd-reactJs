import BikeListTable from "./BikeListTable";
import BikeTableSkeleton from "./BikeTableSkeleton";
import { useGetAllBikesQuery } from "../../../../redux/api/bikeApi";

import AddBikeModal from "./AddBikeModal";

const BikeManagement = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery("");
  // const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  if (isLoading) {
    return <BikeTableSkeleton />; // Show loading state
  }

  if (isError) {
    return <p>Failed to load Bikes data</p>; // Show error message
  }

  return (
    <div className="">
      {/* Bike List */}
      <BikeListTable bikes={bikes?.data} />

      {/* Add New Bike Button */}
      <div className="mt-10">
        {/* <button
          type="button"
          // onClick={handleOpenModal}
          className="py-2 px-4 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border 
          border-transparent bg-teal-100 text-teal-700 hover:bg-teal-200 
          disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-700/30 
          dark:hover:bg-teal-800/20"
        >
          Add New Bike
          <Bike size={20} />
        </button> */}
      </div>

      <div className="mt-10">
        {/* <BikeAddModal /> */}
        <AddBikeModal></AddBikeModal>
      </div>
    </div>
  );
};

export default BikeManagement;

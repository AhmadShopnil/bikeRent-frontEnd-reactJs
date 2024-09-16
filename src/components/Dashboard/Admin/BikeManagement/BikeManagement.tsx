import BikeListTable from "./BikeListTable";
import BikeTableSkeleton from "./BikeTableSkeleton";

import { Bike } from "lucide-react";
import BikeAddModal from "./BikeAddModal";
import { useGetAllBikesQuery } from "../../../../redux/api/bikeApi";
const BikeManagement = () => {
  // const [bikes, setBikes] = useState<TBike[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // Fetch bikes from API
  // useEffect(() => {
  //   const fetchbikes = async () => {
  //     const url =
  //       "https://bikerent-ahmadshopnils-projects.vercel.app/api/bikes/";

  //     try {
  //       const response = await fetch(url); // Make API call
  //       const data = await response.json();
  //       setBikes(data.data); // Set fetched bikes
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to load bikes.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchbikes(); // Call the fetch function
  // }, []);

  const { data: bikes, isLoading, isError } = useGetAllBikesQuery("");

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
      {/* bike List */}
      <BikeListTable bikes={bikes?.data}></BikeListTable>

      {/* Add New Bike */}
      <div className="mt-10">
        <button
          type="button"
          className="py-2 px-4 inline-flex items-center
         gap-x-2 text-xs font-medium rounded-lg border 
         border-transparent bg-teal-100 text-teal-700
          hover:bg-teal-200 
           disabled:opacity-50 disabled:pointer-events-none
            dark:text-teal-500 dark:bg-teal-700/30
             dark:hover:bg-teal-800/20
         "
        >
          Add New Bike
          <Bike size={20} />
        </button>

        {/* <BikeAddModal></BikeAddModal> */}
      </div>
    </div>
  );
};

export default BikeManagement;

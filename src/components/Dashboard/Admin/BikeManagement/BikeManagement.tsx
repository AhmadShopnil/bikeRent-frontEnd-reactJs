import { useEffect, useState } from "react";
import BikeListTable from "./BikeListTable";
import BikeTableSkeleton from "./BikeTableSkeleton";
import { TBike } from "../../../../interfaces/bike.interface";
import { Bike } from "lucide-react";
import BikeAddModal from "./BikeAddModal";
const BikeManagement = () => {
  const [bikes, setBikes] = useState<TBike[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch bikes from API
  useEffect(() => {
    const fetchbikes = async () => {
      const url =
        "https://bikerent-ahmadshopnils-projects.vercel.app/api/bikes/";

      try {
        const response = await fetch(url); // Make API call
        const data = await response.json();
        setBikes(data.data); // Set fetched bikes
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load bikes.");
        setLoading(false);
      }
    };

    fetchbikes(); // Call the fetch function
  }, []);

  if (loading) {
    return <BikeTableSkeleton></BikeTableSkeleton>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div>
      {/* bike List */}
      <BikeListTable bikes={bikes}></BikeListTable>

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

        <BikeAddModal></BikeAddModal>
      </div>
    </div>
  );
};

export default BikeManagement;

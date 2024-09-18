/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TBike } from "../../interfaces/bike.interface";

const BikeFilters = ({
  bikes,
  setFilteredBikes,
}: {
  bikes: TBike[];
  setFilteredBikes: any;
}) => {
  const [brand, setBrand] = useState("");
  const [availability, setAvailability] = useState("All");

  const filterBikes = () => {
    let filtered = bikes;

    if (brand) {
      filtered = filtered.filter((bike) => bike.brand.includes(brand));
    }

    if (availability !== "All") {
      filtered = filtered.filter(
        (bike) => bike.isAvailable === (availability === "Available")
      );
    }

    setFilteredBikes(filtered);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="border p-2 rounded-md"
      />

      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>

      <button
        onClick={filterBikes}
        className="py-2 px-4 inline-flex
               items-center gap-x-2 text-md font-medium
                rounded-lg border border-transparent bg-[#6AB9E2]
                 text-white hover:bg-[#51b0e3] focus:outline-none"
      ></button>
    </div>
  );
};

export default BikeFilters;

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
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default BikeFilters;

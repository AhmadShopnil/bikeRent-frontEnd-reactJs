const BikeTableSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <tr
            key={index}
            className="animate-pulse w-full grid gap-2 
            sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full"></div>
            </td>
          </tr>
        ))}
    </>
  );
};

export default BikeTableSkeleton;

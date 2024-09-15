const BikeDetailsSkeleton = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 rounded-md animate-pulse w-1/2 mb-4"></div>

      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 rounded-lg animate-pulse mb-6"></div>

      {/* Description Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded-md animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-md animate-pulse w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md animate-pulse w-2/3"></div>
      </div>

      {/* Price and Availability Skeleton */}
      <div className="mt-6 space-y-4">
        <div className="h-6 bg-gray-300 rounded-md animate-pulse w-1/4"></div>
        <div className="h-6 bg-gray-300 rounded-md animate-pulse w-1/3"></div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-6 w-full h-12 bg-gray-300 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default BikeDetailsSkeleton;

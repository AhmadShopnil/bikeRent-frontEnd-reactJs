const MyProfileSkeleton = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Title skeleton */}
      <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>

      {/* Profile header skeleton */}
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="ml-4">
          <div className="h-6 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Contact Information skeleton */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="h-5 w-40 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-48 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Role skeleton */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="h-5 w-20 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Last updated skeleton */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default MyProfileSkeleton;

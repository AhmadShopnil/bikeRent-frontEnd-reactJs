const DeleteLoading = () => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center
     gap-x-2 text-xs font-medium rounded-lg border border-transparent
      bg-red-600 text-white
       hover:bg-red-700
        focus:outline-none focus:bg-red-700 

        disabled:opacity-50 disabled:pointer-events-none"
    >
      <span
        className="animate-spin inline-block size-4 border-[2px] 
      border-current border-t-transparent text-white rounded-full"
        role="status"
        aria-label="loading"
      ></span>
      Deleting
    </button>
  );
};

export default DeleteLoading;

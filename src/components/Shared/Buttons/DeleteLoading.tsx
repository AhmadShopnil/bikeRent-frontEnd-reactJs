const DeleteLoading = () => {
  return (
    <button
      type="button"
      className="flex justify-center items-center size-[20px] 
      text-sm font-medium rounded-full border border-transparent
       bg-red-600 text-white hover:bg-red-700 
    focus:outline-none focus:bg-red-700 disabled:opacity-50 
    disabled:pointer-events-none"
    >
      <span
        className="animate-spin inline-block size-3 border-[3px] border-current border-t-transparent text-white rounded-full"
        role="status"
        aria-label="loading"
      >
        {/* <span className="sr-only">Loading...</span> */}
      </span>
    </button>
  );
};

export default DeleteLoading;

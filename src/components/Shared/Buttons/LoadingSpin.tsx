const LoadingSpin = () => {
  return (
    <button
      type="button"
      className="flex justify-center items-center size-[20px] 
      text-sm font-medium rounded-full 
       bg-[#51B0E3] "
    >
      <span
        className="animate-spin inline-block size-3 border-[3px] border-current border-t-transparent text-white rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </span>
    </button>
  );
};

export default LoadingSpin;

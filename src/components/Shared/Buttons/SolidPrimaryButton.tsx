const SolidPrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <button
        className="py-2 px-4 inline-flex
               items-center gap-x-2 text-md font-medium
                rounded-lg border border-transparent bg-[#6AB9E2]
                 text-white hover:bg-[#51b0e3] focus:outline-none
                  
                  "
      >
        {children}
      </button>
    </>
  );
};

export default SolidPrimaryButton;

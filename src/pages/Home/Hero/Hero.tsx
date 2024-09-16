import BikeAnimation from "./BIkeAnimation";

const Hero = () => {
  return (
    <div
      className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8
      bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full
        rounded-md 
       dark:from-neutral-800 dark:via-neutral-900/0
        dark:to-neutral-900/0  "
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="grid grid-cols-1 gap-8">
          <h1
            className="block text-2xl font-bold text-gray-800 
            sm:text-4xl lg:text-5xl 
          lg:leading-tight dark:text-white"
          >
            Start your journey with{" "}
            <span className="text-[#6AB9E2]">Bike Rent</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          {/* <!-- Buttons --> */}

          {/* <!-- End Buttons --> */}
        </div>

        {/* Animation section */}
        <div className=" w-full ">
          <BikeAnimation></BikeAnimation>
        </div>
        {/* <!-- End Col --> */}
      </div>
    </div>
  );
};

export default Hero;

const OurSuccess = () => {
  return (
    <div>
      {/* <!-- Testimonials with Stats --> */}
      <div className=" py-2 lg:py-2 mx-auto">
        {/* <!-- Grid --> */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
          <div className="lg:col-span-5 lg:col-start-1">
            {/* <!-- Title --> */}
            <div className="mb-8">
              <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-neutral-200">
                It's all about Service
              </h2>
              <p className="text-gray-600 dark:text-neutral-400">
                We provide you with a test account that can be set up in
                seconds. Our main focus is getting responses to you as soon as
                we can.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Blockquote --> */}
            <blockquote className="relative">
              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  Amazing people to work with. Very fast and professional
                  partner.
                </p>
              </div>

              <footer className="mt-6">
                <div className="flex items-center gap-x-4">
                  <div className="shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow">
                    <div className="font-semibold text-gray-800 dark:text-neutral-200">
                      Abu Shaleh Ahamad Shopnil
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      Founder and Ceo | BikeRent
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- List --> */}
              <ul className="grid grid-cols-2 divide-y  divide-x  divide-gray-200 overflow-hidden dark:divide-neutral-700">
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                    1k+
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                    users - from all city
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                    30%
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                    decrease traffic problem
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                    9.3%
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                    boost in reply rates across sales outreach
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-neutral-200">
                    2x
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400">
                    faster than others
                  </p>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
  );
};

export default OurSuccess;

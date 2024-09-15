// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bikerent-ahmadshopnils-projects.vercel.app/api/",
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "bikes", "rentals"],
});

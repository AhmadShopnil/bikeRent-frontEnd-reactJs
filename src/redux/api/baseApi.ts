
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL = "https://server-bike-rent.vercel.app/api/";
// const BASE_URL = "http://localhost:5000/api/";


const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // Retrieve the token from localStorage 
    const token = localStorage.getItem("accessToken") || "";
   
    // Set the Authorization header if the token exists
    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["users", "bikes", "rentals", "profile"], 
});

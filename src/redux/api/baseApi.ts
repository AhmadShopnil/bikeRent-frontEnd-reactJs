import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your base URL
// const BASE_URL = "https://bikerent-ahmadshopnils-projects.vercel.app/api/";
const BASE_URL = "http://localhost:5000/api/";

// Create a base query with token handling
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // Retrieve the token from localStorage (or another secure source)
    // const token = localStorage.getItem("token") || "";
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmMyZWFmOGRhNzY5MjVkYzllY2U2YzMiLCJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNzI0MDUwMjEzLCJleHAiOjE3MjY2NDIyMTN9.fkdCvqE8-sIEjgl2cyvvJ_Kk5EoRW-2qg7Eey0eMMrA`;
    // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1Y2NjMDc3OWRhNmJhODc5MTI1NjciLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcyNjM5ODc0MiwiZXhwIjoxNzI4OTkwNzQyfQ.pn_rANpvWGowpJXHrpcWeFeT02JOXsBkJvCreKeB2Es`;

    // Set the Authorization header if the token exists
    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}), // Define your endpoints in other slices
  tagTypes: ["users", "bikes", "rentals", "profile"], // Define your tag types
});

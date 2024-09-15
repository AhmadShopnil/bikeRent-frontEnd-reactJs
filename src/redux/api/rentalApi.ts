import { baseApi } from "./baseApi";

const rentalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addRental: build.mutation({
      query: (data) => {
        return {
          url: "/rentals",
          method: "POST",
          contentType: "multipart/form-data",
          // contentType: "application/json",
          body: data,
        };
      },
      invalidatesTags: ["rentals"],
    }),
    getAllRentals: build.query({
      query: () => {
        return {
          url: "/rentals",
          method: "GET",
        };
      },
      providesTags: ["rentals"],
    }),
    getSingleRentalsById: build.query({
      query: (id) => {
        return {
          url: `/rentals/${id}`,
          method: "GET",
        };
      },
      providesTags: ["rentals"],
    }),
    //
    deleteRental: build.mutation({
      query: (id) => ({
        url: `/rentals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rentals"],
    }),
    //
  }),
});

export const {
  useAddRentalMutation,
  useDeleteRentalMutation,
  useGetAllRentalsQuery,
  useGetSingleRentalsByIdQuery,
} = rentalApi;

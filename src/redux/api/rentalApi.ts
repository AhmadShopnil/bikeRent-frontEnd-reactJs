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
    getMyAllRentals: build.query({
      query: () => {
        return {
          url: "/rentals/my",
          method: "GET",
        };
      },
      providesTags: ["rentals"],
    }),
    getAllRentals: build.query({
      query: () => {
        return {
          url: "/rentals/all",
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
    deleteSingleRental: build.mutation({
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
  useDeleteSingleRentalMutation,
  useGetMyAllRentalsQuery,
  useGetAllRentalsQuery,
  useGetSingleRentalsByIdQuery,
} = rentalApi;

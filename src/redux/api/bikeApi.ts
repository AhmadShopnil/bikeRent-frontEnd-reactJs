import { baseApi } from "./baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBike: build.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "POST",
          contentType: "multipart/form-data",
          // contentType: "application/json",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),

    getAllBikes: build.query({
      query: () => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),
    //
    deleteBike: build.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bikes"],
    }),
    //
  }),
});

export const {
  useAddBikeMutation,
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} = bikeApi;

import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          contentType: "multipart/form-data",
          // contentType: "application/json",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),

    getMyProfileBy: build.query({
      query: () => {
        return {
          url: `/users/me`,
          method: "GET",
        };
      },
      providesTags: ["profile"],
    }),
    //
    // deleteRental: build.mutation({
    //   query: (id) => ({
    //     url: `/rentals/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["rentals"],
    // }),
    //
  }),
});

export const { useGetMyProfileByQuery } = userApi;

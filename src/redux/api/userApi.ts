import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data) => {
        return {
          url: "/auth/signup",
          method: "POST",
          // contentType: "multipart/form-data",
          contentType: "application/json",
          body: data,
        };
      },
      // invalidatesTags: ["profile"],
    }),

    login: build.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          // contentType: "multipart/form-data",
          contentType: "application/json",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),

    getAllUsers: build.query({
      query: () => {
        return {
          url: `/users`,
          method: "GET",
        };
      },
      providesTags: ["profile"],
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

    //
  }),
});

export const {
  useGetMyProfileByQuery,
  useGetAllUsersQuery,
  useLoginMutation,
  useSignUpMutation,
} = userApi;

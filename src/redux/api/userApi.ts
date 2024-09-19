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
      providesTags: ["users"],
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
    makeAdmin: build.mutation({
      query: (id) => {
        return {
          url: `/users/makeAdmin/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["users"],
    }),
    //
    deleteSingleUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    //
  }),
});

export const {
  useGetMyProfileByQuery,
  useGetAllUsersQuery,
  useLoginMutation,
  useSignUpMutation,
  useMakeAdminMutation,
  useDeleteSingleUserMutation,
} = userApi;

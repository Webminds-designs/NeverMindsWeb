import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Teachers", "Students"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => "users/teachers",
      providesTags: ["Teachers"],
    }),
    getStudents: builder.query({
      query: () => "users/students",
      providesTags: ["Students"],
    }),
    getUserProfile: builder.query({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
      transformErrorResponse: (response) => {
        if (response.status === 401) {
          localStorage.removeItem("token");
        }
        return response;
      },
    }),
    updateStudentProfile: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `users/student/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        "Students",
      ],
    }),
    updateTeacherProfile: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `users/teacher/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        "Teachers",
      ],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teachers", "Students"],
    }),
  }),
});

// Hook to handle common auth issues like token expiration
export const useAuthenticatedProfile = (userId) => {
  const profileResult = userApi.useGetUserProfileQuery(userId, {
    skip: !userId,
  });

  // Handle authentication failures
  if (profileResult.error?.status === 401) {
    console.log("Authentication failed - please login again");
  }

  return profileResult;
};

export const {
  useGetTeachersQuery,
  useGetStudentsQuery,
  useGetUserProfileQuery,
  useUpdateStudentProfileMutation,
  useUpdateTeacherProfileMutation,
  useDeleteUserMutation,
} = userApi;

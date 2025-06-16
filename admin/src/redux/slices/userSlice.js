// src/redux/api/userApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/v1/users',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Get all teachers (admin only)
    getAllTeachers: builder.query({
      query: () => ({
        url: '/teachers',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // Get all students (admin only)
    getAllStudents: builder.query({
      query: () => ({
        url: '/students',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // Get user profile by ID (admin or student only)
    getUserProfile: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),

    // Update student profile (admin or student)
    updateStudentProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/student/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),

    // Update teacher profile (admin or teacher)
    updateTeacherProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/teacher/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),

    // Delete user (admin only)
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetAllStudentsQuery,
  useGetUserProfileQuery,
  useUpdateStudentProfileMutation,
  useUpdateTeacherProfileMutation,
  useDeleteUserMutation,
} = userApi;

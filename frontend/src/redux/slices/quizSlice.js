import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getAllQuizzes: builder.query({
      query: () => "quizzes",
      providesTags: ["Quiz"],
    }),
    getQuizById: builder.query({
      query: (id) => `quizzes/${id}`,
      providesTags: (result, error, id) => [{ type: "Quiz", id }],
    }),
    getFavoriteQuizzes: builder.query({
      query: (userId) => `quizzes/favorite/${userId}`,
      providesTags: ["Quiz"],
    }),
    addFavoriteQuiz: builder.mutation({
      query: (data) => ({
        url: "quizzes/favorite",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quiz"],
    }),
    removeFavoriteQuiz: builder.mutation({
      query: ({ userId, quizId }) => ({
        url: `quizzes/favorite/${userId}/${quizId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
    verifyQuizCode: builder.mutation({
      query: (data) => ({
        url: "quizzes/verify",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllQuizzesQuery,
  useGetQuizByIdQuery,
  useGetFavoriteQuizzesQuery,
  useAddFavoriteQuizMutation,
  useRemoveFavoriteQuizMutation,
  useVerifyQuizCodeMutation,
} = quizApi;

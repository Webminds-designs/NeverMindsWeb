import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5001/api/quizzes',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Quiz'],
    endpoints: (builder) => ({
        createQuiz: builder.mutation({
            query: (quizData) => ({
                url: '/',
                method: 'POST',
                body: quizData,
            }),
            invalidatesTags: ['Quiz'],
        }),
        getAllQuizzes: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['Quiz'],
        }),
        getQuizById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Quiz', id }],
        }),
        updateQuiz: builder.mutation({
            query: ({ id, quizData }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: quizData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Quiz', id }],
        }),
        deleteQuiz: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
        getAllQuizzesByStudentId: builder.query({
            query: (studentId) => ({
                url: `/student/${studentId}`,
                method: 'GET',
            }),
        }),
        getAllQuizzesByTeacherId: builder.query({
            query: (teacherId) => ({
                url: `/teacher/${teacherId}`,
                method: 'GET',
            }),
        }),
        getAllMarksByTeacherIdQuizId: builder.query({
            query: ({ teacherId, quizId }) => ({
                url: `/teacher/${teacherId}/${quizId}`,
                method: 'GET',
            }),
        }),
        addFavouriteQuiz: builder.mutation({
            query: (data) => ({
                url: `/favourite`,
                method: 'POST',
                body: data,
            }),
        }),
        getFavouriteQuizByUserId: builder.query({
            query: (userId) => ({
                url: `/favourite/${userId}`,
                method: 'GET',
            }),
        }),
        removeFavouriteQuiz: builder.mutation({
            query: ({ userId, quizId }) => ({
                url: `/favourite/${userId}/${quizId}`,
                method: 'DELETE',
            }),
        }),
        removeAllFavouriteQuizByUserId: builder.mutation({
            query: (userId) => ({
                url: `/favourite/${userId}`,
                method: 'DELETE',
            }),
        })
    }),
});

export const { 
    useCreateQuizMutation,
    useGetAllQuizzesQuery,
    useGetQuizByIdQuery,
    useUpdateQuizMutation,
    useDeleteQuizMutation,
    useGetAllQuizzesByStudentIdQuery,
    useGetAllQuizzesByTeacherIdQuery,
    useGetAllMarksByTeacherIdQuizIdQuery,
    useAddFavouriteQuizMutation,
    useGetFavouriteQuizByUserIdQuery,
    useRemoveFavouriteQuizMutation,
    useRemoveAllFavouriteQuizByUserIdMutation    
} = quizApi;
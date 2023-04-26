import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-crud-three.vercel.app/api/tasks",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/",
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/",
        method: "POST",
        body: newTask,
      }),
    }),
    updateTask: builder.mutation({
      query: (updatedTask) => ({
        url: `/${updatedTask._id}`,
        method: "PUT",
        body: updatedTask,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi


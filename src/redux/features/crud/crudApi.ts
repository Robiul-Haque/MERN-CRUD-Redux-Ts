import { baseApi } from "../../api/baseApi";

const crudApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        AddCrud: builder.mutation({
            query: (data) => ({
                url: "/crud/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["todo"]
        }),
        getAllCrud: builder.query({
            query: () => ({
                url: "/crud/get-all",
                method: "GET",
            }),
            providesTags: ["todo"]
        }),
        getSingleCrud: builder.query({
            query: (id) => ({
                url: `/crud/get-single-crud/${id}`,
                method: "GET",
                // params: id,
            }),
            providesTags: ["todo"]
        }),
        updateSingleCrud: builder.mutation({
            query: (args: { id: string, data: object }) => ({
                url: `/crud/update/${args?.id}`,
                method: "PUT",
                body: args?.data,
            }),
            invalidatesTags: ["todo"]
        }),
        deleteSingleCrud: builder.mutation({
            query: (id) => ({
                url: `/crud/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["todo"]
        })
    })
});

export const { useAddCrudMutation, useGetAllCrudQuery, useGetSingleCrudQuery, useUpdateSingleCrudMutation, useDeleteSingleCrudMutation } = crudApi;
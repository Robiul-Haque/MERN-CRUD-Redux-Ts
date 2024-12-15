import { baseApi } from "../../api/baseApi";

const crudApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCrud: builder.query({
            query: () => ({
                url: "/crud/get-all",
                method: "GET",
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
    })
});

export const { useGetAllCrudQuery, useUpdateSingleCrudMutation } = crudApi;
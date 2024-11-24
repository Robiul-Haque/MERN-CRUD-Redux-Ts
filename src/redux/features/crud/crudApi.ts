import { baseApi } from "../../api/baseApi";

const crudApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCrud: builder.query({
            query: () => ({
                url: "/crud/get-all",
                method: "GET",
            })
        })
    })
});

export const { useGetAllCrudQuery } = crudApi;

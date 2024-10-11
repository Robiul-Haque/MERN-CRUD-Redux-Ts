import { baseApi } from "../../api/baseApi";

const crudApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCrud: builder.query({
            query: () => ({
                url: "/get-all",
                method: "GET",
            })
        })
    })
});

export const { useGetAllCrudQuery } = crudApi;

import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) headers.set("authorization", token);
        return headers;
    }
});

const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log(result);
    const res = await fetch("http://localhost:8000/api/v1/crud/get-all");
    const data = await res.json();
    console.log("get all crud", data);
    if (result.error && (result.error as FetchBaseQueryError).status === 401) {
        console.log('Access token expired. Trying refresh token...');
    }
    return result;
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
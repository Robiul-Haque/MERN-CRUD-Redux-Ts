import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://crud-with-mongoose-ts.vercel.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        // Get the token from state and send it header authorization in every request
        const token = (getState() as RootState).auth.token;
        if (token) headers.set("authorization", token);

        return headers;
    }
});

const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions);
    
    // If the request is unauthorized, check if the refresh token is expired and try to refresh it
    if ((result as any).error?.data?.error?.statusCode === 401) {
        // Sending refresh token
        const res = await fetch("https://crud-with-mongoose-ts.vercel.app/api/v1/auth/refresh-token", {
            method: "POST",
            credentials: "include"
        });
        const data = await res.json();

        if (data?.data?.accessToken) {
            // Set the new access token in the user state
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(setUser({
                user,
                token: data?.data?.accessToken
            }));

            result = await baseQuery(args, api, extraOptions);
        } else {
            // Logout the user if refresh token is expired
            api.dispatch(logout());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["user", "todo"],
    endpoints: () => ({}),
});
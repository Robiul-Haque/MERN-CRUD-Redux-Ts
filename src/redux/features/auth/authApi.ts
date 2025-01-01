import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: `/auth/sign-in?email=${userInfo.email}&password=${userInfo.password}`,
                method: "POST",
            })
        }),
        signUp: builder.mutation({
            query: (userInfo) => ({
                url: "/user/signup",
                method: "POST",
                body: userInfo,
            })
        })
    })
});

export const { useLoginMutation, useSignUpMutation } = authApi;
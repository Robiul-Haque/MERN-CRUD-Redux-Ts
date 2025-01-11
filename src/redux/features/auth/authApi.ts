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
            query: (NewUserData) => ({
                url: "/user/signup",
                method: "POST",
                body: NewUserData,
            })
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: `/auth/forget-password/${email}`,
                method: "POST",
            })
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: data
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: data
            })
        }),
    })
});

export const { useLoginMutation, useSignUpMutation, useForgotPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation } = authApi;
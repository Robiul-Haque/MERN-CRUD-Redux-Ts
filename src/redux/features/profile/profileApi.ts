import { baseApi } from "../../api/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (bulder) => ({
        getProfile: bulder.query({
            query: (email) => ({
                url: `/user/get-single-user/${email}`,
                method: "GET",
            }),
            providesTags: ["user"]
        }),
        updateUser: bulder.mutation({
            query: (payload) => ({
                url: `/user/user-data-update/${payload?.email}`,
                method: "PUT",
                body: payload?.data,
            }),
            invalidatesTags: ["user"]
        }),
    })
});

export const { useGetProfileQuery, useUpdateUserMutation } = profileApi;
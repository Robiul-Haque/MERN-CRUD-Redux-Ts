import { baseApi } from "../../api/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (bulder) => ({
        getProfile: bulder.query({
            query: (email) => ({
                url: `/user/get-single-user/${email}`,
                method: "GET",
            })
        }),
        updateUser: bulder.mutation({
            query: (payload) => ({
                url: `/user/user-data-update/${payload?.email}`,
                method: "PUT",
                body: payload?.data,
            })
        }),
    })
});

export const { useGetProfileQuery, useUpdateUserMutation } = profileApi;
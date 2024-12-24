import { baseApi } from "../../api/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (bulder) => ({
        getProfile: bulder.query({
            query: (email) => {
                console.log("From profile get api: ",email);
                return {
                    url: `/user/get-single-user/${email}`,
                    method: "GET",
                }
            }
        })
    })
});

export const { useGetProfileQuery } = profileApi;
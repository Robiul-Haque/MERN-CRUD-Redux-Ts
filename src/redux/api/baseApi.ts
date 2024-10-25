import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token || localStorage.getItem('persist:auth');;
        console.log("Form baseApi: ", token);
        if (token) headers.set("authorization", token);
        return headers;
    }
});

const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    // const res = await fetch("http://localhost:8000/api/v1/crud/get-all");
    // const data = await res.json();
    // console.log("get all crud", data);
    // if (data?.error?.statusCode === 401) {
    //     console.log(false);
    // }
    // if (result.error && (result.error as FetchBaseQueryError).status === 401) {
    //     console.log('Access token expired. Trying refresh token...');
    // }
    return result;
    // export default function useAxios() {
    //     const { auth, setAuth } = useAuth();
    //     const navigate = useNavigate();

    //     useEffect(() => {
    //       // Request interceptor
    //       const requestIntercept = api.interceptors.request.use(
    //         (config) => {
    //           const accessToken = auth?.token?.accessToken;
    //           if (accessToken) {
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://165.232.147.36:5000/api/v1"
    }),
    endpoints: () => ({})
});

export const imageUrl = "http://165.232.147.36:5000";
// export const imageUrl = "http://192.168.10.185:5000";
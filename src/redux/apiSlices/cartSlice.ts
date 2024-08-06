import { api } from "../api/baseApi";

const cartSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (data) => {

                return data;
            }
        })
    })
});

export const {
    
} = cartSlice;
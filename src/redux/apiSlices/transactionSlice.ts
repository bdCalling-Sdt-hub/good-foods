import { api } from "../api/baseApi";

const transactionsSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        menuTransactionUpdate: builder.mutation({
            query: (id) => {
                return{
                    method: "PATCH",
                    url: `/order/status-update/${id}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
                    }
                }
            }
        }),
        menuTransaction: builder.query({
            query: ({page, search}) => {
                const params = new URLSearchParams();
                if(page) params.append("page", page);
                if(search) params.append("search", search);
                return{
                    method: "GET",
                    url: `/order?${params.toString()}`,
                }
            }
        }),
        mealTransactionUpdate: builder.mutation({
            query: (id) => {
                return{
                    method: "PATCH",
                    url: `/order/status-update/${id}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
                    }
                }
            }
        }),
        mealTransaction: builder.query({
            query: ({page, search}) => {
                const params = new URLSearchParams();
                if(page) params.append("page", page);
                if(search) params.append("search", search);
                return{
                    method: "GET",
                    url: `/order?${params.toString()}`,
                }
            }
        }),
    })
});

export const { useMealTransactionQuery, useMenuTransactionQuery, useMealTransactionUpdateMutation, useMenuTransactionUpdateMutation } = transactionsSlice;
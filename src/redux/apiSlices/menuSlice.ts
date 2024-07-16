import { api } from "../api/baseApi";

const menuSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        createMenu: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/products/create-product",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
                    }
                }
            }
        }),
        menu: builder.query({
            query: (filter) => {
                const params = new URLSearchParams();
                if(filter) params.append("category", filter);
                return{
                    method: "GET",
                    url: `/products?${params.toString()}`
                }
            }
        }),
        menuDetails: builder.query({
            query: (id) => {
                return{
                    method: "GET",
                    url: `/user/profile/${id}`
                }
            }
        }),
        deleteMenu: builder.mutation({
            query: (id) => {
                return{
                    method: "DELETE",
                    url: `/user/profile/${id}`
                }
            }
        }),
        updateMenu: builder.mutation({
            query: ({id, data}) => {
                return{
                    method: "PATCH",
                    url: `/user/profile/${id}`,
                    body: data
                }
            }
        }),
    })
});

export const {
    useCreateMenuMutation, 
    useMenuQuery,
    useMenuDetailsQuery,
    useDeleteMenuMutation,
    useUpdateMenuMutation
} = menuSlice;
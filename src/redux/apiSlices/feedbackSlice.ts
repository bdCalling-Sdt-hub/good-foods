import { api } from "../api/baseApi";

const feedbackSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        putFeedback: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/user",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
                    }
                }
            }
        }),
        getFeedback: builder.query({
            query: (filter) => {
                const params = new URLSearchParams();
                if(filter) params.append("category", filter);
                return{
                    method: "GET",
                    url: `/user/profile?${params.toString()}`,
                }
            }
        }),
        publishFeedback: builder.mutation({
            query: () => {
                return{
                    method: "PATCh",
                    url: `/user/profile`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
                    }
                }
            }
        })
    })
});

export const {
   useGetFeedbackQuery,
   usePutFeedbackMutation,
   usePublishFeedbackMutation
} = feedbackSlice;
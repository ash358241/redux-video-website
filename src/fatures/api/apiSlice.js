import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/"
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos',
            keepUnusedDataFor: 10,
        }),
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                // ?title_like=react&title_like=java&_limit=1
                const tags = title.split(" ")
                const likes = tags.map(tag => `title_like=${tag}`)
                const queryString = `videos/?${likes.join("&")}&_limit=4`
                return queryString;
            },
            keepUnusedDataFor: 10,
        }),
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: "POST",
                body: data
            })
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE",
            })
        }),
        editVideo: builder.mutation({
            query: ({id, data}) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data
            })
        })
    })
})

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation, useDeleteVideoMutation, useEditVideoMutation } = apiSlice;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = '34ebe4130amsh3144e59f91a17c0p102829jsn87a2788a583a'; // Replace with your actual API key

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", rapidApiKey);
            headers.set("X-RapidAPI-Host", 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=10`,
            onError: (error) => {
                console.error('An error occurred:', error);
                // Handle error (e.g., show error message to user)
                throw error; // Rethrow the error to propagate it
            }
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;

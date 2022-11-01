import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1', 
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '81090b7d49msh8e8fb5169750255p12a38ejsn5c698545cc3c')

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    });

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
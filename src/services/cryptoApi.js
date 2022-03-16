import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8bc9b54f18mshe7025ea51eaf3ccp1d7f93jsnaab3c68efaa4'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        GetCryptos: builder.query({ 
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        GetCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery, 
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;
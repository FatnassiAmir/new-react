import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': '8bc9b54f18mshe7025ea51eaf3ccp1d7f93jsnaab3c68efaa4'
  }

const baseUrl = 'https://api-football-beta.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders, params: {season: '2019', league: '39'} });

export const cryptoTestApi = createApi({ 
    reducerPath: 'cryptoTestApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        GetCryptoTest: builder.query({
            query: () => createRequest(`/players/topscorers`)
        })
    })
});

export const {
    useGetCryptoTestQuery,
} = cryptoTestApi;
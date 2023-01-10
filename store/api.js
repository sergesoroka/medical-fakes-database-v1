import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakesApi = createApi({
  reducerPath: 'fakesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://medfakes-cms.herokuapp.com/' }),
  endpoints: (builder) => ({
    getFakesByName: builder.query({
      query: (name) => `api/${name}`,
    }),
  }),
})

export const { useGetFakesByNameQuery } = fakesApi
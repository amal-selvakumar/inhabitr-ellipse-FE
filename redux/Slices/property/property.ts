import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300' }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => 'property',
    }),
  }),
});

export const { useGetPropertiesQuery } = propertyApi;
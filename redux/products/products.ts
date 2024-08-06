import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'furniture',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
import { API_PATH } from '@/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'furniture',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
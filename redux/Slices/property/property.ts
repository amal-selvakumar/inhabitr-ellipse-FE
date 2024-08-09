import { API_PATH } from '@/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => 'property',
    }),
  }),
});

export const { useGetPropertiesQuery } = propertyApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/apis';



export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    userUpdate: builder.mutation({
      query: (query) => ({
        url: '/users/single',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH'
      }),

    }),



  })
});

export const { useUserUpdateMutation } = userApi;


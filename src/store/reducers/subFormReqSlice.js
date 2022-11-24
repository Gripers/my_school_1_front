import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subFormReqSlice = createApi({
  reducerPath: 'subFormReqSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}`,
  }),
  tagTypes: ['Form'],
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (payload) => ({
        url: `/sendMessage?chat_id=${
          process.env.NEXT_PUBLIC_CHAT_ID
        }&text=${encodeURIComponent(payload)}&parse_mode=html`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = subFormReqSlice;

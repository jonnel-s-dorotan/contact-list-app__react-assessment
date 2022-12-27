import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IContact from '../../../@types/contact'

export const contactApiSlice = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query<IContact[], string | void>({
      query: () => '/contacts',
    }),
    getContact: builder.query<IContact[], string | void>({
      query: (id) => `/contacts/${id}`,
    }),
  }),
})

export const { useGetAllContactsQuery, useGetContactQuery } = contactApiSlice

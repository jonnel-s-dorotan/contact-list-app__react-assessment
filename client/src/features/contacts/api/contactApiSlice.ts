import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IContact from 'types/contactType'

export const contactApiSlice = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getAllContacts: builder.query<IContact[], string | void>({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getContact: builder.query<IContact[], string | void>({
      query: (id) => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: (contact) => ({
        url: `/contacts/${contact._id}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (_id) => ({
        url: `/contacts/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
})

export const {
  useGetAllContactsQuery,
  useGetContactQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApiSlice

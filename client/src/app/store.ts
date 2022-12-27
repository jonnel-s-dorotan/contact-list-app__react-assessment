import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { contactApiSlice } from '../features/contacts/api/contactApiSlice'

export const store = configureStore({
  reducer: {
    [contactApiSlice.reducerPath]: contactApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

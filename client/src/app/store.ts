import { configureStore } from '@reduxjs/toolkit'
import globalReducer from 'features/global/api/globalSlice'
import { contactApiSlice } from 'features/contacts/api/contactApiSlice'

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
    [contactApiSlice.reducerPath]: contactApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

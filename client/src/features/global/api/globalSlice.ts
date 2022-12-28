import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import IContact from 'types/contactType'
import IGlobal from 'types/globalType'

const contactDetails = {
  _id: '',
  name: '',
  email: '',
  contactNumber: '',
  createdAt: '',
  updatedAt: '',
}

const initialState: IGlobal = {
  isUpdate: false,
  contactDetails,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setInputsForCreate(state) {
      state.isUpdate = false
      state.contactDetails = contactDetails
    },
    setInputsForUpdate(state, action: PayloadAction<IContact>) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })

      state.isUpdate = true
      state.contactDetails = action.payload
    },
  },
})

export const { setInputsForCreate, setInputsForUpdate } = globalSlice.actions
export default globalSlice.reducer

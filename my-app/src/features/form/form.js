import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  },
  reducers: {}
})

export default formSlice.reducer
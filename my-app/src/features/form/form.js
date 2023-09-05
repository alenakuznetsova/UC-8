import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    errors: {}
  },
  reducers: {}
});

export default formSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  },
  reducers: {
     submit: (state, action) => {
      state = {
        ...action.payload
      }
    }
  }
});

export const { submit } = formSlice.actions;

export const submitAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(submit(amount))
  }, 1000)
}

export default formSlice.reducer;
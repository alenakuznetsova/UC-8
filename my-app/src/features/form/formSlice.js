import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    submited: false
  },
  reducers: {
     submit: (state, action) => ({
      ...state,
      fields: { ...action.payload },      
      submited: true
    })
  }
});

export const fieldsForm = (state) => state.form.fields;
export const isSubmitedForm = (state) => state.form.submited;

export const { submit } = formSlice.actions;

export default formSlice.reducer;
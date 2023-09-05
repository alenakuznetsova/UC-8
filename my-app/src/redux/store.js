import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/form';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
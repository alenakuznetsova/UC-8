import { useEffect, useState } from 'react';
import validator from 'validator';
import './style.css';

import { useDispatch } from 'react-redux'
import { submit } from '../../features/form/formSlice';

const Input = ({ forLabel, labelText, type, id, handleOnChange }) => {
  return (
    <div>
      <label htmlFor={forLabel}>{labelText}</label>
      <input name={id} type={type} id={id} onChange={handleOnChange} />
    </div>
  )
};

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const Form = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    fields: { ...initialState },
    errors: {},
    isValid: false
  });
  
  const validationSchema = {
    firstName: validator.isLength(formState.fields.firstName, 1),
    lastName: validator.isLength(formState.fields.lastName, 1),
    email: validator.isEmail(formState.fields.email),
    message: validator.isLength(formState.fields.message, 10),
  };

  const handleOnChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [e.target.name]: e.target.value
      },
    }));
  };

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.error,
        ...validationSchema
      },
      isValid: Object.values(formState?.errors).some(val => val === false)
    }));

  }, [formState.fields]);

  const handleSubmit = () => {
    dispatch(submit(formState.fields));
  };

  return (
    <form>
      <Input
        id='firstName'
        forLabel='firstName'
        labelText='Enter first name:'
        type='text'
        handleOnChange={handleOnChange}
      />
      <Input
        id='lastName'
        forLabel='lastName'
        labelText='Enter last name:'
        type='text'
        handleOnChange={handleOnChange}
      />
      <Input
        id='email'
        forLabel='email'
        labelText='Enter your email:'
        type='email'
        handleOnChange={handleOnChange}
      />
      <Input
        id='message'
        forLabel='message'
        labelText='Enter your message:'
        type='text'
        handleOnChange={handleOnChange}
      />
      <button
        type='button'
        disabled={formState.isValid}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
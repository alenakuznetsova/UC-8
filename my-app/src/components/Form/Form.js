import { useEffect, useState } from 'react';
import validator from 'validator';
import './style.css';

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
  const [formState, setFormState] = useState({
    fields: { ...initialState },
    errors: {},
  });
  
  const validationSchema = {
    firstName: validator.isLength(formState.fields.firstName, 1),
    lastName: validator.isLength(formState.fields.lastName, 1),
    email: validator.isEmail(formState.fields.email),
    message: validator.isLength(formState.fields.message, 10),
  };

  const handleOnChange = (e) => {
    setFormState((prevState) => ({
      fields: {
        ...prevState.fields,
        [e.target.name]: e.target.value
      },
    }));
  };

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      error: {
        ...prevState.error,
        ...validationSchema
      }
    }))
  }, [formState.fields]);
  
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
export const Input = ({ forLabel, labelText, type, id, handleOnChange }) => {
  return (
    <div>
      <label htmlFor={forLabel}>{labelText}</label>
      <input name={id} type={type} id={id} onChange={handleOnChange} />
    </div>
  )
};

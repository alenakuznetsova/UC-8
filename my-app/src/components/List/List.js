import { useSelector } from 'react-redux';
import { fieldsForm } from '../../features/form/formSlice';

const List = () => {
  const formData = useSelector(fieldsForm);

  return (
    <>
      <h1>Submited data:</h1>
      <ul>
        {Object.entries(formData).map(([key, value]) => 
          <li key={key}>{key}: {value}</li>
        )}
      </ul>
    </>
  )
};

export default List;
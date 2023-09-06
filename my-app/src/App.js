import Form from './components/Form/Form';
import List from './components/List/List';
import { useSelector } from 'react-redux';
import { isSubmitedForm } from './features/form/formSlice';
import './App.css';

function App() {
  const isSubmited = useSelector(isSubmitedForm);
  return (
    <div className="App">
      <Form />
      {isSubmited && <List />}
    </div>
  );
}

export default App;

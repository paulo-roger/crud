import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();

  const handleChangedValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  };

  return (
    <div className="app-container">
      <div className='register-container'>
        <h1>Registro Vileco</h1>
        <input 
        type='text'
        name='name'
        placeholder='Nome'
        className='register-input'
        onChange={handleChangedValues}
        />
        <input 
        type='text'
        name='surname'
        placeholder='Sobrenome'
        className='register-input'
        onChange={handleChangedValues}
        />
        <button className='register-input' onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;

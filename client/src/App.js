import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/cards/card.js'

function App() {
  const [values, setValues] = useState();
  const [listUsers, allUsers] = useState();

  const handleChangedValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      surname: values.surname,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getcard").then((response) => {
    allUsers(response.data);
  });
  },[]);

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
      {typeof listUsers !== "undefined" && listUsers.map((value) => {
        return (
          <Card 
            key={value.id}
            listCard={listUsers}
            setListCard={allUsers}
            id={value.id}
            name={value.name}
            surname={value.surname}          
          ></Card>
        )
      })}
    </div>
  );
};

export default App;

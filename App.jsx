
//sin usar useMemo

 //import "App.css"
import React, { useState } from 'react';

const expensiveFunction = (inputValue) => {
  let expensiveValue = inputValue * 42;
  
  let counter = 0
  for(let i = 0; i < 1_000_000; i++){
    counter++;
  }

  expensiveValue = 'World'
  
  return expensiveValue;
};

const App = ({ something }) => {
  const [inputValue, setInputValue] = useState('');
  console.log("antes:", new Date().getTime())
  const expensiveValue = expensiveFunction(inputValue);
  console.log("despues:", new Date().getTime())
  return <h1>Hello {expensiveValue}</h1>;

};


//Utilizando el memo

import {useMemo } from 'react';

const expensiveFunction2 = (inputValue) => {
  let expensiveValue = inputValue * 42;
  
  let counter = 0
  for(let i = 0; i < 1_000_000; i++){
    counter++;
  }

  expensiveValue = 'World'
  
  return expensiveValue;
};

const App2 = ({ something }) => {
  const [inputValue, setInputValue] = useState('');
  console.log("antes:", new Date().getTime())
  const expensiveValue = useMemo (
    () => expensiveFunction2(inputValue),
    [ inputValue ]
  );
  console.log("despues:", new Date().getTime())
  return <h1>Hello {expensiveValue}</h1>;

};

export default App

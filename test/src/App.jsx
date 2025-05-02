import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'
import MyButton2 from './MyButton2'
import Card from './Card'


function Frase() {
  return <p>Parrafo 1</p>
}

const MiParrafo2 = () => <p>Parrafo 2</p>

function MisParrafos() {
  return (
    <>
    <p id="1" >Texto1</p>
    {/* Clases en react es con className */}
    <p className="p2" >Texto2</p>
    <p style={{color:" red"}} >Texto3</p>  
    </>

  );
}


function App() {
  return (
    <>
      <Frase />

      <MiParrafo2 />

      <MisParrafos/>

      <Card title='Pikachu'
            description= 'Pika Pika'
      />
    </>

  )
}

export default App

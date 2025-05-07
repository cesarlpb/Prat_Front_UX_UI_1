import './App.css'
import Contador from './ContadorUseTransition';


const App = () => {
  return (
    <>
    <div id='description'>
      <h1>Use Transition</h1>
      <p>useTransition es un hook de React que permite renderizar una parte de la interfaz de usuario en segundo plano.</p>
    </div>
       <Contador /> 
    </>
  );
};

export default App;

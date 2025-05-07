import { useCallback, useState } from 'react'
import './App.css'

  function App() {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState('Hola');
  
    // useCallback evita que se cree una nueva referencia en cada render
    const incrementar = useCallback(() => {
      setContador((prev) => prev + 1);
    }, []);
  
    return (
      <div>
        <h1>Contador: {contador}</h1>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
  
        {/* Aunque la función está memoizada, el hijo se renderiza igual */}
        <button onClick={incrementar}>incrementar</button>
      </div>

    );
  }
  
  export default App;

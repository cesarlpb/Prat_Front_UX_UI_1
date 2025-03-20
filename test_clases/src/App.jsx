import { useState, useEffect } from 'react'
import './App.css'

let url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

function App() {
  // State to store pokemons
  const [pokemons, setPokemons] = useState([]);

  // useEffect to fetch pokemons when the component mounts
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemons(data.results));  // Update state with fetched pokemons
  }, []);  // Empty dependency array means this runs only once when the component mounts

  // Render the pokemons or a loading message
  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

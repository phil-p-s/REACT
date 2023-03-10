import { useState } from "react";
import Pokemon from './pokeGetter';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const pokemonName = event.target[0].value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((body) => body.json())
      .then((json) => {
        console.log(json);
        setPokemon([...pokemon, json]);
      });
  };

  return (
    <>
      <div>
        <div>
        <h1>Pokemon Cards</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pname">Pokemon Name:</label><br></br>
          <input type="text" placeholder="Pokemon name..." /><br></br><br></br>
          <button type="submit">Add</button>
           </form>
      </div>
        <div id="root" className = "pokecards">
        {pokemon.map((pname)=>(
          <Pokemon poke={pname}/>
        ))}
        </div>
  
    </>
  );
}

export default App;

import './App.css';
import MyTitle from "./components/MyTitle";
import PokemonCard from './components/PokemonCard';
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  // const pokemon = pokemonList[0];
  const [pokemonIndex, setPokemonIndex] = useState(0);


  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const handleClick1 = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <div className="App">
      <MyTitle />
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc} />

      <div>
        <button onClick={handleClick1}>Précédent</button>
        <button onClick={handleClick}>Suivant</button>
      </div>
    </div>
  )
}


export default App;

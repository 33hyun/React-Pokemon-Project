import { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  const [addedPokemons, setAddedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (!addedPokemons.some((p) => p.id === pokemon.id)) {
      setAddedPokemons([...addedPokemons, pokemon]);
    }
  };

  return (
    <div>
      <Dashboard addedPokemons={addedPokemons} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
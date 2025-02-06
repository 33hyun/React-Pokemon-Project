import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex({ addedPokemons, setAddedPokemons }) {
  const addPokemon = (pokemon) => {
    setAddedPokemons((prev) => {
      if (prev.length >= 6) {
        alert("6마리까지만 추가 가능합니다.");
        return prev;
      }
      if (prev.some((p) => p.id === pokemon.id)) {
        alert("이미 추가된 포켓몬입니다.");
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  return (
    <div>
      <Dashboard addedPokemons={addedPokemons} setAddedPokemons={setAddedPokemons} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
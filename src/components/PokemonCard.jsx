import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const AddButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const PokemonCard = ({ pokemon, addPokemon }) => {
  return (
    <Card>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
      <AddButton onClick={() => addPokemon(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;
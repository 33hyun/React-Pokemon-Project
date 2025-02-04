import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 20px;
  margin: 0 auto; 
  height: 100vh;
  max-width: 1200px;
`;

const PokemonList = () => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          korean_name={pokemon.korean_name}
          img_url={pokemon.img_url}
          types={pokemon.types}
          id={pokemon.id}
          description={pokemon.description}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
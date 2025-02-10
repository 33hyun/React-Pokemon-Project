import styled from "styled-components";
import PropTypes from 'prop-types';
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12.8px;
  justify-content: center;
  border: 7px solid;
  border-radius: 20px;
  border-color:#3d4baa;
  margin-top: 23px;
`;

const PokemonList = ({ addPokemon }) => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
      ))}
    </ListContainer>
  );
};
PokemonList.propTypes = {
  addPokemon: PropTypes.func.isRequired,
};

export default PokemonList;
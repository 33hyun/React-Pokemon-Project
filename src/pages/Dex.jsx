import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const DexContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

function Dex() {
  return (
    <DexContainer>
      <h1>포켓몬 도감</h1>
      <PokemonList />
    </DexContainer>
  );
}

export default Dex;
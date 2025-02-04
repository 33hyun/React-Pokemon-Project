import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  margin: 0 auto;
  height: 350px;
  width: 97%;
`;

const Title = styled.h2`
  text-align: center;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 45px;
  justify-content: center;
  margin-left: 40px;
`;

const Dashboard = ({ addedPokemons }) => {
  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <ListContainer>
        {addedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
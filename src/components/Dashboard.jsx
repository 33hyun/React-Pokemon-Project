import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #eff9c0;
  border-radius: 10px;
  margin: 0 auto;
  height: 370px;
  width: 96%;
  border: 8px solid #000;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Lgi7lYjNpDWUpYD37K84mT-QVcvN-8Q_8w&s');
  background-size: cover %;
  background-position: center;
`;

const Title = styled.h2`
  margin-top: 10px;
  text-align: center;
  color: black;
  text-shadow: 1px 1px 2px #000;
  font-size: 30px;
`;

const BallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-left: 30px;
`;

const PokeballSlot = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
`;

const PokeballImage = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0px;
`;

const Dashboard = ({ addedPokemons, setAddedPokemons }) => {
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

  // 포켓몬 삭제 기능
  const removePokemon = (id) => {
    setAddedPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
    console.log(removePokemon);
  };

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        {new Array(6).fill(null).map((_, index) => (
          <PokeballSlot key={index}>
            <PokeballImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/440px-Pokebola-pokeball-png-0.png"
              alt="pokeball"
            />
            {addedPokemons[index] && (
              <CardContainer>
                <PokemonCard
                  pokemon={addedPokemons[index]}
                  removePokemon={removePokemon}
                  isDashboard={true}
                />
              </CardContainer>
            )}
          </PokeballSlot>
        ))}
      </BallContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
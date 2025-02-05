import { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background:#eff9c0;
  border-radius: 10px;
  margin: 0 auto;
  height: 370px;
  width: 97%;
`;

const Title = styled.h2`
  margin-top: 10px;
  text-align: center;
  color: red;
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
  margin-left: 80px;
`;

const PokeballSlot = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
`;

const Dashboard = ({ addedPokemons }) => {
  const slots = new Array(6).fill(null);
  if (addedPokemons.length > 6) {
    alert("포켓몬은 최대 6마리까지만 추가할 수 있습니다.");
  } 

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        {slots.map((_, index) => (
          <PokeballSlot key={index}>
            <PokeballImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/440px-Pokebola-pokeball-png-0.png" alt="pokeball" />
            {addedPokemons[index] && (
              <CardContainer>
                <PokemonCard pokemon={addedPokemons[index]} />
              </CardContainer>
            )}
          </PokeballSlot>
        ))}
      </BallContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

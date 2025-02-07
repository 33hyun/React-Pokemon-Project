import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ActionButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonCard = ({ pokemon, addPokemon, removePokemon, isDashboard }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
      <ActionButton
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지
          isDashboard ? removePokemon(pokemon.id) : addPokemon(pokemon);
        }}
      >
        {isDashboard ? "삭제" : "추가"}
      </ActionButton>
    </Card>
  );
};

export default PokemonCard;
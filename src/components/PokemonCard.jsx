import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  width: 180px;
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;

const PokemonName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const AddButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: darkred;
  }
`;

const PokemonCard = ({ korean_name, img_url, id }) => {
  return (
    <Card>
      <PokemonImage src={img_url} alt={korean_name} />
      <PokemonName>{korean_name}</PokemonName>
      <p>No. {id}</p>
      <AddButton>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;
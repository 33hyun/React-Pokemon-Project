import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  width: 150px;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

function PokemonCard({ name, image }) {
  return (
    <Card>
      <PokemonImage src={image} alt={name} />
      <h3>{name}</h3>
    </Card>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PokemonCard;
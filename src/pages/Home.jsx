import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-image: url('https://us.v-cdn.net/6034460/uploads/XW64VDWTOOOT/game-card-community-en.png');
  background-size: cover;
  background-position: center;
  height: 98.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StartButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  font-size: 20px; 
  padding: 20px 40px;
  width: 60%;  
  max-width: 500px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  margin-top: 655px;
  text-align: center;

  &:hover {
    background-color: #ffaa00;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
}

export default Home;
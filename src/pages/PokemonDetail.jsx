import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ID가 숫자 또는 문자열인지 확인 후 변환
  const pokemon = MOCK_DATA.find((p) => p.id == id);

  useEffect(() => {
    // 페이지 새로고침 방지
    if (location.state && location.state.fromDashboard) {
      console.log("이전 페이지에서 온 경우 상태 유지");
    }
  }, [location]);

  // pokemon이 존재하지 않으면 에러 방지
  if (!pokemon) {
    return (
      <Container>
        <h2>해당 포켓몬을 찾을 수 없습니다.</h2>
        <BackButton onClick={() => navigate(-1, { state: { fromDetail: true } })}>
          뒤로 가기
        </BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{pokemon.korean_name}</h1>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>타입: {pokemon.types ? pokemon.types.join(", ") : "정보 없음"}</p>
      <p>설명: {pokemon.description}</p>
      <BackButton onClick={() => navigate(-1, { state: { fromDetail: true } })}>
        뒤로 가기
      </BackButton>
    </Container>
  );
}

export default PokemonDetail;
나만의 Pokemon Dex 만들기

소개 
Home page와 Dex page를 추가 한 후 Home.jsx에 "포켓몬 도감 시작하기" 버튼을 추가하여 도감 페이지(/dex)로 이동할 수 있도록 구성합니다.
MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여줍니다.
addPokemon 함수를 사용해 포켓몬을 선택할 수 있도록 하고, 선택된 포켓몬이 Dashboard에 추가되도록 구현합니다.
removePokemon (예시) 함수를 사용해 선택된 포켓몬을 Dashboard에서 해제할 수 있는 기능을 추가합니다.
PokemonDetail 컴포넌트를 생성하여, queryString으로 전달받은 포켓몬 ID를 통해 상세 정보를 표시합니다.

기술 스택 
react + vite

주요 기능 
- rop drilling
- Context API
- React-router-dom 을 활용한 라우팅 구현
-  CRUD : create 생성, update 업데이트, delete 삭제 기능 구현

import { Routes, Route } from "react-router-dom"; // ✅ BrowserRouter 제거
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/detail/:id" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

function App() {
  const [addedPokemons, setAddedPokemons] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home addedPokemons={addedPokemons} setAddedPokemons={setAddedPokemons} />} />
      <Route path="/dex" element={<Dex addedPokemons={addedPokemons} setAddedPokemons={setAddedPokemons} />} />
    </Routes>
  );
}

export default App;
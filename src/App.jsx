import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
    </Routes>
  );
}

export default App;
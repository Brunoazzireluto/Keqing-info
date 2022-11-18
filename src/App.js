import Home from "./pages/Home";
import Constellations from "./pages/Constellations";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Skills from "./pages/Skills";
import Lore from "./pages/Lore";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constellations" element={<Constellations />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/lore" element={<Lore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

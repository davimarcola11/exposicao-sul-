import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/global.css';
import Parana from './pages/Parana';
import RioGrandeDoSul from './pages/RioGrandeDoSul';
import SantaCatarina from './pages/SantaCatarina';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parana" element={<Parana />} />
        <Route path="/rio-grande-do-sul" element={<RioGrandeDoSul />} />
        <Route path="/santa-catarina" element={<SantaCatarina />} />
      </Routes>
    </Router>
  );
}

export default App;

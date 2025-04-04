import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Estilos
import './App.css';

// Paginas
import Home from "./pages/Home";  
import Market from "./pages/Market";  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta para home */}
        <Route path="/" element={<Home />} />
        {/* Ruta para market */}
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

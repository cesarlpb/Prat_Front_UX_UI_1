import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularItems from "./components/PopularItems";
import HowToBuy from "./components/HowToBuy";
// import MarketList from "./components/MarketList";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularItems/>
      <HowToBuy/>
    </div>
  );
}

export default App;

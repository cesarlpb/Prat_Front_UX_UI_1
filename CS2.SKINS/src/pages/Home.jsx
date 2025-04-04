import Hero from "../components/home/Hero";
import PopularItems from "../components/Home/PopularItems";
import HowToBuy from "../components/Home/HowToBuy";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Hero />
      {/* Carrusel art populares */}
      <PopularItems />
      {/* Pasos como comprar */}
      <HowToBuy />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom"; //Para navegar entre paginas
import '../home_css/Hero.css';

function Hero() {
    return (
        <section className="hero-container">
            <div className="text-container">
                <h2>Compra Las Mejores <br />Skins Del Mercado</h2>
                <p>CS2.SKINS te ayuda a buscar tus skins favoritas</p>
                <Link to="/market"><button>COMPRAR YA</button></Link>
            </div>
            <img src="/CS2.SKINS/src/components/assets/hero_image.png" alt="ak-47" className="hero-image" />
            
        </section>
    );
}

export default Hero;

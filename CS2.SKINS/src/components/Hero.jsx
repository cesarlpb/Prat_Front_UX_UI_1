// Hero.js
import './Hero.css';

function Hero() {
    return (
        <section className="hero-container">
            <div className="text-container">
                <h2>Compra Las Mejores <br />Skins Del Mercado</h2>
                <p>CS2.SKINS te ayuda a buscar tus skins favoritas</p>
                <button>COMPRAR YA</button>
            </div>
            <img src="/src/assets/hero_image.png" alt="ak-47" className="hero-image" />
        </section>
    );
}

export default Hero;

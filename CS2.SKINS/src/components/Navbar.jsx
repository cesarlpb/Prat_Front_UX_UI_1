import { Link } from "react-router-dom"; //Para navegar entre paginas
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img className="icon" src="../assets/ak-47.png" alt="icon" /></Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/market">Market</Link></li>
                    <li><Link to="/trade">Intercambiar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

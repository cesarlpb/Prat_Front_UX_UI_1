import './Navbar.css';
function Navbar() {
    return (
        <header>
        <nav className="navbar">
          <div className="logo">
            <a href="#">MiLogo</a>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Market</a></li>
            <li><a href="#about">Intercambiar</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  
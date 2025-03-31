import './Navbar.css';
function Navbar() {
    return (
        <header>
        <nav class="navbar">
          <div class="logo">
            <a href="#">MiLogo</a>
          </div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Market</a></li>
            <li><a href="#about">Intercambiar</a></li>
            <li><a href="#contact">Inicia Sesion Con Steam</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  
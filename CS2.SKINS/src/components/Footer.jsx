import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo CSS está en la misma carpeta

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-section">
            <h3>Sobre Nosotros</h3>
            <ul>
              <li><a href="/about">Nuestra Historia</a></li>
              <li><a href="/team">Nuestro Equipo</a></li>
              <li><a href="/careers">Únete a Nosotros</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/market">Mercado</a></li>
              <li><a href="/news">Noticias</a></li>
              <li><a href="/faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contáctanos</h3>
            <ul>
              <li><a href="/contact">Formulario de Contacto</a></li>
              <li><a href="mailto:info@cs2skins.com">info@cs2skins.com</a></li>
              <li><a href="tel:+123456789">+123 456 789</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Políticas</h3>
            <ul>
              <li><a href="/privacy-policy">Política de Privacidad</a></li>
              <li><a href="/terms">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CS2.SKINS. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

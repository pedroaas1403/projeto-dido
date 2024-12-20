import React from "react";
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <h3>Redes Sociais</h3>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">YouTube</a>
        </div>

        <hr className="footer-divider" />

        <div className="copyright">
          <p>&copy; 2024 Dice Company. Todos os direitos reservados.</p>
          <p>
            Loja de didolino, se encontra em Salvador Bahia
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer;
import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import '../App.css';

const Header = ({ cartItems, removeFromCart, toggleCart, cartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLogin = () => setLoginOpen(!loginOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  };

  const handleLogin = () => {
    alert("Função de login não implementada!"); // vou fazer isso ainda
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="./imagens/logodido.png"
          alt="Dice Company logo"
          className="logo"
        />
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Buscar" className="search-input" />
      </div>
      <div className="icons-container">
        <FaBars className="icon" onClick={toggleMenu} />
        <FaShoppingCart className="icon" onClick={toggleCart} />
        <FaUser className="icon" onClick={toggleLogin} />
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => scrollToSection("inicio")} className="dropdown-item">
            Página inicial
          </button>
          <button onClick={() => scrollToSection("produtos")} className="dropdown-item">
            Produtos
          </button>
          <button onClick={toggleCart} className="dropdown-item">
            Carrinho
          </button>
        </div>
      )}

      {cartOpen && (
        <div className="cart-dropdown">
          <h2>Carrinho</h2>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                  <button onClick={() => removeFromCart(index)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <button onClick={() => alert("Redirecionando para o pagamento...")} className="payment-button">
              Finalizar Compra
            </button>
          )}
        </div>
      )}

      {loginOpen && (
        <div className="login-modal">
          <div className="modal-content">
            <h2>Entrar</h2>
            <input type="text" placeholder="Usuário" className="login-input" />
            <input type="password" placeholder="Senha" className="login-input" />
            <button className="login-button" onClick={handleLogin}>
              Entrar
            </button>
            <button className="close-button" onClick={toggleLogin}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

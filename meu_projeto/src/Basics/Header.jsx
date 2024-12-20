import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import '../App.css';

const Header = ({ cartItems, removeFromCart, toggleCart, cartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Fecha o menu após a navegação
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Nike_logo.svg/1024px-Nike_logo.svg.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Buscar" className="search-input" />
      </div>
      <div className="icons-container">
        <FaBars className="icon" onClick={toggleMenu} />
        <FaHeart className="icon" />
        <FaShoppingCart className="icon" onClick={toggleCart} />
      </div>

      {/* Dropdown Menu */}
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

      {/* Carrinho Dropdown */}
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
        </div>
      )}
    </header>
  );
};

export default Header;

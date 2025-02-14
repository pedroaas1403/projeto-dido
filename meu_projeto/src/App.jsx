import React, { useState } from 'react';
import Header from './Basics/Header';
import Footer from './Basics/Footer';
import Countdown from './Components/Countdown.js';
import './App.css';

const products = [
  { id: 1, name: "Dropadooo", price: "R$ 99,99", image: "https://via.placeholder.com/150" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setCartOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="App">
      <Header
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        toggleCart={toggleCart}
        cartOpen={cartOpen}
      />
      <main className="main-content">
        <section id="inicio">
        <h1 className="section-title"> Welcome to</h1>
        <div className="flexible-image">
            <img className="banner30" src="./imagens/bannerteste2.png" alt="contador" />
          </div>
          <div>
      <h1 className="downtext" > SHOW IN </h1>
      <Countdown />
           </div>
        </section>
        <section id="produtos">
          <h1 className="section-title">DROPS</h1>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <button
                  className="product-button"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

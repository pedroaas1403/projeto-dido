import React, { useState } from 'react';
import Header from './Basics/Header';
import Footer from './Basics/Footer';
import './App.css';

const products = [
  { id: 1, name: "Produto 1", price: "R$ 99,99", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Produto 2", price: "R$ 199,99", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Produto 3", price: "R$ 299,99", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Produto 4", price: "R$ 399,99", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Produto 5", price: "R$ 499,99", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Produto 6", price: "R$ 599,99", image: "https://via.placeholder.com/150" },
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
          <h1 className="section-title">Bem-vindo à loja</h1>
          <div className="flexible-image">
            aaaaaaaaaaa
          </div>
          <p>Explore nossos produtos e aproveite as ofertas!</p>
        </section>
        <section id="produtos">
          <h1 className="section-title">Produtos</h1>
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

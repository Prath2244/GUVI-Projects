import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';
import CartModal from './components/CartModal';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation 
        cartItemCount={totalItems} 
        onOpenCart={() => setShowCartModal(true)} 
      />
      
      <ProductGrid 
        products={PRODUCTS} 
        onAddToCart={addToCart} 
      />

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2026 TechStore. All rights reserved.</p>
        </div>
      </footer>

      <CartModal 
        show={showCartModal} 
        onClose={() => setShowCartModal(false)} 
        cart={cart}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
}
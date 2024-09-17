import React, { useState } from 'react';
import Header from './Header';
import Product from './Product';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Product onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;

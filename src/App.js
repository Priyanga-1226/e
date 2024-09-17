import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Products';
import WomenProduct from './components/WomenProduct';
import Products2 from './components/Products2';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wallpaper from './components/Wallpaper'

function App() {
  const [WishCount,setWishCount] =useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const handleAddToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    addToCart(product); 
  };

  

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    
  };



  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };


  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };


  const addToWishlist = (product) => {
    setWishCount(prevCount => prevCount + 1);
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (index) => {
    setWishlistItems(wishlistItems.filter((_, i) => i !== index));
  };

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  return (
    <Router>
      <div className="App">
        <Header 
        wishcount={WishCount}
        cartCount={cartCount} 
          cartItems={cartItems} 
          toggleCart={toggleCart}  
          wishlistItems={wishlistItems}
          toggleWishlist={toggleWishlist} 
        />

        {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        {showWishlist && <Wishlist addCart={addToCart}  wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />}

       
        <button className="cart-toggle-btn" onClick={toggleCart}>
          {showCart ? 'Hide Cart' : 'Show Cart'} ({cartItems.length})
        </button>


        <button className="wishlist-toggle-btn" onClick={toggleWishlist}>
          {showWishlist ? 'Hide Wishlist' : 'Show Wishlist'} ({wishlistItems.length})
        </button>

        <Wallpaper onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/kidswear" element={<Product onAddToCart={handleAddToCart} addToCart={addToCart}   addToWishlist={addToWishlist} />} />
          <Route path="/womenswear" element={<WomenProduct onAddToCart={handleAddToCart} addToCart={addToCart}  addToWishlist={addToWishlist} />} />
          <Route path="/menswear" element={<Products2 onAddToCart={handleAddToCart} addToCart={addToCart}  addToWishlist={addToWishlist} />} />
        </Routes>

        <Product onAddToCart={handleAddToCart} addToCart={addToCart}  searchTerm={searchTerm} addToWishlist={addToWishlist} />
        <WomenProduct onAddToCart={handleAddToCart} addToCart={addToCart}  searchTerm={searchTerm} addToWishlist={addToWishlist} />
        <Banner2 />
        <Products2 onAddToCart={handleAddToCart} addToCart={addToCart} searchTerm={searchTerm} addToWishlist={addToWishlist} />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

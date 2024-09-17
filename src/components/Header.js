import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular, faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Style/Header.css';

const Header = ({ cartItems, toggleCart, wishlistItems, toggleWishlist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    toggleCart(); // Toggle cart visibility from App
  };

  const handleWishlistClick = () => {
    toggleWishlist(); // Toggle wishlist visibility from App
  };

  return (
    <header>
      <nav>
        <a href="#home" className="logo">Fashion<span>Track</span></a>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#banner">Shop</a>
          <a href="#women">Women's</a>
          <a href="#men">Men's</a>
          <a href="#kid">Kid's</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="right-nav">
          <button onClick={handleWishlistClick} className="wishlist-icon">
            <FontAwesomeIcon icon={faHeartRegular} />
            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
          </button>

          <button onClick={handleCartClick} className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

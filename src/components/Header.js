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
        <a href="#" className="logo">Fashion<span>Track</span></a>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="active">home</a>
          <a href="#banner">shop</a>
          <a href="#women">women's</a>
          <a href="#men">men's</a>
          <a href="#kid">kid's</a>
          <a href="#contact">contact</a>
        </div>

        <div className="right-nav">
          <a href="#" onClick={handleWishlistClick}>
            <FontAwesomeIcon icon={faHeartRegular} />
            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
          </a>

          <a href="#" className="cart-icon" onClick={handleCartClick}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

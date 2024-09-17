import React, { useState } from 'react';
import '../Style/Wallpaper.css';

const Wallpaper = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);  // Pass the search term to the parent component
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <p>New Shop Collection</p>
          <h1>
            Find Your Favorite <br /> <span>Clothing Collection</span>
          </h1>
          <input
            type="text"
            placeholder='Shop new collections'
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Shop</button>
        </div>
      </div>
    </section>
  );
};

export default Wallpaper;

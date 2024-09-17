import React from 'react';
import '../Style/Wishlist.css';

const Wishlist = ({ wishlistItems, removeFromWishlist, addCart }) => {
  return (
    <div className="wishlist" id='wish'>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <button onClick={() => removeFromWishlist(index)}>Remove</button>
                <button onClick={() => addCart(item)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

import React from 'react';
import '../Style/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    imgSrc: 'https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20308.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: ' Denim Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://img.freepik.com/free-photo/full-length-portrait-cute-little-teen-girl-stylish-jeans-clothes-looking-camera-smiling-against-white-studio-wall-kids-fashion-concept_155003-17318.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: 'Boxy Denim Jacket',
    rating: 4.5,
    price: 850,
    oldPrice: 1000
  },
  {
    imgSrc: 'https://img.freepik.com/free-photo/girl-wearing-two-tone-pajamas_53876-97846.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: 'Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/trendy-outfit-girls_545377-16033.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: ' Denim ',
    rating: 4.5,
    price: 300,
    oldPrice: 500
  },
];

const Product = ({ searchTerm = '', addToCart ,addToWishlist }) => {

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div className="products" id='kid'>
      <div className="container">
        <div className="top-sec">
          <h3>KID'S <span>WEAR</span> </h3>
        </div>
        <div className="items">
          {filteredProducts.map((product, index) => (
            <div className="item" key={index}>
              <img src={product.imgSrc} alt={product.title} />
              <div className="product-desc">
              <h1  className="title-prod">{product.title || 'No Title'}</h1>
                <div className="price">
                  <span>&#8377; {product.price}</span>
                  <del>&#8377; {product.oldPrice}</del>
                </div>
                <button className='btn' onClick={() => addToCart(product)}>
                  ADD to CART
                </button>
                <div className="icon-product">
                <button  onClick={() => addToWishlist(product)}><FontAwesomeIcon icon={faHeart} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

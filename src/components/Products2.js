import React from 'react';
import '../Style/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    imgSrc: 'https://assets.ajio.com/medias/sys_master/root/20230613/bR9m/64888c0ed55b7d0c63679c73/-473Wx593H-469501170-khaki-MODEL.jpg',
    title: 'Denim Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/mens-fashion_1246590-7306.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: 'Jacket',
    rating: 4.5,
    price: 850,
    oldPrice: 1000
  },
  {
    imgSrc: 'https://assets.ajio.com/medias/sys_master/root/20240617/3S9r/667002b01d763220fac49ab1/-473Wx593H-469518542-blue-MODEL.jpg',
    title: 'Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://img.freepik.com/free-photo/portrait-handsome-serious-hipster-businessman-model-wearing-casual-black-suit_158538-973.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: 'Denim',
    rating: 4.5,
    price: 300,
    oldPrice: 500
  },
];

const Product = ({ searchTerm = '', addToCart, addToWishlist }) => {
  const filteredProducts = products.filter(product =>
    (product.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products" id='men'>
      <div className="container">
        <div className="top-sec">
          <h3>MEN'S <span>WEAR</span> </h3>
        </div>
        <div className="items">
          {filteredProducts.map((product, index) => (
            <div className="item" key={index}>
              <img src={product.imgSrc} alt={product.title || 'Product Image'} />
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

import React from 'react';
import '../Style/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    imgSrc: 'https://img.freepik.com/free-photo/woman-wearing-dark-clothes-glasses-along-with-many-bags-go-shopping_1150-27691.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: ' Denim Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://img.freepik.com/free-photo/woman-fur-coat_1303-3576.jpg?size=626&ext=jpg&ga=GA1.1.1657819223.1709699406&semt=ais_hybrid',
    title: 'Boxy Denim Jacket',
    rating: 4.5,
    price: 850,
    oldPrice: 1000
  },
  {
    imgSrc: 'https://media.istockphoto.com/id/936921422/photo/beautiful-indian-girl-in-traditional-outfit-with-jewelry.jpg?s=612x612&w=0&k=20&c=czezXlU0E8NSFLklbKwK7AV7csfpVAZDgBB2jqcaB_g=',
    title: 'Jacket',
    rating: 4.5,
    price: 550,
    oldPrice: 800
  },
  {
    imgSrc: 'https://cdn.shopify.com/s/files/1/2995/1158/files/square_neck_480x480.jpg?v=1697118528',
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
    <div className="products" id='women'>
      <div className="container">
        <div className="top-sec">
          <h3>WOMEN'S <span>WEAR</span> </h3>
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
                <a href="#" onClick={() => addToWishlist(product)}><FontAwesomeIcon icon={faHeart} /></a>
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

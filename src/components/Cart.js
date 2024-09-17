import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Style/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Enter your Razorpay Key ID
      amount: totalPrice * 100, // Amount in paise (convert ₹ to paise)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Thank you for your purchase',
      image: 'https://your-logo-url.com/logo.png',
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can handle further actions here, like redirecting to a thank you page
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="cart" id='cart'>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.imgSrc} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ₹{item.price}</p>
                </div>
                <button className="delete-btn" onClick={() => removeFromCart(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h4>Total Price: ₹{totalPrice}</h4>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React from 'react';
import '../Style/Footer.css'; // Ensure to link the CSS file

const Footer = () => {
    return (
        <footer>
            <div className="contnaier">
                <div className="big-rows">
                    <h6 className="logo">Fashion<span>Track</span></h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum perferendis iste officia!</p>
                    <div className="social-icon">
                        <a href="https://github.com/Priyanga-1226"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://github.com/Priyanga-1226"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://github.com/Priyanga-1226"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/Priyanga-1226"><i className="fa-brands fa-google-plus-g"></i></a>
                    </div>
                </div>

                <div className="row">
                    <h2 className="title">Information</h2>
                    <div className="links">
                        <a href="#banner">Our Stores</a>
                        <a href="#contact">About Us</a>
                        <a href="#contact">Business</a>
                        <a href="#cart">Delivery</a>
                    </div>
                </div>

                <div className="row">
                    <h2 className="title">Useful Links</h2>
                    <div className="links">
                    <a href="#banner">Our Stores</a>
                        <a href="#contact">About Us</a>
                        <a href="#contact">Business</a>
                        <a href="#cart">Delivery</a>
                    </div>
                </div>

                <div className="row">
                    <h2 className="title">Service</h2>
                    <div className="links">
                    <a href="#banner">Our Stores</a>
                        <a href="#contact">About Us</a>
                        <a href="#contact">Business</a>
                        <a href="#cart">Delivery</a>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="content">
                    <p>&copy; 2024 | Made with Love by <span>Fashion Track</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

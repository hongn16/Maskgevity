import React from 'react';
import logo from '../../assets/logo.png';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer section__padding" id="contact">
      <div className="footer-heading">
        <h1 className="gradient__text">Would you like to try our product?</h1>
      </div>
      <div className="footer-btn">
        <p>Request Trial Today</p>
      </div>
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>60 Mill Lane London NW82 9OB, All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Trial</p>
          <p>Social Media</p>
          <p>Shop</p>
          <p>Articles</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>60 Mill Lane London NW82 9OB</p>
          <p>07700 900077</p>
          <p>contactme@maskgevity.co.uk</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@ 2022 Maskgevity. All rights reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
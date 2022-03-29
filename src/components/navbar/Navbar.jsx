import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../assets/logo.png';

import './navbar.css'; 

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#ourmission">Our Mission</a></p>
  <p><a href="#reviews">Reviews</a></p>
  <p><a href="#product">Product</a></p>
  <p><a href="#articles">Articles</a></p>
  <p><a href="#contact">Contact Us</a></p>
  </>
);

const Navbar = () => {
  const { toggleMenu, setToggleMenu } = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button"><AiOutlineShoppingCart /><a href="#cart">Add To Cart</a></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
      </div>
    </div>
  )
};

export default Navbar;

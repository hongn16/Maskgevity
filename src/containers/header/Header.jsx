import React from 'react';
import people from '../../assets/people.png';
import header from '../../assets/header.png';

import './header.css';

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Let's Protect Ourselves and Others from Coronavirus</h1>
        <p>The present and future impact on our environment and health pose as one big uncertainty in the current year. Preventing this outcome comes at a cost. We hope it's a small cost. Join us today.</p>

        <div className="header-content__input">
          <input type="email" placeholder="Enter your email address..."/>
          <button type="button">Submit</button>
        </div>

        <div className="header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      
      <div className="header-image">
        <img src={header} alt="header" />
      </div>
    </div>
  )
};

export default Header;
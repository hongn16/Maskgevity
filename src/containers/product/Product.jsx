import React from 'react';
import greyImage from '../../assets/grey_image.png';

import './product.css';

const Product = () => {
  return (
    <div className="product section__padding" id="product">
      <div className="product-image">
        <img src={greyImage} alt="greyImage"/>
      </div>
      <div className="product-content">
        <h1 className="gradient__text">Our Product: Maskgevity</h1>
        <p>Our mask sterilization device will use UV sterilisation with a wavelength of 270-280nm to provide the best sterilisation for the most affordable price whilst allowing for a short sterilisation time of only 2 minutes.</p>
        <h4>Get Early Access to Maskgevity</h4>
      </div>
    </div>
  )
}

export default Product;
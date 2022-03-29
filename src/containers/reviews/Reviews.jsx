import React from 'react';
import { Feature } from '../../components';

import './reviews.css';

const Data = [
  {
    title: "Dr. Tawsha W, Cardiologist at Hypothetical Hospital Harrisburg",
    text: "\"I love Maskgevity. It fits our needs perfectly. I couldn't have asked for more than this.\""
  },
  {
    title: "Dr. Glady A, Surgeon at Blessings Medical Clinic",
    text: "\"If you aren't sure, always go for Maskgevity. Keep up the excellent work. I am completely blown away.\""
  },
  {
    title: "Dr. Tim M, Cardiologist at Southshore General Hospital",
    text: "\"Maskgevity impressed me on multiple levels. It really saves me time. Maskgevity is exactly what the world has been lacking.\""
  },
  {
    title: "Dr. Abdul W, BP at White Wing Hospital",
    text: "\"I have gotten at least 50 times the value from Maskgevity. Needless to say we are extremely satisfied with the results.\""
  },
];

const Reviews = () => {
  return (
    <div className="reviews section_padding" id="reviews">
      <div className="reviews-heading">
        <h1 className="gradient__text">At Maskgevity, we are not alone and are reviewed by top medical experts in their fields.</h1>
        <p>Please look at our fantastic reviews</p>
      </div>
      <div className="reviews-container">
        {Data.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
};

export default Reviews;
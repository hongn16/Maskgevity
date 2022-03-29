import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="article-container_article">
      <div className="article-container_article-image">
        <img src={imgUrl} alt="articles" />
      </div>
      <div className="article-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
};

export default Article;
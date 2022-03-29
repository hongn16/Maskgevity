import React from 'react';
import { Article } from '../../components';
import { img1, img2, img3, img4, img5 } from './imports';

import './articles.css';

const Articles = () => {
  return (
    <div className="articles section__padding" id="articles">
      <div className="articles-heading">
        <h1 className="gradient__text">We are leading in this research field.</h1>
        <div className="articles-container">
          <div className="articles-container_groupA">
            <Article imgUrl={img1} date="Mar 28, 2022" title="Even with risky survival rate, shortages of ECMO machines cost lives, study finds" />
          </div>
          <div className="articles-container_groupB">
            <Article imgUrl={img2} date="June 08, 2021" title="How the digitisation of ICU can power the fight against COVID-19" />
            <Article imgUrl={img3} date="Aug 20, 2020" title="Lifeline Transport Marks COVID-19 Milestone: 1,000 Patient Transports with Zero Staff Transmissions" />
            <Article imgUrl={img4} date="Mar 28, 2020" title="Covid-19 news: UK infections approaching a record high" />
            <Article imgUrl={img5} date="Jan 26, 2020" title="Hundreds of AI tools have been built to catch covid. None of them helped." />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Articles;
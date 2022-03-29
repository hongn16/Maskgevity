import React from 'react';
import { Feature } from '../../components';

import './ourmission.css';

const OurMission = () => {
  return (
    <div className="ourmission section__margin" id="ourmission">
      <div className="ourmission-feature">
        <Feature title="Our Mission" text="Set with the challenge of designing a product for the ongoing Coronavirus pandemic, a mask reprocessing device is designed for the individual household as the main target market with scope for the product to be used in medical sectors." />
      </div>
      <div className="ourmission-heading">
        <h1 className="gradient__text">Give us a chance to prove that we care</h1>
      </div>
      <div className="ourmission-container">
        <Feature title="Manufacturing" text="This medical device fulfils an option to be produced at low-priced and yet medically suitable way." />
        <Feature title="Environmental Impact" text="Our pledge as a company to remediate these impacts through other green initiatives." />
        <Feature title="Marketing" text="The intended for use not only in hospitals and healthcare facilities but also for offices, schools and universities, and private homes and households." />
      </div>
    </div>
  )
};

export default OurMission;
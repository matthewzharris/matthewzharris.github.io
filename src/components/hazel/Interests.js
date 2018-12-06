import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faCircleNotch,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

library.add(faRocket);
library.add(faCircleNotch);
library.add(faBookOpen);

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            📊
          </span>
        </div>
        <h4>Data Analysis</h4>
        <p>
          In my career, I’ve focused on creating actionable data visualizations
          for enterprise users in various dashboard and reporting tools.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            💼
          </span>
        </div>
        <h4>Business Software</h4>
        <p>
          Having worked in technology consulting, I am painfully aware of the
          neglect business users often feel. I have a personal goal to make
          business software just as beautiful and easy to use as consumer
          products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            💪
          </span>
        </div>
        <h4>Team Player</h4>
        <p>
          I have a unique end-to-end perspective on designing software products.
          I thrive on collaborating across disciplines to ensure the best
          product outcome possible.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;

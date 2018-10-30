import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faBriefcase,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

library.add(faChartLine);
library.add(faBriefcase);
library.add(faBookOpen);

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <FontAwesomeIcon icon="book-open" size="lg" />
        </div>
        <h4>Design Narrative</h4>
        <p>
          My strength lies in communicating design, advocating for users while
          framing it in terms of broader business goals.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <FontAwesomeIcon icon="briefcase" size="lg" />
        </div>
        <h4>SaaS Business Software</h4>
        <p>
          Having been a tech consultant, I am painfully aware of the neglect
          business users often feel. I have a personal goal to make business
          software just as beautiful and easy to use as consumer products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <FontAwesomeIcon icon="chart-line" size="lg" />
        </div>
        <h4>Product Strategy</h4>
        <p>
          I approach UX projects through the lens of broader product strategy
          that helps inform the design solutions that I craft in response.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faCircleNotch,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserShield);
library.add(faCircleNotch);
library.add(faBookOpen);

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <FontAwesomeIcon icon="user-shield" size="lg" />
        </div>
        <h4>Insurtech</h4>
        <p>
          The insurance industry is ripe for innovation and simplification. I'd
          love to accelerate the push to make better, more accessible
          experiences for insurance users.
        </p>
      </div>
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
          <FontAwesomeIcon icon="circle-notch" size="lg" />
        </div>
        <h4>Whole Product Strategy</h4>
        <p>
          Having worked in technology consulting, I have a unique end-to-end
          perspective on designing software. I thrive on collaborating across
          disciplines to ensure the best product outcome possible.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;

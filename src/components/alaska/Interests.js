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
            ✈️
          </span>
        </div>
        <h4>Travel Enthusiast</h4>
        <p>
          I'm a dual Hungarian citizen and have been lucky enough to travel
          extensively. Being exposed to other cultures has broadened my
          perspective and I hope to empower others to have that opportunity.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            📖
          </span>
        </div>
        <h4>Design Narrator</h4>
        <p>
          My strength lies in communicating design. I tirelessly advocate for
          users, working to solve their problems while framing it in terms of
          broader business goals.
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
          Having worked in technology consulting, I have a unique end-to-end
          perspective on designing software products. I thrive on collaborating
          across disciplines to ensure the best product outcome possible.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;

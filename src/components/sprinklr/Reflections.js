import React from 'react';

import Section from '../Section';
import Image from '../Image';

import brandingImage from '../../images/P2Branding.jpg';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm">
        <h3>Next Steps</h3>
        <ul>
          <li>
            Continue to work with software engineers to develop and iterate
            designs
          </li>
          <li>Continue usability testing</li>
        </ul>
      </div>

      <div className="col-sm">
        <h3>What I Learned</h3>
      </div>
    </div>
  </Section>
);

export default Reflections;

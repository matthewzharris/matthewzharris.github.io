import React from 'react';

import Section from '../Section';
import Image from '../Image';

import brandingImage from '../../images/P2Branding.jpg';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm">
        <h3>Next Steps</h3>
        <p>The redesign is currently in development.</p>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Revisiting user pain points often is important to ensure all design
            details are solving their problems
          </li>
          <li>
            Focusing prototype fidelity on just the amount needed for user
            testing can help allow more design iteration
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Reflections;

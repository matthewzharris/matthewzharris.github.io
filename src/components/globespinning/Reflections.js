import React from 'react';

import Section from '../Section';
import Image from '../Image';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm">
        <h3>Next Steps</h3>
        <p>The offshore dev team is currently building the redesigned app & website.</p>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Being able to
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

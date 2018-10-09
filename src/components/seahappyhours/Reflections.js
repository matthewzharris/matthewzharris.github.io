import React from 'react';

import Section from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm ">
        <h3>Next Steps</h3>
        <ul>
          <li>
            Review some of features that were unable to be shipped in the
            initial release
          </li>
          <li>
            Continue testing the product with users to ensure an optimal
            experience
          </li>
          <li>Research methods to increase adoption</li>
        </ul>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Working with software engineers requires open and clear
            communication
          </li>
          <li>
            Iterating designs several times before development helps avoid
            potential roadblocks
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Reflections;

import React from 'react';

import Section from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm ">
        <h3>Next Steps</h3>
        <ul>
          <li>
            Add information to the recycling Education page where users could
            get general information about recycling and composting in Seattle
          </li>
          <li>Additional user testing of the website</li>
          <li>
            Additional user research to help ensure all recycling related user
            needs are being met
          </li>
        </ul>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Working with software engineers with such a fast deadline was
            extremely exciting and rewarding to see the product come to life
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Reflections;

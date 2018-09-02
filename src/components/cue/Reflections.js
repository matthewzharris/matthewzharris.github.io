import React from 'react';

import Section from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm ">
        <h3>Next Steps</h3>
        <ul>
          <li>
            Due to a short timeline, I would continue usability testing of the
            prototype and review results with the client.
          </li>
          <li>
            I’d want to review potential features that were identified as
            persona needs including: calendar app integration, mobile website
            preview of Cue event, text updates for non Cue users
          </li>
        </ul>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Importance of balancing
            <strong> user needs</strong> with
            <strong> client asks</strong>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Reflections;

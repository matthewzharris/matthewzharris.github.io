import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm ">
        <h3>Next Steps</h3>
        <ul>
          <li>Review out of scope items especially app proliferation</li>
          <li>
            Research secondary personas like heads of household (mothers,
            fathers, etc.)
          </li>
          <li>App updates based on the last rounding of testing</li>
        </ul>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <ul>
          <li>
            Communication across team members is mission critical. Any insight
            lost from researcher to final visual designer is a lost opportunity
            to respond to users.
          </li>
          <li>
            Gathering initial user research from differing demographics is
            crucial because those things will influence your persona and final
            design.
          </li>
          <li>
            Testing with users is incredibly important because their responses
            to your design is almost always met differently than expected.
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Reflections;

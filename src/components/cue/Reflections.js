import React from 'react';

import Section from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm ">
        <h3>Next Steps</h3>
        <p>
          Due the abbreviated timeline, I recommended that my client should continue usability testing with participants from their network.
          I also recommended that my client should review potential features that were identified as
          persona needs during research. These included: calendar app integrations, mobile website
          preview of Cue event, and text updates for users without the app installed.
        </p>
      </div>
      <div className="col-sm">
        <h3>What I Learned</h3>
        <p>
          From my experience, the most important aspect of this project was balancing the users' needs with client asks. My approach was use market and user research as early and often as possible to ensure that our approach was based on data. As a result, I feel that Cue is a valuable app that could benefit people looking to create casual events.
      </p>
      </div>
    </div>
  </Section>
);

export default Reflections;

import React from 'react';

import Section from '../Section';
import Video from '../Video';

const Solution = () => (
  <Section shade={3} title="Solution">
    <p>
      With the project scoped, estimated, and prioritized, Spend Tracker entered
      our engineering sprints and was developed on time. I stepped up to lead
      the UAT of the tool with support from some product managers. The end
      result was an easy to use product for our small-to-medium sized marketers
      that would allow them to track their spend and budgets across all their
      marketing channels in a single place.
    </p>

    <div className="text-center">
      <Video
        width="100%"
        src="https://www.dropbox.com/s/5s0vwmnkh3w1rgl/SpendTrackerV3000.mp4?raw=1"
      />
    </div>
  </Section>
);

export default Solution;

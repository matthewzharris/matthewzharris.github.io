import React from 'react';

import Section, { SubSection } from '../Section';
import Video from '../Video';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Creating and applying tags to ads">
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/hgnxscr5prjbvxw/CreativeExplorerPortfolio1.mp4?raw=1"
        />
      </div>
    </SubSection>
    <SubSection title="Filtering and visualizing tags">
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/0a5065ca16iorj0/CreativeExplorerPortfolio2.mp4?raw=1"
        />
      </div>
    </SubSection>
  </Section>
);

export default Solution;

import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';


const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Prototype" />

    <SubSection title="Usability Testing">
      <p>
        With a Figma prototype, I organized and ran 6 user interviews from enterprise
        clients including: Starbucks, Target and Subway. I received beneficial feedback that led to multiple updates including increased help text in the platform.
      </p>
    </SubSection>
    <SubSection title="Design System" />
    <p>
      For this project, I built a design system for the company in order to help
      unify design elements across the platform as well as create the basis for
      any future design work.
    </p>
  </Section>
);

export default Solution;

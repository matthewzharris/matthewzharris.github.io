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
    <iframe style={{ border: 'none' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFqIgSkM6u9IGRvtp7wD56Cqq%2FHazel-Analytics%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
  </Section>
);

export default Solution;

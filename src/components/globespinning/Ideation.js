import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import sketchwireframeImage from '../../images/GlobespinningSketchWireframe.jpg';
import flowImage from '../../images/GlobespinningIdeationFlow.jpg';


const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Sketches & Wireframes">
      <p>
        Once I had the user and business context for the redesign, I started sketching to help test new ideas for the major problem areas.
      </p>
      <p>
        I then went into my wireframe phase where I would present initial low fidelity wireframes to the team for review on a weekly basis.
      </p>
      <Image alt="Sketch & Wireframes" src={sketchwireframeImage} />
    </SubSection>

    <hr />

    <SubSection title="Flows">
      <p>
        A significant portion of the issues with the current mobile site revolved around long, complicated user flows that made it daunting for the casual users Globespinning wanted to target. As a part of my ideation phase, I created new user flows with blockframes that included the details of the information required on each screen. This process helped me streamline the number of screens and ensure all information displayed is both necessary and organized.
      </p>
      <Image alt="Globespinning User Flows" src={flowImage} />
    </SubSection>
  </Section>
);

export default Ideation;

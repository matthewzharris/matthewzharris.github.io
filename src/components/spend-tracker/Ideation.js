import React from 'react';
import Carousel from 'nuka-carousel';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import taskFlowsImage from '../../images/spendtrackertaskflows.png';
import sketchImage from '../../images/spendtrackersketches.jpg';
import wireframeImage1 from '../../images/BudgetWireframe1.jpg';
import wireframeImage2 from '../../images/BudgetWireframe2.jpg';
import wireframeImage3 from '../../images/BudgetWireframe3.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Task Flows">
      <p>
        Before working on any screens, I set out to illustrate the key task
        flows so I could understand how the user needs to interact with tool to
        perform the tasks they want to complete.
      </p>
      <Image alt="Spend Tracker Task Flows" src={taskFlowsImage} />
    </SubSection>

    <hr />

    <SubSection title="Sketch">
      <Image alt="Spend Tracker Sketches" src={sketchImage} />
    </SubSection>

    <SubSection title="Wireframes">
      <Carousel
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
        }}
      >
        <Image alt="Spend Tracker Wireframes" src={wireframeImage1} />
        <Image alt="Spend Tracker Wireframes" src={wireframeImage2} />
        <Image alt="Spend Tracker Wireframes" src={wireframeImage3} />
      </Carousel>
    </SubSection>
  </Section>
);

export default Ideation;

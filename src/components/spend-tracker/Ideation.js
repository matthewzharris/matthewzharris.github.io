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
        Before working on any screens, I set out to illustrate the main task
        flows so I could understand how the user needs to interact with tool to
        perform the tasks they want to complete.
      </p>
      <Image alt="Spend Tracker Task Flows" src={taskFlowsImage} />
    </SubSection>

    <hr />

    <SubSection title="Sketch">
      <p>
        I sketched out different options on how spend & budget could be
        visualized to our users. Based on early conversations with users, they
        need to be able to be able to easily compare across platforms so
        proximity of the budget visualizations was most important.
      </p>
      <Image alt="Spend Tracker Sketches" src={sketchImage} />
    </SubSection>

    <SubSection title="Wireframes">
      <p>
        After testing the wireframes with users, the product manager and I
        learned about the need to allow budget changes throughout the month in
        the first version of Spend Tracker. Users were changing budgets on a
        regular basis sometimes as often as weekly based on prior week's channel
        & platform performance.
      </p>
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

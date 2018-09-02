import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import initialDesignImage from '../../images/hackathoninitialdesign.jpg';
import homeLowFiImage from '../../images/hackathonhomelowfi.jpg';
import guideLowFiImage from '../../images/hackathonguidelowfi.jpg';
import modalLowFiImage from '../../images/hackathonmodallowfi.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Initial Design">
      <p>
        To respond to Steve’s pain points, I created our first sketches of what
        our app would look like and focused on the recycling guide for our
        users. I wanted to build an easy decision tree that would lead the user
        to the closest recycling center that handled the item they were looking
        to recycle. I quickly tested this with users and handed the design over
        to our dev team to start work.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />

      <p>
        For the information architecture of the new site, I started by
        categorizing the 84 distinct items that could be recycled in Seattle. In
        order to ease the cognitive load on the user, I wanted to bucketize the
        items into manageable top level categories. I did a card sorting
        activity to achieve this:
      </p>
    </SubSection>

    <hr />

    <SubSection title="Low Fidelity Wireframes">
      <p>
        I created low fidelity wireframes to continue refining the design for
        our users including interactive elements like modals.
      </p>
      <Image src={homeLowFiImage} alt="Home LowFi" />
      <Image src={guideLowFiImage} alt="Guide LowFi" />
      <Image src={modalLowFiImage} alt="Modal LowFi" />
    </SubSection>
  </Section>
);

export default Ideation;

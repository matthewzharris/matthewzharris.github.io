import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import featurePrioritizationImage from '../../images/sprinklrfeatures.jpg';
import addPlantImage from '../../images/addplantflow.jpg';
import waterplantImage from '../../images/markaswateredflow.jpg';
import initialDesignImage from '../../images/sprinklrsketch.jpg';
import wireframeImage from '../../images/sprinklrwireframe.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Feature Prioritization">
      <p>
        Based on user and market research, I created a list of potential
        features that could be valuable to our persona. I led a discussion with
        the developer in order to work out those features that provided the most
        benefit to the user within a reasonable development timeframe. From that
        conversation, I generated the following feature prioritization:
      </p>
      <Image alt="Feature Prioritization" src={featurePrioritizationImage} />
    </SubSection>

    <hr />

    <SubSection title="User Flows">
      <p>
        After prioritizing features, I started on the major flows that a user
        would walk through in the app.
      </p>
      <Image alt="Add Plant User Flow" src={addPlantImage} />
      <Image alt="Mark as Watered User Flow" src={waterplantImage} />
    </SubSection>

    <hr />

    <SubSection title="Initial Design">
      <p>
        In my initial sketches, I explored how to display the plants to the user
        and whether a traditional tab bar navigation would be necessary.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />
    </SubSection>

    <hr />

    <SubSection title="Wireframe">
      <p>
        After sketches, I worked on low fidelity wireframes to test with users.
        I used color for the call to action buttons in order to see how users
        responded to color.
      </p>
      <Image alt="Sprinklr Wireframe" src={wireframeImage} />
    </SubSection>
  </Section>
);

export default Ideation;

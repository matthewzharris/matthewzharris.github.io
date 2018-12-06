import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import cardSortImage from '../../images/p2cardsort.jpg';
import sitemapImage from '../../images/p2newsitemap.jpg';
import initialDesignImage from '../../images/p2initialdesigns.jpg';
import paperPrototypeImage from '../../images/p2paperproto.jpg';

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
      <Image alt="Feature Prioritization" src={prioritizationImage} />
    </SubSection>

    <hr />

    <SubSection title="Initial Design">
      <p>
        In my initial sketches, I explored how to display the plants to the user
        and whether a traditional tab bar navigation would be necessary.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />
    </SubSection>
  </Section>
);

export default Ideation;

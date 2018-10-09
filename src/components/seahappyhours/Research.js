import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import DCHappyHoursImage from '../../images/DCHappyHours.jpg';
import happyhourfinderImage from '../../images/happyhourfinder.jpg';
import SHHuserflowImage from '../../images/SHHuserflow.jpg';
import SHHpersonaImage from '../../images/SHHpersona.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="User Research">
      <p>
        In order to start the project, I wanted to interview potential users
        about their experiences choosing a happy hour to attend. From
        interviews, I found that users were concerned about the happy hour
        specials being updated regularly, the time and location of the happy
        hour, and what the food and drink specials included. I created a user
        flow about the process that a user would go through to pick a happy
        hour.
      </p>
      <Image alt="Happy Hour User Flow" src={SHHuserflowImage} />
    </SubSection>

    <SubSection title="Persona">
      <p>
        From user interviews, I created the persona Rob to respond to his pain
        points, behaviors, and demographics in the design of the product.
      </p>
      <Image alt="Persona" src={SHHpersonaImage} />
    </SubSection>

    <hr />

    <SubSection title="Comparative Analysis">
      <p>
        When looking at the happy hour locator market, the two best examples
        were DCHappyHours.com and the Happy Hour Finder mobile app.
      </p>

      <p>
        Having lived in DC, I was aware of DCHappyHours.com. In terms of
        usability, I found that the website was easy for users to complete the
        main task of finding a happy hour and that the happy hour information
        was updated frequently. The aspects that needed work were the overall
        aesthetics and the information architecture of the site.
      </p>

      <Image alt="DC Happy Hours" src={DCHappyHoursImage} />

      <p>
        The Happy Hour Finder app automatically provided users with happy hours
        within a mile to choose from, which was good for finding a happy hour.
        Unfortunately, the lack of filter or search didn't allow easy
        navigation. In addition, the individual restaurant pages were hard to
        read, inconsistent in their information architecture, and the happy hour
        information is out of date according to app store reviews.
      </p>
      <Image alt="Happy Hour Finder" src={happyhourfinderImage} />
    </SubSection>

    <p>
      <b>
        From my research, I found that it was important to give quick happy hour
        options to users, but to make it easy to browse for more discerning
        users. The ability to keep the information updated would also be
        incredibly important to keep an active user base.
      </b>
    </p>
  </Section>
);

export default Research;

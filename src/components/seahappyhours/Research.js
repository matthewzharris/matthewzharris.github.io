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
        I started the project by interviewing 3 potential users about their
        experiences choosing happy hours and restaurants. I discovered three
        major themes from user interviews:
      </p>
      <ul>
        <li>
          Users were concerned about the time and location (their distance) from
          the happy hour
        </li>
        <li>They wanted to know what the food and drink specials included</li>
        <li>
          They wanted to be sure that the specials were being updated regularly
        </li>
      </ul>
      <p>
        From interviews, I created a flow about the process that a user would go
        through to choose a happy hour.
      </p>
      <Image alt="Happy Hour User Flow" src={SHHuserflowImage} />
    </SubSection>

    <SubSection title="Persona">
      <p>
        As a design tool, I like to create personas to help focus the design of
        the product. I made the persona Rob who embodied the motifs and paint
        points from interviews.
      </p>
      <Image alt="Persona" src={SHHpersonaImage} />
    </SubSection>

    <hr />

    <SubSection title="Comparative Analysis">
      <p>
        I continued my research by looking at apps and websites that help users
        find happy hours to see what is available to users. The two best
        examples I found were DCHappyHours.com and the Happy Hour Finder mobile
        app.
      </p>

      <p>
        Having lived in DC, I was aware of DC Happy Hours website and wanted to
        include it in my research because I think it had some positive
        attributes. In terms of usability, the website was easy for users to
        complete the main task of finding a happy hour and the happy hour
        information was updated frequently. In terms of improvement, the overall
        aesthetics and the information architecture of the site were lacking.
      </p>

      <Image alt="DC Happy Hours" src={DCHappyHoursImage} />

      <p>
        The nationwide mobile app, Happy Hour Finder, automatically provided
        users with happy hours within a mile from their location to choose from.
        Unfortunately, if the ones listed weren't what you wanted, there was no
        filter or search to allow a user to navigate to other options. In
        addition, the individual restaurant pages were extremely hard to read,
        inconsistent in their information architecture, and the information is
        out of date according to app store reviews.
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

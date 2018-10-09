import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import initialDesignImage from '../../images/SHHinitialdesign.jpg';
import formdesignImage from '../../images/SHHformdesign.jpg';
import reviseddesignImage from '../../images/SHHreviseddesign.jpg';
import wireframeImage from '../../images/SHHwireframes.jpg';
import homewireframeImage from '../../images/SHHhomewireframe.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Initial Design">
      <p>
        In my initial sketches, I started by creating screens based on the steps
        a user would walk through to find a happy hour.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />
      <p>
        Although it was helpful to sketch the process, the amount of screens
        were overwhelming for a user to find a happy hour. Instead, I updated
        the main screen to have a simple search bar with the time, date and
        location auto-populated with current user data.
      </p>
      <Image alt="Revised Design" src={reviseddesignImage} />
    </SubSection>

    <hr />

    <SubSection title="Low Fidelity Wireframes">
      <p>
        In the low fidelity wireframes, I wanted to start the design of the
        search bar and start to experiment with layouts for the search results
        and business detail pages.
      </p>
      <Image src={homewireframeImage} alt="Home Wireframe" />
      <p>
        The ‘Happy hours happening now’ concept grew from the idea of having
        quick, easy options for users to be able to select without having to
        search. It facilitates faster decision making by not requiring the user
        to search at all. This feature requires access to the user’s location
        via browser.
      </p>
      <Image src={wireframeImage} alt="Wireframe" />
      <p>
        Since updated happy hour specials were important to the persona, I
        wanted to ensure that the design of the 'Submit Listing' forms was easy
        for users to input. I went through several iterations as I tested the
        form design with users refining as I went and researching best
        practices.
      </p>
      <Image src={formdesignImage} alt="Form Design" />
    </SubSection>
  </Section>
);

export default Ideation;

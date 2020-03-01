import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import mobilehomepageImage from '../../images/GlobespinningMobileHome.jpg';
import searchnotificationsImage from '../../images/GlobespinningSearch.jpg';
import webhomepageImage from '../../images/GlobespinningWebHomepage.jpg';
import webtripsImage from '../../images/GlobespinningWebTrips.jpg';
import webtripdetailImage from '../../images/GlobespinningWebTripDetail.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Mockups & Prototype">
      <Image alt="Globespinning Mobile Homepage" src={mobilehomepageImage} />
      <Image alt="Globespinning Mobile Search & Notifications" src={searchnotificationsImage} />
    </SubSection>

    <hr />

    <SubSection title="Web App">
      <Image alt="Globespinning Web Homepage" src={webhomepageImage} />
      <Image alt="Globespinning Web Trips" src={webtripsImage} />
      <Image alt="Globespinning Web Trip Detail" src={webtripdetailImage} />
    </SubSection>

    <SubSection title="Investor Presentation">
    </SubSection>

  </Section>
);

export default Solution;

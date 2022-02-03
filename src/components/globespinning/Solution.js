import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import mobilehomepageImage from '../../images/GlobespinningMobileHome.jpg';
import searchnotificationsImage from '../../images/GlobespinningSearch.jpg';
import webhomepageImage from '../../images/GlobespinningWebHomepage.jpg';
import webtripsImage from '../../images/GlobespinningWebTrips.jpg';
import webtripdetailImage from '../../images/GlobespinningWebTripDetail.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Mockups">
      <Image alt="Globespinning Mobile Homepage" src={mobilehomepageImage} />
      <Image
        alt="Globespinning Mobile Search & Notifications"
        src={searchnotificationsImage}
      />
    </SubSection>

    <SubSection title="Prototype">
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/lsdsc3lnvzu6b79/Globespinning_Prototype.MP4?raw=1"
        />
      </div>
    </SubSection>

    <hr />

    <SubSection title="Web App">
      <p>
        As a part of this project, I also executed a redesign the Globespinning
        website that would continue the experience and functionality of the new
        mobile app.
      </p>
      <Image alt="Globespinning Web Homepage" src={webhomepageImage} />
      <Image alt="Globespinning Web Trips" src={webtripsImage} />
      <Image alt="Globespinning Web Trip Detail" src={webtripdetailImage} />
    </SubSection>
  </Section>
);

export default Solution;

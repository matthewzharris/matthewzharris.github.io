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
      <Image alt="Globespinning Mobile Search & Notifications" src={searchnotificationsImage} />
    </SubSection>

    <SubSection title="Prototype">
      <h4>Creation Flow</h4>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/8oyjijtgxr9bt47/GlobespinningCreateTrip.mp4?raw=1"
        />
      </div>
      <h4>View Flow</h4>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/k1cu5ab0kdh8otw/GlobespinningViewTrips1866by1400.mp4?raw=1"
        />
      </div>
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

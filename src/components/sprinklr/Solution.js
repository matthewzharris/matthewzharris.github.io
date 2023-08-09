import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import styleguideImage from '../../images/Sprinklrstyleguide.jpg';
import sitemapImage from '../../images/sprinklrsitemap.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Visual Design">
      <p>
        For the Sprinklr brand, I created the visual design with a focus on a
        modern, clean interface that would allow the plants to be the highlight
        of the app. In addition, I wanted to have some illustrative elements and
        drawn icons to add levity to the mobile app. I chose the Futura typeface
        for headers which was inspired by the "Field Notes" brand notebooks
        where a user interviewee stored their plant information.
      </p>
      <Image src={styleguideImage} alt="Styleguide" />
    </SubSection>

    <hr />

    <SubSection title="Information Architecture">
      <p>
        For the Sprinklr app, the final MVP prototype was refined to make it
        incredibly easy tool to create and edit watering schedules for users.
      </p>
      <Image src={sitemapImage} alt="sitemap" />
    </SubSection>

    <hr />

    <SubSection title="High Fidelity Prototype">
      <p>
        For the prototype, I designed and built the major user flows that would
        exist in the app. I used Principle to bring the design to life and mimic
        the actual motion design that would be included.
      </p>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/3b8dh77af12l70n/Sprinklrfinal.mp4?raw=1"
        />
      </div>
    </SubSection>
  </Section>
);

export default Solution;

import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import comparativeImage from '../../images/GlobespinningCompetition.jpg';
import UserFlowImage from '../../images/GlobespinningCreateTrip.jpg';
import sitemapImage from '../../images/GlobespinningSitemap.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Comparative Analysis">
      <p>
        For this project, there weren’t many direct competitors so I focused my
        research on the travel app industry. I took notes of visual design
        elements and interactions that I could inspire the mobile app revamp.
      </p>
      <Image alt="Comparative Analysis" src={comparativeImage} />
    </SubSection>

    <hr />

    <SubSection title="Contextual Inquiries">
      <p>
        To review the current mobile app, I conducted a
        contextual inquiry where I had a potential user complete tasks in the app including: onboarding, creating profiles, and creating trips. This activity highlighted the need to streamline the app. The user was frequently exhausted by the number of screens required to complete tasks and confused by some interactions.
      </p>
      <Image alt="User Flow" src={UserFlowImage} />
    </SubSection>

    <hr />

    <SubSection title="Design Audit">
      <p>
        I performed a design audit on the existing mobile and web apps based on a number of heuristics to identify key problem areas. The main problem areas were:
      </p>
      <Image alt="Sitemap Example" src={sitemapImage} />
    </SubSection>
  </Section>
);

export default Research;

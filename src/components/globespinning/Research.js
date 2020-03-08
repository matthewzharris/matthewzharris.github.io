import React from 'react';
import Carousel from 'nuka-carousel';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import comparativeImage from '../../images/GlobespinningCompetition.jpg';

import designAuditImage1 from '../../images/GlobespinningDesignAudit1.jpg';
import designAuditImage2 from '../../images/GlobespinningDesignAudit2.jpg';
import designAuditImage3 from '../../images/GlobespinningDesignAudit3.jpg';
import designAuditImage4 from '../../images/GlobespinningDesignAudit4.jpg';
import designAuditImage5 from '../../images/GlobespinningDesignAudit5.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Comparative Analysis">
      <p>
        For this project, there weren’t many direct competitors so I focused my
        research on the travel app industry. I took notes of visual design
        elements and interactions that could inspire the mobile app revamp.
      </p>
      <Image alt="Comparative Analysis" src={comparativeImage} />
    </SubSection>

    <hr />

    <SubSection title="Contextual Inquiries">
      <p>
        To review the current mobile app, I conducted a
        contextual inquiry where I had a potential user complete tasks in the app including: onboarding, creating profiles, and creating trips. This activity highlighted the need to streamline the app. The user was frequently exhausted by the number of screens required to complete tasks and confused by some interactions.
      </p>
    </SubSection>

    <hr />

    <SubSection title="Design Audit">
      <p>
        I performed a design audit on the existing mobile and web apps based on a number of heuristics to identify key problem areas. The main problem areas were:
      </p>

      <Carousel
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
          pagingDotsContainerClassName: 'dots'
        }}
      >
        <Image alt="Sitemap Example" src={designAuditImage1} />
        <Image alt="Sitemap Example" src={designAuditImage2} />
        <Image alt="Sitemap Example" src={designAuditImage3} />
        <Image alt="Sitemap Example" src={designAuditImage4} />
        <Image alt="Sitemap Example" src={designAuditImage5} />
      </Carousel>

    </SubSection>
  </Section>
);

export default Research;

import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import designSystemLogos from '../../images/dslogos.png';
import toolLogos from '../../images/toollogos.png';
import auditImage from '../../images/audit.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Existing System Audit">
      <p>
        The design system work up to the point I took over was primarily based
        on{' '}
        <a href="https://www.carbondesignsystem.com/" target="_blank">
          IBM Carbon design system
        </a>
        . Many of the components were just placeholders and never introduced
        into our platform; other components were used but never standardized.
        During the first stage of research, I worked with the design and
        engineering teams to fully audit the existing system and answer the
        following questions:
      </p>
      <ul>
        <li>
          <em>Component inventory</em> - which components were being used, which
          were not?
        </li>
        <li>
          <em>Consistency of application</em> - to what degree did components
          and styles in the product adhere to the system?
        </li>
        <li>
          <em>Gaps</em> - what are the missing or incomplete components?
        </li>
      </ul>
      <Image alt="Design audit of a page" src={auditImage} />
    </SubSection>

    <hr />

    <SubSection title="Comparative Research">
      <p>
        As a small team with limited resources, it was important that we build
        on the work of other well constructed design system efforts. In
        conducting research, I prioritized libraries that shared some
        commonalities with New Engen's product and user base.
      </p>
      <ul>
        <li>Enterprise, B2B, SAAS products</li>
        <li>Marketing or marketing adjacent</li>
      </ul>
      <Image alt="Design System Logos" src={designSystemLogos} />
      <p>
        This research helped us to identify concepts that we would need to
        include in the system, design patterns that were important to enterprise
        marketing users, and organizational heirarchies that we could use to
        structure our work.
      </p>
    </SubSection>

    <hr />

    <SubSection title="Tooling Analysis">
      <p>
        During the initial phases of this project, I also decided to analyze how
        we were using design tools and whether our current set of tools could
        meet our needs effectively. Specifically, the things I was focused on
        were:
      </p>
      <ul>
        <li>Cost</li>
        <li>Ease of collaboration</li>
        <li>Industry trends</li>
      </ul>
      <Image alt="Tooling Logos" src={toolLogos} />
      <p>
        I researched Abstract for Sketch, Invision's Design System Manager and
        Figma for potential solutions. Ultimately, based on these criteria, I
        made a recommendation and we decided to migrate to Figma.
      </p>
    </SubSection>

    <SubSection title="Design Priciple Synthesis">
      <p>
        The ultimate goal of the research phase of this project was to
        synthesize a small number of design priciples that we could use to guide
        our work through implementation. Through discussing research findings
        with other designers, engineers, and product stakeholders, we were able
        to come up with three rules to live by.
      </p>
      <h4>Build only what we need</h4>
      <p>
        As a small product team, we wanted our main focus to be on building
        features. The design system would be augmented and iterated on only as
        product needs required. Additionally, we learned that speculative
        designing for theoritical future use cases often resulted in unused work
        or work that made bad assumptions. By building only what we need, when
        we need it, we could avoid this wasted effort.
      </p>
      <h4>Make color matter</h4>
      <p>
        Our users are trying to do their job and have complex workflows. Our
        visual design should work to simplify those workflows and not distract.
        Therefore, color and other "loud" visual design is only used when it has
        an explicit purpose.
      </p>
      <h4>Accessibile design</h4>
      <p>
        In much of our original design system, accessibility was an
        afterthought. This manifested in ways that impacted all users
        (insufficient color contrast, small font sizes, etc). It was important
        to our entire product team that our product not exclude potential users
        with permanent, temporary, or situational impairments.
      </p>
    </SubSection>
  </Section>
);

export default Research;

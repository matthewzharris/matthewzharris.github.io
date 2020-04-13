import React from 'react';
import Carousel from 'nuka-carousel';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import designImage from '../../images/p4process.jpg';
import analysisImage from '../../images/p4companalysis.jpg';
import heuristicImage from '../../images/p4heuristics.jpg';
import contextualInquiry from '../../images/p4contextualinquiry.jpg';
import affinityMapping from '../../images/p4interviewaffinitymapping2.jpg';
import personaImage from '../../images/p4persona.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Market Research">
      <p>
        I led our research of the event mobile app market to see where there
        might be opportunities for Cue.
      </p>
      <ul>
        <li>
          Texting was primarily used by people interviewed to create informal
          events, but there are many issues with using texting. Those issues
          include non-responses and general confusion with no specific place for
          event details.
        </li>
        <li>
          For formal events, people typically used a calendar app to schedule
          meetings and used Facebook events for more formal scheduled events
          with friends.
        </li>
      </ul>
      <Image src={analysisImage} alt="analysis" />
      <p>
        From this analysis, I made a hypothesis that there is an opportunity to
        help people create quick and casual events.
      </p>
    </SubSection>

    <hr />

    <SubSection title="Heuristic Analysis">
      <p>
        I lead a heuristic analysis of the existing Cue mobile app and noted
        some elements to be updated:
      </p>
      <ul>
        <li>
          Outdated, inconsistent, and distracting visual elements (for instance,
          background image on the main event screen)
        </li>
        <li>
          Unintuitive user flows (for example, getting to an event chat took
          multiple screens)
        </li>
        <li>Issues with the language used caused privacy concerns</li>
      </ul>
      <Image src={heuristicImage} alt="Heuristic Analysis" />
    </SubSection>

    <hr />

    <SubSection title="User Research">
      <p>
        From contextual inquiries, we found the current MVP to have an
        unintuitive interface and a lack of feedback for users completing tasks.
        The two main themes from 5 user interviews with potential Cue users
        were:
      </p>
      <ul>
        <li>
          Texting issues include excessive back-and-forth and difficulty in
          whether people are attending
        </li>
        <li>
          More formal apps require many details and everyone to have that app
          installed
        </li>
      </ul>
      <Carousel
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
        }}
      >
        <Image src={contextualInquiry} alt="User Research" />
        <Image src={affinityMapping} slt="Affinity Mapping" />
      </Carousel>
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        From research, one of our personas was Jill Smith. She is a busy working
        mom with packed work and family schedules, but she still tries to see
        her friends whenever they have free time. Her pain points with events
        are that she and her friends often forget to meet when they planned
        because of their busy lives. They also often need to change when and
        where they planned to meet and coordinate between multiple friends.
      </p>
      <Image src={personaImage} alt="Persona" />
    </SubSection>
  </Section>
);

export default Research;

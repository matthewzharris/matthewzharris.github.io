import React, { Fragment } from 'react'

import Section, { SubSection } from '../Section'
import Image from '../Image'

import designImage from '../../images/p4process.jpg'
import analysisImage from '../../images/p4companalysis.jpg'
import heuristicImage from '../../images/p4heuristics.jpeg'
import contextualInquiry from '../../images/p4contextualinquiry.jpg'
import affinityMapping from '../../images/p4interviewaffinitymapping2.jpg'
import personaImage from '../../images/p4persona.jpg'

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Comparative Analysis">
      <p>
        I led our business analysis research of the event mobile app market to
        see where there might be opportunities for Cue.
      </p>
      <ul>
        <li>
          For informal events, texting was primarily used to create events, even
          though there were significant issues with group texts like
          non-responses, general confusion with no specific place for event
          details, etc.
        </li>
        <li>
          For formal events, people typically used a calendar app to schedule
          meetings and used Facebook events for more formal scheduled events
          with friends.
        </li>
      </ul>
      <Image src={analysisImage} alt="analysis" />
      <p>
        From this analysis, we determined that their might be an opportunity to
        help people create informal events with more structure than texting.
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
      </p>
      <Image src={contextualInquiry} alt="User Research" />
      <p>
        The user researcher performed 5 user interviews with potential Cue users
        in order to uncover some common themes and pain points around event
        scheduling. The two main common themes were:
      </p>
      <ul>
        <li>
          Problems with texting include requiring excessive back-and-forth and
          ambiguity surrounding commitment
        </li>
        <li>
          Problems with more formal platforms include needing all parties to
          have that application and needing many, well defined details
        </li>
      </ul>
      <Image src={affinityMapping} slt="Affinity Mapping" />
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        From research, we created Jill Smith who is a busy working mom with
        packed work and family schedules, but she still tries to see her friends
        whenever they have free time. She hates when people are late, getting
        e-vites, and being the go-between for events. Her pain points with
        events are that she and her friends often forget to meet when they
        planned because of their busy lives. They also often need to change when
        and where they planned to meet and coordinate between multiple friends.
      </p>
      <Image src={personaImage} alt="Persona" />
    </SubSection>
  </Section>
)

export default Research

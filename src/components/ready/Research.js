import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import siteMapImage from '../../images/p3originalsitemap.jpg';
import comparativeImage from '../../images/p3comparative.jpg';
import heuristicImage from '../../images/p3heuristic.jpg';
import userResearchImage from '../../images/ready-work-1.jpg';
import personaImage from '../../images/p3persona.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Current Sitemap">
      <p>
        I evaluated the current website in order to determine what information
        would be pertinent for our app. I created the sitemap of the current
        website to understand how Seattle Emergency Management organizes their
        content and how they lay out information to the user. The information on
        the site was very dense and split into many different categories based
        on whether the user was an individual, school official, or business
        owner. The amount of information was pretty overwhelming so I decided to
        focus on the preparing individual section since the app would be for
        Seattle residents' personal usage.
      </p>
      <Image alt="Current Site Map" src={siteMapImage} />
    </SubSection>

    <hr />

    <SubSection title="Comparative Analysis">
      <p>
        I lead the comparative analysis of disaster prep apps in the market to
        review potential features for the app. Although FEMA and Red Cross had
        the most to offer to a user, they were incredibly bloated in features
        and made preparing for an emergency a daunting task. Ready NYC was a
        better example of helping a city’s residents get prepared and provide
        information during an emergency, but it only provided information for
        NYC and had some design issues.
      </p>
      <Image src={comparativeImage} alt="Comparative Analysis" />
      <p>From this analysis, the important features found were:</p>
      <ul>
        <li>Alerts</li>
        <li>Emergency material checklist</li>
        <li>Natural disaster tips</li>
        <li>Multi Language support</li>
        <li>Filters for alerts</li>
      </ul>
    </SubSection>

    <hr />

    <SubSection title="Heuristic Analysis">
      <p>
        I did a full heuristic evaluation on Ready NYC because it was the best
        representation of a citywide emergency preparedness mobile app. I found
        that the app was strong in facilitating user tasks, great readability
        and information architecture. The app struggled with unclear labeling
        and inconsistent design.
      </p>
      <Image alt="Heuristic Analysis" src={heuristicImage} />
      <p>The app was excelled in:</p>
      <ul>
        <li>Organizational Clarity</li>
        <li>Supporting Readability</li>
        <li>Facilitating User Tasks</li>
      </ul>
      <p>Some elements that needed improvement:</p>
      <ul>
        <li>Unclear Labeling</li>
        <li>Inconsistent Design</li>
      </ul>
    </SubSection>

    <hr />

    <SubSection title="User Research">
      <p>
        Our researcher interviewed 5 Seattle residents about natural disasters.
        We then pulled quotes from the interviews and created an affinity
        diagram so that we could uncover some common themes and pain points.
      </p>
      <Image src={userResearchImage} alt="User Research" />
      <p>From the research the common issues were:</p>
      <ul>
        <li>Very little disaster education typically in early schooling</li>
        <li>The plan for emergencies is to just “Google it”</li>
        <li>Little to no previous experience with natural disasters</li>
        <li>Preparing for an emergency felt low urgency</li>
      </ul>
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        From our interviews and research, we created the Jake Anderson persona
        that we would design the new Seattle Emergency Management mobile app
        for. Jake embodied a lot of the feelings that people we interviewed had
        about emergency preparedness. He had heard that there may be a major
        natural disaster in Seattle (especially an earthquake), but hadn't
        experienced any disaster himself. He knows he needs to prepare but is
        unsure of how to do so and thinks it is a daunting task.
      </p>
      <Image src={personaImage} alt="Persona" />
    </SubSection>
  </Section>
);

export default Research;

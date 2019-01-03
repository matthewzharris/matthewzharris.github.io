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
        I created a sitemap of the current Seattle Emergency Management website
        to evaluate how information was organized and being presented to the
        user. The information on the site was overwhelming and split into many
        different categories based on whether the user was an individual, school
        official, or business owner. In order to scope the project, I decided
        that the app design would focus on preparing individuals section since
        the app would be for Seattle residents' personal usage.
      </p>
      <Image alt="Current Site Map" src={siteMapImage} />
    </SubSection>

    <hr />

    <SubSection title="Comparative Analysis">
      <p>
        I lead the comparative analysis of disaster prep apps in the market to
        research potential features for the app. Although FEMA and Red Cross had
        the most to offer to a user, the amount of information and features made
        users feel like preparing for diasters would be a daunting task. Ready
        NYC was the best example of helping a city’s residents get prepared and
        provide information during an emergency.
      </p>
      <Image src={comparativeImage} alt="Comparative Analysis" />
      <p>
        From this analysis, the important features for a disaster preparedness
        app were:
      </p>
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
        <a
          href="http://boxesandarrows.com/competitive-analysis-understanding-the-market-context/"
          target="_blank"
        >
          Based on the heuristics from UX journal Boxes and Arrows
        </a>
        , I performed a full heuristic evaluation on Ready NYC because it was
        the best representation of a citywide emergency preparedness mobile app.
      </p>
      <Image alt="Heuristic Analysis" src={heuristicImage} />
      <p>Ready NYC excelled in:</p>
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
        I then pulled quotes from the interviews and created an affinity diagram
        so that we could uncover some common themes and pain points.
      </p>
      <Image src={userResearchImage} alt="User Research" />
      <p>From the generative research the common issues were:</p>
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
        Based on the user inteviews, we created the Jake Anderson persona that
        we would respond to in our design for the new Seattle Emergency
        Management mobile app. In the persona, Jake had heard that there will be
        a major natural disaster in Seattle (likely an earthquake), but hadn't
        experienced any disaster himself. He knows he needs to prepare but is
        intimidated by the task.
      </p>
      <Image src={personaImage} alt="Persona" />
    </SubSection>
  </Section>
);

export default Research;

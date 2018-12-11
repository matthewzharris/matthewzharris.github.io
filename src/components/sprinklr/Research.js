import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import florishImage from '../../images/FlorishMarketResearch.jpg';
import gardeniaImage from '../../images/GardeniaMarketResearch.jpg';
import sitemapImage from '../../images/p2initialsitemap.jpg';
import personaImage from '../../images/sprinklrpersona.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="User Research">
      <p>
        I interviewed 5 people with varying plant care backgrounds to identify
        common motifs of cultivating plants. The themes uncovered were:
      </p>
      <ul>
        <li>
          People have trouble taking care of plants due to differing watering
          schedules and watering amounts
        </li>
        <li>
          Existing methods of tracking plants (including note apps, calendar
          apps or notebooks) aren't optimized for this use case
        </li>
      </ul>
    </SubSection>
    <SubSection title="Market Research">
      <p>
        On the market, there are a couple of mobile apps that try to tackle
        plant care including Florish and Gardenia. Based on the{' '}
        <a href="https://measuringu.com/he-cw/" target="_blank">
          heuristics from Susan Weinschenk and Dean Barker
        </a>
        , I evaluated the apps and found their primary issues in simplicity,
        flexibility, consistency, and accuracy.
      </p>
      <p>
        {' '}
        Florish was a great example of a simple plant care app with beautiful
        imagery, but there was clear room for improvement on a number of fronts:{' '}
      </p>
      <Image alt="Florish Heuristic Evalation" src={florishImage} />
      <p>
        Gardenia is an all encompassing plant care mobile app that allows the
        user to set schedules for everything from watering to pruning plants.
        Although comprehensive, there were many things that could be improved:
      </p>
      <Image alt="Gardenia Heuristic Evaluation" src={gardeniaImage} />
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        From interviews, I created the persona Claire to encapsulate the users'
        goals and frustrations about plant care.
      </p>
      <Image alt="Persona" src={personaImage} />
    </SubSection>
  </Section>
);

export default Research;

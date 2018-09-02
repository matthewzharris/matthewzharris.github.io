import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import comparativeImage from '../../images/p2busanalysis.jpg';
import heuristicImage from '../../images/p2heuristics.jpg';
import sitemapImage from '../../images/p2initialsitemap.jpg';
import personaImage from '../../images/p2persona.jpg';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Comparative Analysis">
      <p>
        I performed business analysis of competitors in order to get a better
        sense of where Retrofit fit in the home goods market.
      </p>
      <p>From this research, I noted that their competitors all had:</p>
      <ul>
        <li>Minimal design</li>
        <li>Brand consistency</li>
        <li>Mobile responsiveness</li>
        <li>Good navigation</li>
        <li>Listed all furniture online whether they had shipping or not</li>
      </ul>
      <Image alt="Comparative Analysis" src={comparativeImage} />

      <p>
        From a feature comparison among competitors, I noted that Retrofit Home
        is lacking in a number of features. In the image below, I highlighted
        features missing from Retrofit’s site including:
      </p>
      <ol type="A">
        <li>Search capabilities</li>
        <li>User accounts</li>
        <li>Product reviews</li>
        <li>Large product photos</li>
        <li>Detailed product descriptions</li>
      </ol>
      <Image alt="Heuristic" src={heuristicImage} />
    </SubSection>

    <hr />

    <SubSection title="Sitemap Analysis">
      <p>
        After visiting the business, I created a sitemap for Retrofit Home and
        noted several navigational issues including:
      </p>
      <ul>
        <li>
          The online shop is an uncategorized bucket of all their products
        </li>
        <li>The shopping cart doesn’t appear until products are added</li>
        <li>The gallery is just a bunch of external links</li>
        <li>
          The lookbook looks unfinished and directs users to the online shop and
          contact page
        </li>
        <li>
          The About Us page is featured in their primary navigation although
          typically unvisited
        </li>
        <li>
          Their social media links are accessible only through the homepage
        </li>
      </ul>
      <Image alt="Sitemap Analysis" src={sitemapImage} />
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        Based on the user research, I chose Lauren as the primary persona based
        on her demographics, behaviors, and needs, which align with Retrofit’s
        core customer. Lauren’s decision making process is focused on flashy
        copywriting, product details, and large photos of products. She needs
        reviews when shopping to be confident in what she is buying. Finally,
        she wants a quick, efficient checkout process (even from mobile) so that
        she can get her products fast.
      </p>
      <Image alt="Persona" src={personaImage} />
    </SubSection>
  </Section>
);

export default Research;

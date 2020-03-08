import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import sketchImage from '../../images/hazelsketch.jpg';
import sitemapImage from '../../images/HazelSitemap.gif';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Sitemap Redesign">
      <p>
        The current top level navigation had many tabs that hid the most useful
        aspects of the product. Surfacing useful features and simplifying the information architecture was
        important to help ensure the users found value in the product and could
        accomplish their tasks. Throughout the early stages of the product, I
        tweaked the new navigation system ultimately arriving with this
        solution:
      </p>
      <Image alt="Hazel Sitemap" src={sitemapImage} />

    </SubSection>

    <hr />

    <SubSection title="Sketches to Blockframes to Wireframes">
      <Image alt="Sketch Blockframe Wireframe" src={sketchImage} />
    </SubSection>
  </Section >
);

export default Ideation;

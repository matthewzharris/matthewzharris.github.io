import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import cardSortImage from '../../images/p2cardsort.jpg';
import sitemapImage from '../../images/p2newsitemap.jpg';
import initialDesignImage from '../../images/p2initialdesigns.jpg';
import paperPrototypeImage from '../../images/p2paperproto.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Redesigned Sitemap">
      <p>
        To fix the information architecture, I led a card sorting to have users
        categorize all of the products that Retrofit sells. From this activity,
        I was able to better categorize their products and begin work on a new
        website navigation.
      </p>
      <Image alt="Card Sort" src={cardSortImage} />
      <p>
        I created new product categories based on the activity associated with
        the product for the navigation, which helped created a standard syntax
        for users.
      </p>
      <p>In the Utility Navigation,</p>
      <ul>
        <li>
          I added an account functionality to help Lauren have faster checkouts
          and leave product reviews.
        </li>
        <li>I added Search for faster navigation.</li>
      </ul>
      <p>In the Footer,</p>
      <ul>
        <li>
          I moved their tertiary business information that isn't high traffic.
        </li>
        <li>
          I added their social media links so they could be accessible from any
          page.
        </li>
      </ul>
      <Image alt="New Site Map" src={sitemapImage} />
    </SubSection>

    <hr />

    <SubSection title="Initial Design">
      <p>
        I drew up some initial sketches of the redesign to help determine layout
        and help solidify some of the page elements.
      </p>
      <ul>
        <li>
          For the home screen, I emphasized the new navigation and provide
          larger product photos.
        </li>
        <li>
          For the product screens, I came up with early versions of the product
          category and product detail page layouts.
        </li>
      </ul>
      <p>
        From this, I learned that I needed to include more product summary and
        detail space because that was important to my persona.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />
    </SubSection>

    <hr />

    <SubSection title="Paper Prototype">
      <p>
        After initial sketches, I drew up some more in depth paper prototypes to
        work out some the interactive elements like the cart function and
        checkout process. I tested this with 2 users and found:
      </p>
      <uL>
        <li>
          The product review section needs to be higher up on the page due to
          its importance.
        </li>

        <li>
          The checkout form also needed better indicators of progress for the
          user.
        </li>
      </uL>
      <Image alt="Paper Prototype" src={paperPrototypeImage} />
    </SubSection>
  </Section>
);

export default Ideation;

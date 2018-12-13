import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import retrofitImage from '../images/retrofit.jpg';
import emeraldImage from '../images/emerald.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/retrofit/Research';
import Ideation from '../components/retrofit/Ideation';
import Solution from '../components/retrofit/Solution';
import Reflections from '../components/retrofit/Reflections';

const Retrofit = () => (
  <Fragment>
    <Helmet title="Retrofit Home | matt harris" />
    <Hero
      title="Retrofit Home"
      image={retrofitImage}
      imageAlt="Retrofit Home Logo"
    >
      <p>
        Local home and personal good retailer that specializes in unique
        products
      </p>
    </Hero>
    <Overview
      brief="Local retailer Retrofit Home is looking to redesign their website to improve the user experience from homepage to checkout and increase their sales both in store and online."
      client="Retrofit Home"
      tools="Sketch, Omnigraffle, Keynote"
      deliverables="Interactive Wireframe Prototype, Sitemap"
      team="None"
      impact=""
      problem="Shoppers need a way to efficiently navigate Retrofit Home’s website because the current site is unstructured in a way that impedes product discoverability. In addition, shoppers need a way to create product reviews because reviews build confidence in purchase decisions."
      goal="Improve Retrofit Home’s website—through more intuitive navigation, creating a product review feature and streamlining the checkout process—to achieve higher online sales and in-store traffic."
    />

    <Research />
    <Ideation />
    <Solution />
    <Reflections />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/emerald/"
        title="Emerald Seattle"
        subtitle="Interaction Design, Visual Design, Project Management"
        image={emeraldImage}
        cover={false}
      />
    </Section>
  </Fragment>
);

export default Retrofit;

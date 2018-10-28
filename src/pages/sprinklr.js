import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import sprinklrImage from '../images/emerald.jpg';
import emeraldImage from '../images/emerald.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/sprinklr/Research';
import Ideation from '../components/sprinklr/Ideation';
import Solution from '../components/sprinklr/Solution';
import Reflections from '../components/sprinklr/Reflections';

const Sprinklr = () => (
  <Fragment>
    <Helmet title="Sprinklr | matt harris" />
    <Hero title="Sprinklr" image={sprinklrImage} imageAlt="Sprinklr Logo">
      <p>TODO</p>
    </Hero>
    <Overview
      brief="TODO"
      client=""
      tools="TODO"
      deliverables="TODO"
      team="TODO"
      impact=""
      problem=""
      goal="TODO"
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

export default Sprinklr;

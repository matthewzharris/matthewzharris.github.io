import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import HazelImage from '../images/hazel.jpg';
import cueImage from '../images/cue.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/hazel/Research';
import Ideation from '../components/hazel/Ideation';
import Solution from '../components/hazel/Solution';
import Reflections from '../components/hazel/Reflections';

const Hazel = () => (
  <Fragment>
    <Helmet title="Hazel Analytics | matt harris" />
    <Hero
      title="Hazel Analytics"
      image={HazelImage}
      imageAlt="Hazel Analytics Logo"
    >
      <p>
        TODO
      </p>
    </Hero>

    <Overview
      brief="TODO"
      client="TODO"
      tools="TODO"
      deliverables="TODO"
      team="TODO"
      impact="TODO"
      problem="TODO"
      goal="TODO"
    />

    <Research />
    <Ideation />
    <Solution />
    <Reflections />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/cue/"
        title="Cue Reminder"
        subtitle="Mobile App Redesign"
        image={cueImage}
      />
    </Section>
  </Fragment>
);

export default Hazel;

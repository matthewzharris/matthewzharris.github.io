import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import GlobespinningImage from '../images/globespinning.jpg';
import cueImage from '../images/cue.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/globespinning/Research';
import Ideation from '../components/globespinning/Ideation';
import Solution from '../components/globespinning/Solution';
import Reflections from '../components/globespinning/Reflections';

const Globespinning = () => (
  <Fragment>
    <Helmet title="Globespinning | matt harris" />
    <Hero
      title="Globespinning"
      image={GlobespinningImage}
      imageAlt="Globespinning Logo"
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

export default Globespinning;

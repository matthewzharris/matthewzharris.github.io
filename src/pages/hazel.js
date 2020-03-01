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
import HazelProcessImage from '../images/HazelAnalyticsProcess.jpg';

const Hazel = () => (
  <Fragment>
    <Helmet title="Hazel Analytics | matt harris" />
    <Hero
      title="Hazel Analytics"
      image={HazelImage}
      imageAlt="Hazel Analytics Logo"
    >
      <p>Bringing data analytics to the future of food safety</p>
    </Hero>

    <Overview
      brief="Hazel Analytics is a data driven technology company looking to revolutionize public health through the connection of food service operators, regulators, and industry providers. Hazel Analytics was looking for a complete redesign of their Food Safety Insights platform, which allowed their clients to review the safety of their restaurants."
      client="Hazel Analytics"
      tools="Figma, Google Slides, Evernote"
      deliverables="High Fidelity Mockups, Interactive Prototype, User Interview Findings, Investor Presentation"
      team="TODO"
      impact="My role on this project was to own the redesign from end-to-end working with the CEO and CTO to brainstorm, define, and design the new platform."
      problem="The initial design of the platform was scrappy due to resources at the time, but suffered from noisy information architecture, duplicative features and unintuitive user flows."
      goal="Design a new platform based on user feedback and a set of unifying design principles."
      designImage={HazelProcessImage}
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

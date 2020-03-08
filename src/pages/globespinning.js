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
        Share your trip itineraries with friends and discover your next vacation
      </p>
    </Hero>

    <Overview
      brief="Redesign the Globespinning mobile app & website"
      client="Globespinning"
      tools="Notion, Sketch, Powerpoint"
      deliverables="Mobile & Web Mockups, Prototype, Investor Deck"
      role="Design Lead"
      impact="On this project, I worked closely with the founders to conceptualize the future of their mobile and web app. After defining the scope of the redesign, I planned the project delivery in conjunction with their business goals. I worked on the full redesign and a remote engineering team to implement my design."
      problem="The app suffered from dated design, complex user flows, and unintuitive interactions."
      goal="Streamline the app with focused flows and thoughtful interactions as well as updated visual design."
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

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import emeraldImage from '../images/emerald.jpg';
import cueImage from '../images/cue.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/emerald/Research';
import Ideation from '../components/emerald/Ideation';
import Solution from '../components/emerald/Solution';
import Reflections from '../components/emerald/Reflections';

const Emerald = () => (
  <Fragment>
    <Helmet title="Emerald Seattle | matt harris" />
    <Hero
      title="Emerald Seattle"
      image={emeraldImage}
      imageAlt="Emerald Seattle Logo"
    >
      <p>Recycling center locator to help keep our city green</p>
    </Hero>
    <Overview
      brief="The city of Seattle is looking for a product that will help to solve a local civic problem."
      client="City of Seattle"
      tools="Pen & Paper, Whiteboard, Sketch, Keynote"
      deliverables="Working Prototype, Presentation"
      team="2 engineers, 2 designers"
      impact="During this client project, I was the lead on information architecture, interaction design and visual design. I led the business analysis research in terms of heuristic analysis of the current product, comparative analysis, and feature comparison in the market. I led the initial sketches, led a design studio, developed the current and future state sitemaps, user flows, low and high fidelity prototypes. I also redesigned the Cue branding for the project."
      problem="The current process for Seattle residents to recycle can be onerous, which leads residents to throw items into the garbage instead of properly recycling them."
      goal="To make the recycling process for Seattle residents easy so that we can help reduce our waste as a part of our city’s Zero Waste Strategy, in which we are aiming to recycle 70% of our waste by 2022."
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

export default Emerald;

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import spendTrackerImage from '../images/SpendTrackerHero.jpg';
import GlobespinningImage from '../images/globespinning.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/spend-tracker/Research';
import Ideation from '../components/spend-tracker/Ideation';
import Solution from '../components/spend-tracker/Solution';
import Reflections from '../components/spend-tracker/Reflections';

const SpendTracker = () => (
  <Fragment>
    <Helmet title="Spend Tracker | matt harris" />
    <Hero
      title="Spend Tracker"
      image={spendTrackerImage}
      imageAlt="Spend Tracker Illustration"
    >
      <p>Cross-channel marketing budget management tool</p>
    </Hero>
    <Overview
      company={
        <a href="https://newengen.com" target="_blank">
          New Engen
        </a>
      }
      tools="Figma, Notion, Whimsical, Sketchpad"
      deliverables="High Fidelity Figma Mockups & Interactive Prototype"
      team="1 UX Designer, 1 Product Manager, 4 Engineers"
      impact="For this project, I was the sole designer and worked with one product manager to research, define the problem, and write user stories. I worked with a team of engineers on the development and implementation of my work to ensure consistency and quality of the final product. The product manager and I closely collaborated to work with users and stakeholders during the entire project duration. I was responsible for all designs from low to high fidelity, management for the design portion, and QA of the final tool."
      problem="Marketers are unable to manage their spend and budgets in a single place because native platforms are walled gardens that don't allow a big picture view across all their marketing channels. As a result, cross-channel budgeting ends up being a time consuming process that is critical to successful marketing."
      goal="Create a spend and budgeting tool that allows marketers to plan, create, and monitor across all their marketing platforms."
    />

    <Research />
    <Ideation />
    <Solution />
    <Reflections />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/globespinning/"
        title="Globespinning"
        subtitle="Mobile app redesign"
        image={GlobespinningImage}
        cover={false}
        bgColor="black"
      />
    </Section>
  </Fragment>
);

export default SpendTracker;
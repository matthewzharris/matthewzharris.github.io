import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import creativeExplorerImage from '../images/CreativeExplorerMainImage.jpg';
import GlobespinningImage from '../images/globespinning.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/creative-explorer/Research';
import Ideation from '../components/creative-explorer/Ideation';
import Solution from '../components/creative-explorer/Solution';
import Reflections from '../components/creative-explorer/Reflections';

const CreativeExplorer = () => (
  <Fragment>
    <Helmet title="Creative Explorer | matt harris" />
    <Hero
      title="Creative Explorer"
      image={creativeExplorerImage}
      imageAlt="Creative Explorer Illustration"
    >
      <p>Interactive visual reporting tool for marketing teams</p>
    </Hero>
    <Overview
      company={
        <a href="https://newengen.com" target="_blank">
          New Engen
        </a>
      }
      tools="Figma, Notion, Zoom, Sketchpad"
      deliverables="High Fidelity Mockups"
      team="3 UX Designers, 1 Product Manager, 4 Engineers"
      impact="I led an effort to add tagging functionality to a nascent New Engen product called Creative Explorer. I discovered the need in user research, worked with product to define the problem and iterate on solutions, and implemented the final design in collaboration with our front end team."
      problem="Marketers spend significant time designing and creating ads for marketing channels. After the ads are launched, it is very difficult for marketers to identify trends and iterate on successful ads because it's too time consuming to aggregate data across channels, accounts and campaigns."
      goal="Develop a tool that allows marketing teams to have insights into ad performance and trends so they can make data driven decisions for their creative and marketing strategies."
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

export default CreativeExplorer;

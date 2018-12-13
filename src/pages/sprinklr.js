import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import sprinklrImage from '../images/sprinklrhero.jpg';
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
      <p>
        Cultivate your own plants by creating simple watering schedules and
        tracking growth
      </p>
    </Hero>
    <Overview
      brief="During the summer wildfires in Washington state, I became concerned for my family and puppy that the indoor air quality was no longer safe. Instead of buying an air purifier, I wanted to know if I could find plants that would help clean indoor air year round. The major issue that I found was my black thumb; I’ve always had issues picking plants and keeping them alive. I wanted to explore the issue of starting to grow plants and make it easier for beginner gardeners."
      client=""
      tools="Sketch, Omnigraffle, Invision, Principle"
      deliverables="Working mobile app"
      team="1 UX Designer, 1 Developer"
      impact=""
      problem="Starting a plant collection is daunting due to all the requirements to keep plants alive"
      goal="Create a mobile app that allows anyone to keep track of their plants and their watering schedules"
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

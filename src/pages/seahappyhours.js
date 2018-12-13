import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import SHHImage from '../images/SHHheroimage.jpg';
import cueImage from '../images/cue.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/seahappyhours/Research';
import Ideation from '../components/seahappyhours/Ideation';
import Solution from '../components/seahappyhours/Solution';
import Reflections from '../components/seahappyhours/Reflections';

const SEAHappyHours = () => (
  <Fragment>
    <Helmet title="Seattle Happy Hours | matt harris" />
    <Hero
      title="Seattle Happy Hours"
      image={SHHImage}
      imageAlt="Seattle Happy Hours Logo"
    >
      <p>
        Citywide happy hour finder to connect people and thaw the Seattle Freeze
      </p>
    </Hero>
    <Overview
      brief="I’ve always been interested in the connection of people in physical spaces in our increasingly digital world. The ability to foster relationships in public meeting spaces is ever changing, which is why I’m fascinated with companies like Meetup. With this idea, I wanted to create a product that could help facilitate those personal connections in physical spaces."
      tools="Omnigraffle, Sketch, Invision"
      deliverables="Working website"
      team="1 UX Designer, 1 Software Engineer"
      impact="During this project, I was the sole UX Designer focused on all aspects of the user experience and product strategy. This included a particular focus on the information architecture, interaction design, and visual design of the website."
      problem="Seattle’s residents don’t have an easy way of determining where and when happy hours occur."
      goal="Create a responsive website that will provide users with quick access to happy hour related information"
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

export default SEAHappyHours;

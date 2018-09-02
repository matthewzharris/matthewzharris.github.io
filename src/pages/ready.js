import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import readyImage from '../images/ready-hero.png';
import designImage from '../images/p3process.jpg';
import retrofitImage from '../images/retrofit.jpg';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/ready/Research';
import Ideation from '../components/ready/Ideation';
import Solution from '../components/ready/Solution';
import Reflections from '../components/ready/Reflections';

const Ready = () => (
  <Fragment>
    <Helmet title="Ready Seattle | matt harris" />
    <Hero
      title="Ready Seattle"
      image={readyImage}
      imageAlt="Ready Seattle Logo"
    >
      <p>Helping Seattle's residents to prepare for natural disasters</p>
    </Hero>
    <Overview
      brief="Seattle Emergency Management was seeking our help to create a mobile app that will help bring the information from their website into the phones of Seattle residents."
      client="Seattle Emergency Management"
      tools="Pen & Paper, Omnigraffle, Sketch, Keynote"
      deliverables="Interactive High Fidelity Prototype, Sitemap, Project Plan, Presentation"
      team="3 UX Designers"
      impact="During this concept project, I was lead in information architecture and visual design as well as the project manager of our UX design team. I did the business research of the project through a comparative analysis of features in the disaster app market and a heuristic analysis of top apps. I created the current sitemap and mobile sitemap, hi fidelity prototypes, and the Ready Seattle branding. I also created and lead the presentation of design solutions."
      problem="Seattle’s millennials don’t consider being prepared for a natural disaster an important or easily actionable problem"
      goal="To make a mobile app that simplifies disaster preparation and disaster information in order to increase the readiness of Seattle residents by 6% (as defined by FEMA's emergency preparedness profiles)"
      designImage={designImage}
    />

    <Research />
    <Ideation />
    <Solution />
    <Reflections />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/retrofit/"
        title="Retrofit Home"
        subtitle="UX Design (Content Strategy, Information Architecture & Interaction Design)"
        image={retrofitImage}
        cover={false}
      />
    </Section>
  </Fragment>
);

export default Ready;

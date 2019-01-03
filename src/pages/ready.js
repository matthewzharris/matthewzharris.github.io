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
      tools="Sketch, Omnigraffle, Invision, Principle"
      deliverables="Interactive High Fidelity Prototype, Sitemap, Project Plan, Presentation"
      team="3 UX Designers"
      impact="During this project, I focused on the information architecture and visual design. I lead the business research of the project through a comparative analysis of features and heuristic evaluations of top disaster apps. I developed the architecture of the mobile app as well as the Ready Seattle branding. I was responsible for creating the wireframes and interactive high fidelity prototype based on the researcher’s findings and usability test results. In addition to my role as a designer, I was also the project manager of the design team to ensure the project was delivered within scope and on time."
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
        subtitle="User Research, Information Architecture, Interaction Design"
        image={retrofitImage}
        cover={false}
      />
    </Section>
  </Fragment>
);

export default Ready;

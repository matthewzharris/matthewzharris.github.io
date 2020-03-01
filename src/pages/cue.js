import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/cue/Research';
import Ideation from '../components/cue/Ideation';
import Solution from '../components/cue/Solution';
import Reflections from '../components/cue/Reflections';

import cueImage from '../images/cue.jpg';
import designImage from '../images/p4process.jpg';
import readyImage from '../images/ready.jpg';

const Cue = () => (
  <Fragment>
    <Helmet title="Cue Reminder | matt harris" />
    <Hero title="Cue Reminder" image={cueImage} imageAlt="Cue Reminder Logo">
      <p>
        Easily schedule casual social events, chat with attendees, and share ETA
      </p>
    </Hero>
    <Overview
      brief="B Tech Global wanted to refine the user experience and vision of their app, Cue, which was created to schedule events."
      client="B Tech Global"
      tools="Sketch, Omnigraffle, Invision, Principle"
      deliverables="Interactive Final Prototype, Redlines, Annotations, Presentation"
      team="2 Designers"
      impact="During this client project, I was the lead on information architecture, interaction design and visual design. I led the business analysis research in terms of heuristic analysis of the current product, comparative analysis, and feature comparison in the market. I led the initial sketches, led a design studio, developed the current and future state sitemaps, user flows, low and high fidelity prototypes. I also redesigned the Cue branding for the project."
      problem="People with busy calendars, who feel concerned about managing casual social events, face complex and formal barriers in existing forms of event scheduling."
      goal="Create a mobile app that can provide a quick and easy way to create informal social events"
      designImage={designImage}
    />

    <Research />
    <Ideation />
    <Solution />
    <Reflections />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/ready/"
        title="ReadySeattle"
        subtitle="Information Architecture, Visual Design, Project Management"
        image={readyImage}
        cover={false}
      />
    </Section>
  </Fragment>
);

export default Cue;

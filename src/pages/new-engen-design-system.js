import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import heroImage from '../images/NEDesignSystemHero.jpg';

import HazelImage from '../images/hazel.jpg';
import Overview from '../components/Overview';
import Section, { SubSection } from '../components/Section';
import WorkItem from '../components/WorkItem';

import Research from '../components/new-engen-design-system/Research';
import Process from '../components/new-engen-design-system/Process';
import System from '../components/new-engen-design-system/System';
import Impact from '../components/new-engen-design-system/Impact';

const NewEngenDesignSystem = () => (
  <Fragment>
    <Helmet title="New Engen Design System | matt harris" />
    <Hero
      title="New Engen Design System"
      image={heroImage}
      imageAlt="New Engen Design System"
    >
      <p>The Design System for SAAS Marketing Company, New Engen</p>
    </Hero>

    <Overview
      company={
        <a href="https://newengen.com" target="_blank">
          New Engen
        </a>
      }
      tools="Sketch to Figma"
      deliverables="Figma Design System, Storybook"
      role="Design Lead"
      impact="Over this ongoing project, I led the design, development, implementation, and support of a design system in collaboration with two other product designers and four engineers."
      problem="The existing New Engen design system wasn't consistently applied or used by either designers or developers, which resulted in a disjointed design across the product and lost time on our product and engineering teams."
      goal="Operationalize a new design system that fits our company's mission to create a consistent user experience and save our teams time and money."
    >
      <Section>
        <SubSection title="Background">
          <p>
            At the beginning of 2019, New Engen had a design system that was
            failing our product and engineering teams. The design system as it
            stood had a number of issues:
          </p>
          <ul>
            <li>Design system was siloed in a designer-owned Sketch file</li>
            <li>No centralized implementation existed in the web front end</li>
            <li>
              Patterns and components weren't being reused on either the design
              or development side
            </li>
            <li>No process to add or audit the design system existed</li>
            <li>
              No "source of truth" led to incosistent application of standards
            </li>
          </ul>
        </SubSection>
        <hr />
        <SubSection title="Solution Overview">
          <p>
            The scope of the challenges that existed in the existing design
            system made it clear that an iterative approach wouldn't be
            sufficient–we needed to rethink the system from the ground up.
          </p>
          <p>
            Recognizing this, I proposed a three part solution and aligned the
            team including the director of UX and VP of engineering behind it:
          </p>
          <ol>
            <li>
              Conduct internal and external <strong>research</strong> to arrive
              at a set of guiding principles
            </li>
            <li>
              Implement a set of <strong>process improvements</strong> to ensure
              the team and the system stays in sync
            </li>
            <li>
              Work collaboratively to implement a initial version of{' '}
              <strong>the system</strong> that we could continue to build on
            </li>
          </ol>
        </SubSection>
      </Section>
    </Overview>

    <Research />
    <Process />
    <System />
    <Impact />

    <Section shade={5}>
      <h4>Keep Reading</h4>
      <WorkItem
        link="/hazel/"
        title="Hazel Analytics"
        subtitle="Web app redesign"
        image={HazelImage}
      />
    </Section>
  </Fragment>
);

export default NewEngenDesignSystem;

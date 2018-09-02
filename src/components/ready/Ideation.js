import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import prioritizationImage from '../../images/p3prioritization.jpg';
import initialDesignImage from '../../images/p3initialdesign.jpg';
import prototypeImage from '../../images/p3paper.jpg';
import lowFidelityImage from '../../images/p3designstudio.jpg';
import lowFidelityImage2 from '../../images/p3lowfi.jpeg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Feature Prioritization">
      <p>
        Responding to Jake's persona and the problem, we brainstormed and
        prioritized a list of potential features.
      </p>
      <Image alt="Feature Prioritization" src={prioritizationImage} />
    </SubSection>

    <hr />

    <SubSection title="Initial Design">
      <p>
        After researching, we came up with 5 main screens that best fit our
        persona needs and our client’s needs. In order to help Jake learn about
        natural disaster safety, we would have an alerts page, emergency
        information page and a map of disasters and shelters. In order to help
        Jake prepare for a disaster, we created an emergency go bag checklist. I
        created a sitemap in order to organize the information that would be
        included in the app.
      </p>
      <Image alt="Initial Design" src={initialDesignImage} />
    </SubSection>

    <hr />

    <SubSection title="Paper Prototype">
      <p>
        We created a paper prototype to help create an Emergency Go Bag, provide
        emergency information, and alerts.
      </p>
      <Image src={prototypeImage} alt="Paper Prototype" />
      <p>From usability testing, we found:</p>
      <ul>
        <li>Current Bag list screen within “Go Bag” tab confused users</li>
        <li>Go Bag screen needs more motivation for users</li>
      </ul>
    </SubSection>

    <hr />

    <SubSection title="Low Fidelity Wireframes">
      <p>
        In a design studio, we developed a new Go Bag screen with a visual that
        would show what items have been added and what percentage the user has
        collected.
      </p>
      <p>
        We wanted to focus on the user motivation for completing tasks by giving
        them a success metric and indicating their progress.
      </p>
      <Image alt="Design Studio" src={lowFidelityImage} />
      <p>
        After paper prototypes and design studio, our interaction designer
        created clickable wireframes.
      </p>
      <Image alt="Low Fidelity Wireframes" src={lowFidelityImage2} />
      <p>
        From usability testing, we found users were able to complete all of the
        tasks. The items that users had issues with were focused mostly on the
        labelling which was due to a lower fidelity wireframe. Elements that
        needed improvement were:
      </p>
      <ul>
        <li>Map screen pins unidentified</li>
        <li>Alerts not clickable</li>
        <li>Info page and categories within unclear</li>
        <li>Term “Go Bag” not always intuitive</li>
      </ul>
    </SubSection>
  </Section>
);

export default Ideation;

import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import spendTrackerPersonaImage from '../../images/spendtrackerpersona.png';
import activityFlowImage from '../../images/spendtrackeractivityflowdiagram.png';
import budgetComplexityImage from '../../images/budgetcomplexity.png';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Market Research">
      <p>
        As one of the major levers available to marketers, budgets play an
        important role for our users in their marketing strategies. As our users
        test different ad concepts, they use budgets to increase spend to
        successful ads and reduce spend to any ads without traction. They use
        efficiency metrics that represent internal company goals to gauge
        success when managing their budgets and spend. From a{' '}
        <a
          href="https://www.gartner.com/en/marketing/insights/articles/4-key-findings-in-the-annual-gartner-cmo-spend-survey-2019-2020"
          target="_blank"
        >
          major Gartner survey of CMOs
        </a>
        , digital ad spending is roughly 16% of the total marketing budget with
        78% likely to increase that amount next year. There seems to be a major
        opportunity to help our users manage their budgets more efficiently so
        they can focus on more strategic aspects of their jobs.
      </p>
    </SubSection>

    <hr />

    <SubSection title="User Research">
      <p>
        Talking to users both internal and external was key to understand the
        subject of budgeting for marketers. It was clear from our interviews and
        research that marketers approached budgeting in many different ways. Our
        solution would need to be both flexible enough to accommodate these
        different workflows and focused on the common challenges that are
        consistent across teams.
      </p>
      <div className="row">
        <div className="col-md-3">
          <strong>8</strong>
          <div>
            <small>internal user interviews</small>
          </div>
        </div>
        <div className="col-md-3">
          <strong>3</strong>
          <div>
            <small>external user interviews</small>
          </div>
        </div>
        <div className="col-md-3">
          <strong>2</strong>
          <div>
            <small>prospective users identified as need</small>
          </div>
        </div>
        <div className="col-md-3">
          <strong>3</strong>
          <div>
            <small>stakeholder interviews</small>
          </div>
        </div>
      </div>
      <p></p>
      <h4>Persona</h4>
      <p>
        Based on all the qualitative data gathered from research, I developed
        our persona the marketing manager Amy who captured the goal, tasks, and
        tasks of our interview participants.
      </p>
      <Image alt="Spend Tracker Persona" src={spendTrackerPersonaImage} />
      <h4>Activity Flow</h4>
      <p>
        I developed an activity flow that summarized the budgeting process for
        our interview participants so that our project team could understand our
        users better.{' '}
      </p>
      <Image
        alt="Spend Tracker Activity Flow Diagram"
        src={activityFlowImage}
      />
      <h4>Budget Complexity</h4>
      <p>
        Based on our research, our users were managing a complex budget. For the
        most basic budget, users are tracking budget, spend, and target metrics
        at the channel, platform, and even campaign level.
      </p>
      <Image alt="Budget Complexity Diagram" src={budgetComplexityImage} />
    </SubSection>
  </Section>
);

export default Research;

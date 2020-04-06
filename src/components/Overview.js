import React, { Fragment } from 'react';

import './Overview.css';

import Image from './Image';

const Stats = ({ brief, client, company, tools, deliverables, team }) => (
  <div className="row">
    {brief ? <div className="col-xl-12">
      <h4>Brief</h4>
      <p>{brief}</p>
    </div> : null}
    {client ? <div className="col-lg-6">
      <h4>Client</h4>
      <p>{client}</p>
    </div> : null}
    {company ? <div className="col-lg-6">
      <h4>Company</h4>
      <p>{company}</p>
    </div> : null}
    <div className="col-lg-6">
      <h4>Tools</h4>
      <p>{tools}</p>
    </div>
    <div className="col-lg-6">
      <h4>Deliverables</h4>
      <p>{deliverables}</p>
    </div>
    {team ?
      <div className="col-lg-6">
        <h4>Team</h4>
        <p>{team}</p>
      </div> : null}
  </div>
);

const Impact = ({ impact }) => (
  <Fragment>
    <h3>My Impact</h3>
    <p>{impact}</p>
  </Fragment>
);

const DesignProcess = ({ image }) => (
  <div className="row">
    <div className="col-sm">
      <h3>Design Process</h3>
      <div className="text-center">
        <Image className="design-image" src={image} />
      </div>
    </div>
  </div>
);

const ProblemGoal = ({ problem, goal }) => (
  <div className="row">
    <div className="col-sm ">
      <h3>Problem</h3>
      <p>{problem}</p>
    </div>
    <div className="col-sm ">
      <h3>Goal</h3>
      <p>{goal}</p>
    </div>
  </div>
);

const Overview = ({
  brief,
  client,
  company,
  tools,
  deliverables,
  team,
  impact,
  problem,
  goal,
  designImage,
  children,
}) => (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <Stats
            brief={brief}
            client={client}
            company={company}
            tools={tools}
            deliverables={deliverables}
            team={team}
          />
        </div>
        {impact && (
          <div className="col-md-5 impact pl-4 pr-4 pt-4 pb-1">
            <Impact impact={impact} />
          </div>
        )}
      </div>
      <hr />
      <ProblemGoal problem={problem} goal={goal} />
      {designImage && <hr />}
      {designImage && <DesignProcess image={designImage} />}
      {children && <hr />}
      {children}
    </div>
  );

export default Overview;

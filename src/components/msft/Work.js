import React from 'react';

import WorkItem from '../../components/WorkItem';

import cueImage from '../../images/cue.jpg';
import readyImage from '../../images/P3herofinal.jpg';
import retrofitImage from '../../images/P2herofinal.jpg';
import emeraldImage from '../../images/emerald.jpg';
import SHHImage from '../../images/SHHhero2.jpg';

const Work = () => (
  <section className="container mb-5 pb-5" id="work">
    <div className="row">
      <h2 className="col-sm">Work</h2>
    </div>
    <div className="row mb-4">
      <div className="col-sm">
        <WorkItem
          link="/cue/"
          title="Cue Reminder"
          subtitle="Information Architecture, Interaction Design, Visual Design"
          image={cueImage}
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1">
      <div className="row">
        <h3 className="col-sm text-center">Simple information architecture</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          I focus on simplicity in information architecture in order to ease the
          cognitive load of users and speed overall development.
        </p>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/seahappyhours/"
          title="SEA Happy Hours"
          subtitle="Responsive Web App"
          image={SHHImage}
          cover={false}
          bgSize="78%"
        />
      </div>
      <div className="col-md-8">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="E-Commerce"
          image={retrofitImage}
          cover={false}
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1 pr-1 pl-1">
      <div className="row">
        <h3 className="col-sm text-center">Beautiful, Elegant Visual Design</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          I temper innovative design with platform expectations to create
          delightful, intuitive experiences.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/ready/"
          title="ReadySeattle"
          subtitle="Mobile App"
          image={readyImage}
          cover={false}
          bgSize="68%"
        />
      </div>
      <div className="col-md-4">
        <WorkItem
          link="/emerald/"
          title="Emerald Seattle"
          subtitle="Seattle Government"
          image={emeraldImage}
          cover={false}
        />
      </div>
    </div>
  </section>
);

export default Work;

import React from 'react';

import WorkItem from '../components/WorkItem';

import cueImage from '../images/cue.jpg';
import readyImage from '../images/P3HeroFinal.jpg';
import retrofitImage from '../images/P2HeroFinal.jpg';
import sprinklrImage from '../images/sprinklrhero.jpg';
import SHHImage from '../images/SHHhero2.jpg';

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
    <div className="row mb-4">
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/sprinklr/"
          title="Sprinklr"
          subtitle="UX Design"
          image={sprinklrImage}
        />
      </div>
      <div className="col-md-8">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="User Research, Information Architecture, Interaction Design"
          image={retrofitImage}
          cover={false}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/ready/"
          title="ReadySeattle"
          subtitle="Information Architecture, Visual Design, Project Management"
          image={readyImage}
          cover={false}
        />
      </div>
      <div className="col-md-4">
        <WorkItem
          link="/seahappyhours/"
          title="SEA Happy Hours"
          subtitle="UX Design"
          image={SHHImage}
          cover={false}
        />
      </div>
    </div>
  </section>
);

export default Work;

import React from 'react';

import WorkItem from '../components/WorkItem';

import cueImage from '../images/cue.jpg';
import readyImage from '../images/ready.jpg';
import retrofitImage from '../images/retrofit.jpg';
import emeraldImage from '../images/emerald.jpg';

const Work = () => (
  <section className="container" id="work">
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
      <div className="col-md mb-4 mb-md-0">
        <WorkItem
          link="/ready/"
          title="ReadySeattle"
          subtitle="Information Architecture, Visual Design, Project Management"
          image={readyImage}
        />
      </div>
      <div className="col-md">
        <WorkItem
          link="/emerald/"
          title="Emerald Seattle"
          subtitle="Interaction Design, Visual Design, Project Management"
          image={emeraldImage}
          cover={false}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-sm">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="UX Design (Content Strategy, Information Architecture & Interaction Design)"
          image={retrofitImage}
          cover={false}
        />
      </div>
    </div>
  </section>
);

export default Work;

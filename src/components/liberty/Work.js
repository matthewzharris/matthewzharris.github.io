import React from 'react';

import WorkItem from '../../components/WorkItem';

import cueImage from '../../images/cue.jpg';
import readyImage from '../../images/P3HeroFinal.jpg';
import retrofitImage from '../../images/P2HeroFinal.jpg';
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
          link="/ready/"
          title="ReadySeattle"
          subtitle="Information Architecture, Visual Design, Project Management"
          image={readyImage}
          cover={false}
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1 pl-2 pr-2">
      <div className="row">
        <h3 className="col-sm text-center">Product Design</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          I focus on applying the design thinking process and utilizing UX tools
          to create simple user-centric designs
        </p>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="User Research, Information Architecture, Interaction Design"
          image={retrofitImage}
          cover={false}
        />
      </div>
      <div className="col-md-8">
        <WorkItem
          link="/cue/"
          title="Cue Reminder"
          subtitle="Information Architecture, Interaction Design, Visual Design"
          image={cueImage}
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1 pr-2 pl-2">
      <div className="row">
        <h3 className="col-sm text-center">Research-Driven</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          No matter the industry, I believe that fully understanding the user
          builds empathy and ultimately, great products.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/emerald/"
          title="Emerald Seattle"
          subtitle="Interaction Design, Visual Design, Project Management"
          image={emeraldImage}
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
          bgSize="78%"
        />
      </div>
    </div>
  </section>
);

export default Work;

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
          link="/cue/"
          title="Cue Reminder"
          subtitle="Information Architecture, Interaction Design, Visual Design"
          image={cueImage}
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1">
      <div className="row">
        <h3 className="col-sm text-center">Cross-Platform Design</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          I design experiences that span devices and meet modern users where
          they are.
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
          link="/ready/"
          title="ReadySeattle"
          subtitle="Mobile App"
          image={readyImage}
          cover={false}
          bgSize="68%"
        />
      </div>
    </div>

    <div className="work-description mb-4 pt-5 pb-1 pr-1 pl-1">
      <div className="row">
        <h3 className="col-sm text-center">Focus on Usability</h3>
      </div>
      <div className="row">
        <p className="col-sm text-center">
          Across a variety of UX tools, I test my designs at every phase to
          ensure the final product meets user needs.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="E-Commerce"
          image={retrofitImage}
          cover={false}
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

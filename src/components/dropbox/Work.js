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
          link="/seahappyhours/"
          title="SEA Happy Hours"
          subtitle=""
          image={SHHImage}
          cover={false}
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
          link="/emerald/"
          title="Emerald Seattle"
          subtitle="Responsive Web App"
          image={emeraldImage}
          cover={false}
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
          link="/cue/"
          title="Cue Reminder"
          subtitle="Mobile App Redesign"
          image={cueImage}
        />
      </div>
      <div className="col-md-4">
        <WorkItem
          link="/retrofit/"
          title="Retrofit Home"
          subtitle="Information Architecture Improvements"
          image={retrofitImage}
          cover={false}
        />
      </div>
    </div>
  </section>
);

export default Work;
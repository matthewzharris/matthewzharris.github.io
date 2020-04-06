import React from 'react';

import WorkItem from '../components/WorkItem';

import cueImage from '../images/Cue_SplashScreenMockup.jpg';
import spendTrackerImage from '../images/SpendTrackerHero.jpg';
import designSystemImage from '../images/NEDesignSystemHero.jpg';
import GlobespinningImage from '../images/globespinning.jpg';
import HazelImage from '../images/hazel.jpg';

const Work = () => (
  <section className="container mb-5 pb-5" id="work">
    <div className="row">
      <h2 className="col-sm">Work</h2>
    </div>
    <div className="row mb-4">
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/globespinning/"
          title="Globespinning"
          subtitle="Mobile app redesign"
          image={GlobespinningImage}
        />
      </div>
      <div className="col-md-8">
        <WorkItem
          link="/hazel/"
          title="Hazel Analytics"
          subtitle="Web app redesign"
          image={HazelImage}
        />
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md-12">
        <WorkItem
          link="/new-engen-design-system/"
          title="New Engen Design System"
          subtitle="Design Lead"
          image={designSystemImage}
        />
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/spend-tracker/"
          title="New Engen: Spend Tracker"
          subtitle="Design Lead"
          image={spendTrackerImage}
          cover={false}
        />
      </div>
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/cue/"
          title="Cue Reminder"
          subtitle="Mobile app redesign"
          image={cueImage}
        />
      </div>
    </div>
  </section>
);

export default Work;

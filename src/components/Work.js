import React from 'react';

import WorkItem from '../components/WorkItem';

import cueImage from '../images/Cue_SplashScreenMockup.jpg';
import spendTrackerImage from '../images/SpendTrackerPortfolioImage.jpg';
import designSystemImage from '../images/NEDesignSystemHero.jpg';
import GlobespinningImage from '../images/globespinning.jpg';
import HazelImage from '../images/hazel.jpg';
import conceptImage from '../images/ConceptImagePortfolio.jpg';
import creativeExplorerImage from '../images/CreativeExplorerMainImage.jpg';

const Work = () => (
  <section className="container mb-5 pb-5" id="work">
    <div className="row">
      <h2 className="col-sm">Work</h2>
    </div>
    <div className="row mb-4">
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/cue/"
          title="Cue Reminder"
          subtitle="Mobile app redesign"
          image={cueImage}
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
          link="/spend-tracker/"
          title="Spend Tracker"
          subtitle="New product"
          image={spendTrackerImage}
        />
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md-8 mb-4 mb-md-0">
        <WorkItem
          link="/globespinning/"
          title="Globespinning"
          subtitle="Mobile app redesign"
          image={GlobespinningImage}
          cover={false}
          bgColor="black"
        />
      </div>
      <div className="col-md-4 mb-4 mb-md-0">
        <WorkItem
          link="/creative-explorer/"
          title="Creative Explorer"
          subtitle="New product feature"
          image={creativeExplorerImage}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h3>Design Systems</h3>
        <WorkItem
          link="/new-engen-design-system/"
          title="New Engen Design System"
          image={designSystemImage}
        />
      </div>
      <div className="col-md-6">
        <h3>Concepts</h3>
        <WorkItem
          cover={false}
          link="/concepts/"
          title="Concept Work"
          image={conceptImage}
          bgColor="white"
        />
      </div>
    </div>
  </section>
);

export default Work;

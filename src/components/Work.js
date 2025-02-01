import React, { Fragment } from 'react';

import WorkItem from '../components/WorkItem';

import nginxImage from '../images/nginx.png';
import designSystemImage from '../images/NEDesignSystemHero.jpg';
import HazelImage from '../images/hazel.jpg';
import datadogImage from '../images/datadog-logo.png';

const Work = () => (
  <Fragment>
    <section className="container mb-5 pb-5" id="work">
      <div className="row">
        <h5 className="col-sm">Current Work</h5>
      </div>
      <div className="row mb-4">
        <div className="col-md-12 mb-4 mb-md-0">
          <WorkItem href="https://www.datadoghq.com/product/cloud-cost-management/" image={datadogImage} />
        </div>
      </div>
    </section>

    <section className="container mb-5 pb-5" id="work">
      <div className="row">
        <h5 className="col-sm">Past Work</h5>
      </div>
      <div className="row mb-4">
        <div className="col-md-12 mb-4 mb-md-0">
          <WorkItem href="https://www.nginx.com/" image={nginxImage} />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-8">
          <WorkItem
            link="/new-engen-design-system/"
            title="New Engen Design System"
            image={designSystemImage}
          />
        </div>
        <div className="col-md-4">
          <WorkItem
            link="/hazel/"
            title="Hazel Analytics"
            subtitle="Web app redesign"
            image={HazelImage}
          />
        </div>
      </div>
    </section>
  </Fragment>
);

export default Work;

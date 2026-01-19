import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import WorkItem from '../components/WorkItem';

import datadogImage from '../images/datadog-logo.png';
import instanceExplorerImage from '../images/instance-explorer.jpg';
import cloudCostImage from '../images/cloud-cost-management-hero.png';

const Work = () => (
  <Fragment>
    <section className="container mb-5 pb-5" id="work">
      <div className="row">
        <h3 className="col-sm">Current Work</h3>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <WorkItem href="https://www.datadoghq.com/product/cloud-cost-management/" title="Cloud Cost Management" image={cloudCostImage} />
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <WorkItem href="https://instances.datadoghq.com/" title="Instance Explorer" image={instanceExplorerImage} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Link to="/past-work/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '1rem' }}>
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Work;

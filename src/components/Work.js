import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import WorkItem from '../components/WorkItem';

import datadogImage from '../images/datadog-logo.png';

const Work = () => (
  <Fragment>
    <section className="container mb-5 pb-5" id="work">
      <div className="row">
        <h5 className="col-sm">Current Work</h5>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <WorkItem href="https://www.datadoghq.com/product/cloud-cost-management/" title="Cloud Cost Management" image={datadogImage} />
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <WorkItem href="https://instances.datadoghq.com/" title="Instance Explorer" image={datadogImage} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Link to="/past-work/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '1rem' }}>
            View Past Work →
          </Link>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Work;

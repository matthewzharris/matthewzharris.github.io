import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import WorkItem from '../components/WorkItem';
import { PATH_PREFIX_COOKIE } from '../constants';

import nginxImage from '../images/nginx.png';
import designSystemImage from '../images/NEDesignSystemHero.jpg';
import HazelImage from '../images/hazel.jpg';
import newEngenLiftImage from '../images/new-engen-lift.jpeg';
import instanceExplorerImage from '../images/instance-explorer.jpg';
import cloudCostImage from '../images/cloud-cost-management-hero.png';

export default class PastWork extends React.Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, '');
  }

  render() {
    return (
      <Fragment>
        <Helmet title="Work | matt harris" />
        <Hero title="Work" customClassName="mb-4">
          <p style={{ marginBottom: 0 }}>A collection of projects and design work</p>
        </Hero>

        <section className="container mb-5 pb-5">
          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <WorkItem href="https://www.datadoghq.com/product/cloud-cost-management/" title="Cloud Cost Management" image={cloudCostImage} />
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <WorkItem href="https://instances.datadoghq.com/" title="Instance Explorer" image={instanceExplorerImage} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <WorkItem href="https://www.nginx.com/" title="NGINX" image={nginxImage} />
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <WorkItem href="https://newengen.com/technology/" title="New Engen" subtitle="LIFT Platform" image={newEngenLiftImage} />
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
  }
}

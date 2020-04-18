import React, { Component } from 'react';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Video from '../components/Video';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class IndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, '');
  }

  render() {
    return (
      <div className="container">
        <Hero title="Concept Work" />
        <div className="row mb-6">
          <div className="col-md-6">
            <Video
              width="100%"
              src="https://www.dropbox.com/s/yquf64v74yg3rs8/ReportingPrototypePortfolio.mp4?raw=1"
            />
          </div>
          <div className="col-md-6">
            <h3>Report Builder</h3>
            <p>
              Marketers use more than 5 different tools on a daily basis to
              manage their campaigns and can spend up to 5% of their time
              creating reports to communicate results.
            </p>
          </div>
        </div>
        <div className="row mb-6">
          <div className="col-md-6">
            <h3>Marketing Platform Vision</h3>
            <p>
              Marketers need a single place to handle their digital marketing
              efforts where they can manage and gain insights from the main
              marketing levers available to them including: campaigns,
              audiences, creatives and budgets.
            </p>
          </div>
          <div className="col-md-6">
            <Video
              width="100%"
              src="https://www.dropbox.com/s/9n5quh3opo38zho/ProductVisionPrototype.mp4?raw=1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Video
              width="100%"
              src="https://www.dropbox.com/s/77fwth7vwgbq0a4/OnboardingPrototype.mp4?raw=1"
            />
          </div>
          <div className="col-md-6">
            <h3>Onboarding Experience</h3>
            <p>
              Users need orientation to complex enterprise tools so they are
              able to understand all that they are able to accomplish in the
              platform.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class IndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, '');
  }

  render() {
    return (
      <div>
        <Hero title="Matt Harris">
          <p className="index-subtitle">
          Product-minded UX Designer based in San Francisco working at{' '}
            <a href="https://datadoghq.com/" target="_blank">
              Datadog
            </a>
            .
          </p>
        </Hero>
        <Work />
        <About />
      </div>
    );
  }
}

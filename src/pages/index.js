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
            Product-minded UX Designer based in Los Angeles working at{' '}
            <a href="https://www.nginx.com/" target="_blank">
              Nginx (F5)
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

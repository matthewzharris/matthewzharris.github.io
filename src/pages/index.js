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
        <Hero title="matt harris">
          <p>
            Product-minded UX Designer living in Seattle working at{' '}
            <a href="https://www.newengen.com/" target="_blank">
              New Engen
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

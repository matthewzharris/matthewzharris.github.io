import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/honeywell/Work';
import Interests from '../components/honeywell/Interests';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class HoneywellIndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, 'honeywell');
  }

  render() {
    return (
      <div>
        <Hero title="matt harris">
          <p>
            I’m a UX Designer looking to build interactions and interfaces for
            the next generation of applications
          </p>
        </Hero>
        <Interests />
        <Work />
        <About hideUX />
      </div>
    );
  }
}

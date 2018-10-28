import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/liberty/Work';
import Interests from '../components/liberty/Interests';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class LibertyIndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, 'liberty');
  }

  render() {
    return (
      <div>
        <Hero title="matt harris">
          <p>
            I’m a UX Designer looking to help transform consumer products for
            the next generation
          </p>
        </Hero>
        <Interests />
        <Work />
        <About hideUX />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Link from 'gatsby-link';
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
            UX Designer @ <a href="https://www.newengen.com/" target="_blank">New Engen</a>
          </p>
        </Hero>
        <Work />
        <About />
      </div>
    );
  }
}

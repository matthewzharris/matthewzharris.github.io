import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/knowledge/Work';
import Interests from '../components/knowledge/Interests';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class KnowledgeAnywhereIndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, 'knowledge');
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

import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/amazon/Work';
import Interests from '../components/amazon/Interests';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class AmazonIndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, 'amazonian');
  }

  render() {
    return (
      <div>
        <Hero title="matt harris">
          <p>I’m a UX Designer who loves building simple, beautiful products</p>
        </Hero>
        <Interests />
        <Work />
        <About hideUX />
      </div>
    );
  }
}
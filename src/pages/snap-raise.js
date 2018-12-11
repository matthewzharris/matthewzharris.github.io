import React, { Component } from 'react';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/snap-raise/Work';
import Interests from '../components/snap-raise/Interests';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';

export default class SnapRaiseIndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, 'snap-raise');
  }

  render() {
    return (
      <div>
        <Hero title="matt harris">
          <p>
            I’m a UX Designer who loves building simple, beautiful products for
            good
          </p>
        </Hero>
        <Interests />
        <Work />
        <About hideUX />
      </div>
    );
  }
}

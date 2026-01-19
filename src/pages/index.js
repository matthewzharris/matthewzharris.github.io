import React, { Component } from 'react';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import Work from '../components/Work';
import Experience from '../components/Experience';
import About from '../components/About';
import { PATH_PREFIX_COOKIE } from '../constants';
import portraitImage from '../images/hero-image.jpg';

export default class IndexPage extends Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, '');
  }

  render() {
    return (
      <div>
        <Hero portrait={portraitImage} portraitAlt="Matt Harris presenting">
          <h1 className="stylized-name">
            <span className="name-matt">Matt</span>{' '}
            <span className="name-harris">Harris</span>
          </h1>
          <p className="index-subtitle">
          Product Design Manager based in San Francisco working at{' '}
            <a href="https://datadoghq.com/" target="_blank">
              Datadog
            </a>
            .
          </p>
        </Hero>
        <Work />
        <Experience />
        <About />
      </div>
    );
  }
}

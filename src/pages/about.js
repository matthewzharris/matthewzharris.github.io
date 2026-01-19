import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Cookie from 'js-cookie';

import Hero from '../components/Hero';
import { PATH_PREFIX_COOKIE } from '../constants';
import portraitImage from '../images/hero-image.jpg';
import '../components/Experience.css';

export default class About extends React.Component {
  componentDidMount() {
    Cookie.set(PATH_PREFIX_COOKIE, '');
  }

  render() {
    return (
      <Fragment>
        <Helmet title="About | matt harris" />
        <Hero title="About Me" portrait={portraitImage} portraitAlt="Matt Harris presenting">
          <p>
            Hi, I'm Matt. I'm a design manager and product designer living in San Francisco,
            with nearly a decade of experience as a fiercely collaborative designer across a
            range of company sizes.
          </p>
          <p>
            I'm currently passionate about using AI to improve design and engineering workflows,
            especially in ways that reduce friction and help teams focus on what actually matters.
            I'm particularly interested in bringing AI-first experiences to users that measurably
            improve their lives — not just by adding new capabilities, but by making complex
            systems feel clearer, faster, and more humane.
          </p>
          <p>
            For the past four years, I've led multiple design teams at Datadog, including
            Dashboards, Notebooks, Monitors, and most recently the Cost team, which spans Cloud
            Cost Management, Billing, and Metrics. Along the way, I've worked on larger
            initiatives like creating the <a href="https://adp.datadog.design/" target="_blank" rel="noopener noreferrer">Associate Design Program</a> and helping establish new
            career paths for designers.
          </p>
          <a href="/Matt Harris Resume.pdf" download="Matt Harris Resume.pdf" className="download-resume-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </Hero>
      </Fragment>
    );
  }
}

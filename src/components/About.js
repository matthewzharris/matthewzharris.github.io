import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import './About.css';

const About = ({ hideUX }) => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <h2 className="col-sm">About</h2>
    </div>
    <div className="row">
      <div className="col-lg about-img mb-4 mb-lg-0" />
      <div className="col-lg">
        <p>
          Whether flipping through the latest
          <i> Design within Reach</i> or traveling to the Rietveld Schröder
          house in the Netherlands, I’ve always been obsessed with good
          design—from product to typography to architecture. That obsession with
          design includes technology and interfaces, which led me to UX design.
          A Virginia native, I moved to Seattle to be a part of the vibrant UX
          design community. On weekends, you can typically find me exploring the
          city, hiking a nearby mountain, or watching old movies with my dog
          Bogart.
        </p>
        {!hideUX ? (
          <Fragment>
            <p>
              <strong>Why UX</strong>
            </p>
            <p>
              A focus on users has always been a part of my process. In my UX
              career and past experience in tech consulting, I’ve seen firsthand
              users interacting with software and have been fascinated with the
              implications of design on their experiences. Moving to a proactive
              design role to create for users needs is incredibly fulfilling
              work that I look forward to sharing with the community.
            </p>
          </Fragment>
        ) : null}
        <div
          id="contact"
          className="contact-links d-flex align-items-center justify-content-between"
        >
          <a
            type="button"
            className="btn btn-light mb-4 mb-sm-0"
            href="./Matt Harris Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
          <a href="mailto:matthewzharris@gmail.com">matthewzharris@gmail.com</a>
          <a href="https://www.linkedin.com/in/matthewzharris/" target="_blank">
            linkedin
          </a>
          <a href="https://github.com/matthewzharris" target="_blank">
            github
          </a>
        </div>
      </div>
    </div>
  </section>
);

About.defaultProps = {
  hideUX: false,
};

export default About;

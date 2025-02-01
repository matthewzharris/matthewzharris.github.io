import React from 'react';

import './About.css';

const About = ({ hideUX }) => (
  <section className="container mt-5 mb-5" id="about">
    <div
      id="contact"
      className="contact-links d-flex align-items-center justify-content-after"
    >
      <a
        type="button"
        className="btn btn-light mb-4 mb-sm-0 mr-4"
        href="/Matt Harris Resume.pdf"
        target="_blank"
      >
        Resume
      </a>
      <a href="mailto:matthewzharris@gmail.com" className="mr-4">
        matthewzharris@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/matthewzharris/" target="_blank">
        linkedin
      </a>
    </div>
  </section>
);

About.defaultProps = {
  hideUX: false,
};

export default About;

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import HazelImage from '../images/hazel.jpg';

const Hazel = () => (
  <Fragment>
    <Helmet title="Hazel Analytics | matt harris" />
    <Hero
      title="Hazel Analytics"
      image={HazelImage}
      imageAlt="Hazel Analytics Logo"
    >
      <p>
        Coming Soon
      </p>
    </Hero>
  </Fragment>
);

export default Hazel;

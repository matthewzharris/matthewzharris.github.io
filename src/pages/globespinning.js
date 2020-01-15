import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import GlobespinningImage from '../images/globespinning.jpg';

const Hazel = () => (
  <Fragment>
    <Helmet title="Globespinning | matt harris" />
    <Hero
      title="Globespinning"
      image={GlobespinningImage}
      imageAlt="Globespinning Logo"
    >
      <p>
        Coming Soon
      </p>
    </Hero>
  </Fragment>
);

export default Hazel;

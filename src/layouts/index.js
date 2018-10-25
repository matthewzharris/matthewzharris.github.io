import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import favicon from '../images/favicon.png';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'matt harris portfolio' },
        { name: 'keywords', content: 'ux, design, portfolio, matt harris' },
      ]}
    >
      <link key="icon" rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=PT+Serif"
        rel="stylesheet"
      />
    </Helmet>
    <Navigation />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-128123257-1"
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-128123257-1');`}
      </script>

      <link key="icon" rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=PT+Serif"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.4.1/js/all.js"
        integrity="sha384-L469/ELG4Bg9sDQbl0hvjMq8pOcqFgkSpwhwnslzvVVGpDjYJ6wJJyYjvG3u8XW7"
        crossorigin="anonymous"
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

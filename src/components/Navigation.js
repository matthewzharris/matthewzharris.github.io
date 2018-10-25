import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Transition, config } from 'react-spring';
import Cookie from 'js-cookie';

import logo from '../images/logo.png';
import { PATH_PREFIX_COOKIE } from '../constants';
import './Navigation.css';

class Navigation extends Component {
  state = {
    pathPrefix: '',
  };

  componentDidMount() {
    setTimeout(() => {
      const pathPrefix = Cookie.get(PATH_PREFIX_COOKIE);
      if (pathPrefix) {
        this.setState({ pathPrefix });
      }
    }, 500);
  }

  render() {
    const { pathPrefix } = this.state;
    return (
      <Transition config={config.slow} from={{ top: -50 }} enter={{ top: 0 }}>
        {styles => (
          <ul style={styles} className="nav justify-content-end p-2 fixed-top">
            <Link className="nav-logo-link" to={`${pathPrefix}/`}>
              <img className="nav-logo" src={logo} alt="logo" />
            </Link>
            <li className="nav-item">
              <Link className="nav-link" to={`${pathPrefix}/#work`}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${pathPrefix}/#about`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${pathPrefix}/#contact`}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </Transition>
    );
  }
}

export default Navigation;

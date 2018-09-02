import React from 'react'
import Link from 'gatsby-link'
import { Transition, config } from 'react-spring'

import logo from '../images/logo.png'
import './Navigation.css'

const Navigation = () => (
  <Transition config={config.slow} from={{ top: -50 }} enter={{ top: 0 }}>
    {styles => (
      <ul style={styles} className="nav justify-content-end p-2 fixed-top">
        <Link className="nav-logo-link" to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <li className="nav-item">
          <Link className="nav-link" to="/#work">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    )}
  </Transition>
)

export default Navigation
